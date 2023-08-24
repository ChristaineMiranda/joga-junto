import { useNavigate } from "react-router-dom";
import {GroupInfo, GroupScore, LineGroup } from "./style";

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

