import { useEffect, useState, useContext } from "react";
import api from "../../services/api";
import { AuthContext } from "../../contexts";
import MyGroups from "../../components/MyGroups";
import { useNavigate } from "react-router-dom";
import { MyGroupsBox, Title, Container, Ranking } from "./style";
import RankingComponent from "../../components/RankingComponent";

export default function Home() {
    const { userAuth } = useContext(AuthContext);
    const token = userAuth.token;
    const [ranking, setRanking] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (!token) return navigate("/not-logged-in");
        async function getRanking() {
            try {
                const list = await api.getRanking(token);
                setRanking(list.data);

            } catch (error) {
                console.log(error);
            }
        }
        getRanking();
    }, []);

    return (
        <Container>
            <Ranking>
                <Title>Ranking Geral</Title>
                <RankingComponent ranking={ranking} />
            </Ranking>
            <MyGroupsBox>
                <MyGroups />
            </MyGroupsBox>

        </Container>
    );
}





