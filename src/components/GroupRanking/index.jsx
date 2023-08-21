import { styled } from "styled-components";

export default function GroupRanking() {
    return (
        <TableRanking>
            <div>{mock.map((item, index) => <LineRanking item={item} key={index} position={index}/>)}</div>
        </TableRanking>
    );
}

function LineRanking({ item, position }) {
    return (
        <Line>
            <div>
                {position+1} . 
                <img src={item.foto} />
                {item.nome}
            </div>
            <div>{item.score}</div>
        </Line>

    );
}

const TableRanking = styled.div`
    border-width: 5px;
    border-style: solid;
    border-color: rgb(81, 183, 116);
    border-radius: 0px 0px 129px 129px;
    -webkit-border-radius: 0px 0px 129px 129px;
    -moz-border-radius: 0px 0px 129px 129px;
    width: 30%;
    padding: 4%;
    background-color: rgb(48, 58, 146);
`;
const Line = styled.div`
    width: 100%;
    height: 5vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    border-color: rgb(81, 183, 116);
    border-width: 2px;
    border-style: solid;
    margin-bottom: 10px;
    border-radius: 5px;
    div{
        display: flex;
        align-items: center;
        margin-left: 10px;
    }

    div:nth-child(2){
        margin-right: 10px;
    }
    img{
        margin-right: 8px;
        width: 40px;
        border-radius: 100px;
    }
`;
