import { useNavigate } from "react-router-dom";
import styled from "styled-components";


export default function GroupComponent({ group }) {
    const dataGroup = group.Group; 
    const navigate = useNavigate();   

    async function selectGroup(){
        const id = dataGroup.id;
        navigate(`/group-selected/${id}`);       
    }

    return (
        <LineGroup onClick={selectGroup}>
            <GroupInfo>
                <div>{dataGroup.name}</div>
                <div>{dataGroup.codeGroup}</div>
            </GroupInfo>
            <GroupScore>
                Minha pontuação no grupo: {group.score}
            </GroupScore>
        </LineGroup>
    )
}

const GroupScore = styled.div`
    margin-top: 10px;
font-size: 14px;

@media (max-width: 768px) {
    text-align: center;
}
`;
const GroupInfo = styled.div`
 & > div:nth-child(1) {
    font-weight: 600;
    font-size: 18px;
    color:#474849;
    margin-bottom: 2px;
}
& > div:nth-child(2) {
    color: #9196A2;
}
@media (max-width: 768px) {
    flex-direction: column;
    text-align:center;
}
`;
const LineGroup = styled.div`
width: 70%;
height: 100px;
border-color: pink;
border-radius: 8px;
border-width: 1px;
border-style: solid;
margin-bottom: 10px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
cursor: pointer;
div{
    display: flex;
    justify-content: space-around;
    width: 100%;
    font-size: 14px;
}
`;