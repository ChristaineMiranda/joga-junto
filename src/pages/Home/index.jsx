import { useEffect, useState, useContext } from "react";
import { styled } from "styled-components";
import api from "../../services/api";
import { AuthContext } from "../../contexts";
import MyGroups from "../../components/MyGroups";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const { userAuth } = useContext(AuthContext);
    const token = userAuth.token;
    const [ranking, setRanking] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        if(!token) return navigate("/not-logged-in");
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
                <LineBox>{ranking.map((item, index) => (<LineRanking key={index} index={index} name={item.User.name} foto={item.User.foto} score={item.score} />))}</LineBox>

            </Ranking>
            <MyGroupsBox>
                <MyGroups />
            </MyGroupsBox>

        </Container>
    );
}

function LineRanking(props) {
    const { name, foto, score, index } = props;
    const position = index + 1;
    return (
        <Line>
            <Position>{position}</Position>
            <Info>
                <img src={foto} alt="Profile image" />
                <div>{name}</div>
                <div>{score}</div>
            </Info>

        </Line>
    )
}

const MyGroupsBox = styled.div`
width: 50vw;
min-height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
background-color: #FFFFFF;
margin-right: 25px;
margin-top: 25px;
border-radius: 8px;

@media(max-width: 768px){
    margin-right: 0px;
}
`
const Title = styled.div`
    font-size: 20px;
    margin-bottom: 20px;
    margin-top: 20px;    
`;
const Position = styled.div`
    display: flex;
    justify-content: center;
    width: 10%;
    align-items: center;
    color: white;
    font-size: 16px;
    font-weight: bolder;
    border-radius: 8px;
    background-color: #a7a9fc;
`;
const Line = styled.div`
display:flex;
width: 100%;
height: 35px;
justify-content: space-between;
border-width: 10px;
border-radius: 8px;
border-color: #EBE9F0;
border-style: solid;
border-width: 1px;
padding: 1px;
`;
const LineBox = styled.div`
display: flex;
flex-direction: column;
width: 80%;
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
width: 100vw;
min-height: 100vh;
background-color: #EBE9F0;
margin-top: 80px;
display: flex;
justify-content: space-around;
overflow-y: auto;
@media(max-width:768px){
    justify-content: space-between;
}
`;
const Ranking = styled.div`
width: 40vw;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
background-color: #FFFFFF;
margin-left: 25px;
margin-top: 25px;
border-radius: 8px;
@media(max-width:768px){
    margin-left: 0px;
    width: 49vw;

}
`;

