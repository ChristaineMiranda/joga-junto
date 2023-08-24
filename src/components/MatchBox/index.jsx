import { useState, useEffect } from "react";
import api from "../../services/api";
import { RealResult, SendButton, Guesses, InfosMatch, DateAndTimeInfo } from "./style";
import timeConverter from "../../utils/timeConverter";

export default function MatchBox({ item, token, idGroup, myGuesses }) {
    const [goalsFirstTeam, setGoalsFirstTeam] = useState();
    const [goalsSecondTeam, setGoalsSecondTeam] = useState();
    const [goalsFirstGuess, setGoalsFirstGuess] = useState("");
    const [goalsSecondGuess, setGoalsSecondGuess] = useState("");
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [buttonText, setButtonText] = useState("Registrar");
    const [correctGuess, setCorrectGuess] = useState();
    const [color, setColor] = useState("#dbf3d6");
    const [showResults, setShowResults] = useState(false);

    const timeConverted = timeConverter(item.dateTime);

    function checkAvailability(dateTime) {
        const matchDate = new Date(dateTime)
        const currentDate = new Date();
        const isNotAvailability = matchDate <= currentDate;

        if (isNotAvailability) {
            setButtonText("Ops! Essa partida já está rolando");
            setButtonDisabled(true);
        }
    }

    useEffect(() => {
        const guessThisGame = myGuesses.find(guess => guess.gameId === item.id);
        if (guessThisGame) {

            setGoalsFirstGuess(guessThisGame.goalsFirstTeam);
            setGoalsSecondGuess(guessThisGame.goalsSecondTeam);
            setButtonDisabled(true);
            if (guessThisGame.isCorrect) {
                setCorrectGuess(true);
                setButtonText("Parabéns! Palpite correto 🏆");
                setColor("#F7F4A5");
                setGoalsFirstTeam(item.goalsFirst);
                setGoalsSecondTeam(item.goalsSecond);
                setShowResults(true);
            }
            else if (guessThisGame.isCorrect === false) {
                setButtonText("Não foi dessa vez 🦓");
                setColor("#eec2c2");
                setGoalsFirstTeam(item.goalsFirst);
                setGoalsSecondTeam(item.goalsSecond);
                setShowResults(true);
            }
            else setButtonText("Palpitei!");
            return;
        }
        if (!guessThisGame && item.winner) {
            setButtonDisabled(true);
            setGoalsFirstTeam(item.goalsFirst);
            setGoalsSecondTeam(item.goalsSecond);
            setButtonText("Fim de jogo!");
            setShowResults(true);
            return;
        }
        checkAvailability(item.dateTime);
    }, []);

    async function sendGuess() {
        const goalsFirst = Number(goalsFirstGuess);
        const goalsSecond = Number(goalsSecondGuess);
        if (isNaN(goalsFirst) || isNaN(goalsSecond)) return alert("Preencha corretamente os campos para registrar seu palpite");

        const data = { gameId: item.id, goalsFirstTeam: goalsFirst, goalsSecondTeam: goalsSecond, idGroup };
        try {
            await api.postGuess(token, data);
            setButtonDisabled(true);
            setButtonText("Palpitei!");
            alert("Sucesso! Palpite registrado");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <InfosMatch color={color}>
            <DateAndTimeInfo>
                <div>
                    <div>{item.step}</div>
                    <div>{timeConverted.dateFormat}</div>
                </div>
                <div>{timeConverted.timeFormat}</div>
            </DateAndTimeInfo>
            <Guesses>
                <div>
                    <div>{item.firstTeam}</div>
                    <input disabled={buttonDisabled} type="number" value={goalsFirstGuess} onChange={(e) => setGoalsFirstGuess(e.target.value)} />
                </div>
                <div>X</div>
                <div>
                    <input disabled={buttonDisabled} type="number" value={goalsSecondGuess} onChange={(e) => setGoalsSecondGuess(e.target.value)} />
                    <div>{item.secondTeam}</div>
                </div>
            </Guesses>
            {showResults ? <OficialResults nameFirstTeam={item.firstTeam} goalsFirstTeam={goalsFirstTeam} nameSecondTeam={item.secondTeam} goalsSecondTeam={goalsSecondTeam} /> : ""}

            <SendButton onClick={sendGuess} disabled={buttonDisabled} correctGuess={correctGuess}>{buttonText}</SendButton>
        </InfosMatch>
    );
}

function OficialResults({ nameFirstTeam, nameSecondTeam, goalsFirstTeam, goalsSecondTeam }) {
    return (
        <RealResult>
            <div>Resultado Oficial</div>
            <div>
                <div>
                    <div>{nameFirstTeam}</div>
                    <div>{goalsFirstTeam}</div>
                </div>
                <div>x</div>
                <div>
                    <div>{goalsSecondTeam}</div>
                    <div>{nameSecondTeam}</div>
                </div>
            </div>
        </RealResult>
    );
}
