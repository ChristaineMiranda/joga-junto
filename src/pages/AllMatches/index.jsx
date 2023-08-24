import { useEffect, useState, useContext } from "react";
import api from "../../services/api";
import { AuthContext } from "../../contexts";
import { useNavigate } from "react-router-dom";
import { Title, Team, InfoTeams, InfoMatch, MatchBox, MatchesPanel, ContainerMatches } from "./style";
import timeConverter from "../../utils/timeConverter";


export default function AllMatches() {
  const [matches, setMatches] = useState([]);
  const { userAuth } = useContext(AuthContext);
  const token = userAuth.token;
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) return navigate("/not-logged-in");
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
        <div>Campeonato Brasileiro Feminino 2023</div>
      </Title>
      <MatchesPanel>
        {matches.map((item, index) => <Match key={index} item={item} />)}
      </MatchesPanel>
    </ContainerMatches>
  );
}

export function Match({ item }) {
  const timeConverted = timeConverter(item.dateTime);

  return (
    <MatchBox>
      <InfoMatch>
        <div>{`${item.step}`}</div>
        <div>
          <p>{`${timeConverted.dateFormat}`} </p>
          <div></div>
          <p>{`${timeConverted.timeFormat}`}</p>
        </div>
      </InfoMatch>
      <InfoTeams>
        <Team>
          <div>{`${item.firstTeam}`} </div>
          <div>{item.goalsFirst != null ? `${item.goalsFirst}` : ""}</div>
        </Team>
        <Team>
          <div> {`${item.secondTeam}`}</div>
          <div>{item.goalsSecond != null? `${item.goalsSecond}` : ""}</div>
        </Team>


      </InfoTeams>
    </MatchBox>
  );
}

