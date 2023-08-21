import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import { AuthContext } from "../../contexts";
import styled from "styled-components";

export default function GroupSelected() {
    const { idGroup } = useParams();
    const id = Number(idGroup);
    const [rankingGroup, setRankingGroup] = useState([]);
    const [lastMatches, setLastMatches] = useState([]);
    const [myGuesses, setMyGuesses] = useState([]);
    const [nameGroup, setNameGroup] = useState("");
    const { userAuth } = useContext(AuthContext);
    const token = userAuth.token;

    useEffect(() => {
        async function showDetails() {
            try {
                const ranking = await api.getRankingByGroup(token, id);
                const matches = await api.getLastGames(token);
                const guesses = await api.getMyGuesses(token, id);

                setRankingGroup(ranking.data);
                setLastMatches(matches.data);
                setMyGuesses(guesses.data);
                if (ranking.data.length) setNameGroup(ranking.data[0].Group.name);

            } catch (error) {
                console.log(error);
            }
        }
        showDetails()
    }, []);

    return (
        <Container>
            <GroupName>{nameGroup}</GroupName>
            <GroupContainer>
                <RankingContainer>
                    {rankingGroup.map((item, index) => <LineRanking key={index} item={item} index={index} />)}
                </RankingContainer>

                <MatchesContainer>
                    {lastMatches.map((item, index) => <MatchBox myGuesses={myGuesses} token={token} idGroup={id} key={index} item={item} index={index} />)}
                </MatchesContainer>
            </GroupContainer>
        </Container>
    );
}

function LineRanking({ item, index }) {
    const position = index + 1;

    return (
        <Line>
            <Position>{position}</Position>
            <Info>
                <img src={item.User.foto} />
                <div>{item.User.name}</div>
                <div>{item.score}</div>
            </Info>
        </Line>
    )
}
function MatchBox({ item, token, idGroup, myGuesses }) {
    const [goalsFirstTeam, setGoalsFirstTeam] = useState();
    const [goalsSecondTeam, setGoalsSecondTeam] = useState();
    const [goalsFirstGuess, setGoalsFirstGuess] = useState();
    const [goalsSecondGuess, setGoalsSecondGuess] = useState();
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [buttonText, setButtonText] = useState("Registrar");
    const [correctGuess, setCorrectGuess] = useState();
    const [color, setColor] = useState("#dbf3d6");
    const [showResults, setShowResults] = useState(false);
    const date = item.date.split('-');
    const dateFormat = date[2] + '/' + date[1];


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

        }
        if (!guessThisGame && item.winner) {
            setButtonDisabled(true);
            setGoalsFirstTeam(item.goalsFirst);
            setGoalsSecondTeam(item.goalsSecond);
            setButtonText("Fim de jogo!");
            setShowResults(true);
        }
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
            <div>
                <div>{item.round}</div>
                <div>{dateFormat}</div>
            </div>
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
    )
}

const GroupName = styled.div`
background-color:#04032b;
height: 20%;
color: #FFFFFF;
display: flex;
align-items: center;
justify-content: center;
padding: 10px;
font-weight: 600;
`;
const RealResult = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 65%;
background-color: #ffffff;
border-radius: 8px;

&>:nth-child(1){
    font-size: 10px;
    font-weight: 500;
}
&>:nth-child(2){
    display: flex;    
    justify-content: space-between;
    font-weight: 400; 
    font-size: 14px;
    
    div{
        display: flex;
        align-items: center;
        div{
            display: flex;
            align-items: center;
            margin: 3px;
        }
    }
    @media (max-width: 768px){
        font-size: 10px;
    }
}
@media (max-width:768px){
    width: 75%;
}

`;
const SendButton = styled.button`
    width: 65%;
    height: 30px;
    background-color: ${props => props.disabled ? "#1f1f1f" : "#036b03"};
    color: #FFFFFF;
    font-weight: 500;
    border-radius: 5px;
    border-width: 3px;
    border-color: ${props => props.correctGuess ? "#dfd008" : "#023a02"};
    @media(max-width: 768px){
        height: 37px;
    }
`;
const Guesses = styled.div`
    display: flex;
    width: 90%;
    justify-content: center;
    font-weight: 600;    
    div{
        display: flex;
        align-items: center;
        input{
            width: 20px;
            height: 20px;
            border-color: #d6d3d3;
            border-style: solid;
            border-width: 1px;
            border-radius: 3px;
            margin-left: 4px;
            margin-right: 4px;
            &::-webkit-inner-spin-button,
            &::-webkit-outer-spin-button {
                appearance: none;
                margin: 0;
            }
        }
    }
    @media(max-width: 768px){
        width: 100%;
        font-size: 12px;
    }
`;
const InfosMatch = styled.div`
width: 30%;
height: 25%;
border-color: ${props => props.color};
border-style: solid;
border-width: 1px;
border-radius: 8px;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items:center;
margin: 5px;
border-radius: 10px;
background-color: ${props => props.color};
& > :nth-child(1){
    width: 100%;
    font-size:14px;
    font-weight: 300;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 5px;
 }

 @media(max-width: 768px){
    width: 80%;
    min-height: 20%;
}
`;
const Line = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
border-color: #94c7f3;
border-width: 1px;
border-style: solid;
align-items: center;
padding: 3px;
div{
    overflow: hidden;
}
img{
    width: 35px;
    border-radius: 40%;
    @media(max-width:768px){
    display:none    
    }
}
`;
const Position = styled.div`
    display: flex;
    justify-content: center;
    width: 10%;
    height: 100%;
    align-items: center;
    color: white;
    font-size: 16px;
    font-weight: bolder;
    border-radius: 8px;
    background-color: #a7a9fc;
`;
const Info = styled.div`
display: flex;
width: 88%;
justify-content: space-between;
align-items: center;
div{
    overflow: hidden;
}
img{
    width: 45px;
    border-radius: 40%;
    @media(max-width:768px){
    display:none    
    }
}
`;
const Container = styled.div`
    width: 99vw;
    max-height: 100vh;
    margin-top:80px;
    display: flex;
    flex-direction: column;
    @media (max-width: 768px) {
        margin-top:110px;       
    }
`;
const GroupContainer = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    justify-content: space-between;
`;
const MatchesContainer = styled.div`
    background-color: #f4faf4;
    width: 80%;
    min-height: 100vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    @media(max-width:768px){
        width: 65%;
        min-height: 100%;
        flex-direction: column;
        flex-wrap: nowrap;
        overflow-y: auto;
        
    }
`;
const RankingContainer = styled.div`
width:20%;
display: flex;
flex-direction: column;
align-items: center;
@media(max-width: 768px){
    width: 40%;
}
`;

