import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import { AuthContext } from "../../contexts";
import MatchBox from "../../components/MatchBox"
import { GroupName, Container, GroupContainer, MatchesContainer, RankingContainer } from "./style";
import RankingComponent from "../../components/RankingComponent/index";

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
                    <RankingComponent ranking={rankingGroup} />
                </RankingContainer>

                <MatchesContainer>
                    {lastMatches.map((item, index) => <MatchBox myGuesses={myGuesses} token={token} idGroup={id} key={index} item={item} index={index} />)}
                </MatchesContainer>
            </GroupContainer>
        </Container>
    );
}





