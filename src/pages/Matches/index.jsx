import { useEffect, useState, useContext } from "react";
import { styled } from "styled-components";
import api from "../../services/api";
import { AuthContext } from "../../contexts";
import { useNavigate } from "react-router-dom";

export default function Matches() {
  const [matches, setMatches] = useState([]);
  const { userAuth } = useContext(AuthContext);
  const token = userAuth.token;
  const navigate = useNavigate();

  useEffect(() => {
    if(!token) return navigate("/not-logged-in");
    async function getMatches() {
      try {
        const { data } = await api.getMatches(token);
        setMatches(data);
      } catch (error) {
        console.log(error);
      }
    }
    getMatches();
  }, []);

  return (
    <ContainerMatches>
      <Title>
        <div></div>
        <div>Campeonato Brasileiro Feminino</div>
      </Title>
      <MatchesPanel>{matches.map((item, index) => <Match key={index} item={item} />)}</MatchesPanel>
    </ContainerMatches>
  );
}

export function Match({ item }) {
const date = item.date.split('-');
const dateFormat = date[2] + '/' + date[1];
  return (
    <MatchBox>
      <InfoMatch>
        <div>{`${item.round}`}</div>
        <div>
          <p>{`${dateFormat}`} </p>
          <div></div>
          <p>{`${item.time}`}</p>
        </div>
      </InfoMatch>
      <InfoTeams>
        <Team>
          <div>{`${item.firstTeam}`} </div>
          <div>{item.goalsFirst ? `${item.goalsFirst}` : ""}</div>
        </Team>
        <Team>
          <div> {`${item.secondTeam}`}</div>
          <div>{item.goalsFirst ? `${item.goalsSecond}` : ""}</div>
        </Team>


      </InfoTeams>
    </MatchBox>
  )
}
const Title = styled.div`
display: flex;
align-items: center;
width: 50%;
font-size: 20px;
margin-bottom: 30px;
margin-left: 50px;
color: green;
font-weight: 600;

 & > div:nth-child(1) {
width: 3px;
height: 35px;
margin-right: 10px;
background-color: green;
 }
`;
const Team = styled.div`
  display: flex;
  justify-content: space-between;
`;
const InfoTeams = styled.div`
width: 90%;
height: 40%;
display: flex;
flex-direction: column;
justify-content: space-around;
& > div:nth-child(1) {
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: #d6e9d6;
}
`;
const InfoMatch = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
  width: 90%;
  font-weight: 300;
  font-family: 'Roboto', sans-serif; 
  & > div:nth-child(2) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 5px;
    width: 30%;
    div{
      width: 2px;
      height: 2px;
      background-color: #000000;
      border-radius: 100px;
    }
  }
`;
const MatchBox = styled.div`
margin: 5px;
border-color: #d6e9d6;
border-style: solid;
border-width: 1px;
width: 290px;
height: 130px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
`;
const MatchesPanel = styled.div`
  background-color: white;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  overflow-y: auto;
`;
const ContainerMatches = styled.div`
width: 100vw;
max-height: 100vh;
margin-top: 80px;
padding-top: 20px;
`;

