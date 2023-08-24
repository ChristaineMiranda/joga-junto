import {RankingBox, Position, Line, Info} from "./style";

export default function RankingComponent({ ranking }) {
    return (
        <RankingBox>
            {ranking.map((item, index) => (<LineRanking key={index} index={index} name={item.User.name} foto={item.User.foto} score={item.score} />))}
        </RankingBox>

    )
}

function LineRanking({ name, foto, score, index }) {
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