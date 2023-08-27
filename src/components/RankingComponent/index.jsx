import {RankingBox, Position, Line, Info} from "./style";

export default function RankingComponent({ ranking }) {
    let atualPosition = 0;
    return( 
     <RankingBox>
            {ranking.map((item, index) => {
                if(index === 0 ||(item.score !== ranking[index-1].score)){ 
                 ++atualPosition
                }
                return(
                    <LineRanking
                    key={index}
                    position={atualPosition}
                    name={item.User.name}
                    foto={item.User.foto}
                    score={item.score}
                    />
                )
            }
            )}
        </RankingBox>
    );
}

function LineRanking({ name, foto, score, position }) {
    const completeName = name.split(" ");
    let nameShow = name;
    if(completeName.length >1){
        nameShow = completeName[0] + " " + completeName[1];
    }
    return (
        <Line>
            <Position>{position}</Position>
            <Info>
                <div><img src={foto} alt="" /></div>
                <div>{nameShow}</div>
                <div>{score}</div>
            </Info>
        </Line>
    )
}