import { styled } from "styled-components";
import api from "../../services/api";
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../contexts";
import { useNavigate } from "react-router-dom";
import PreviewGroupModal from "../../components/Modals/PreviewGroupModal";
import {OptionsButtons, JoinButton, CreatorPicture, ContainerAllGroups, CreatorInfos, GroupInfos, GroupListedBox, LowerBox} from "./style";

export default function AllGroups() {
    const [groupsList, setGroupsList] = useState([]);
    const { userAuth } = useContext(AuthContext);
    const token = userAuth.token;
    const navigate = useNavigate();

    useEffect(() => {
        if (!token) return navigate("/not-logged-in");
        async function getAllGroups() {
            try {
                const { data } = await api.getAllGroups(token);
                setGroupsList(data);
            } catch (error) {
                console.log(error);
            }
        }
        getAllGroups()
    }, []);

    return (
        <ContainerAllGroups>
            {groupsList.map((item, index) => <GroupListed item={item} key={index} />)}
        </ContainerAllGroups>
    )
}


function GroupListed({ item }) {
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const { userAuth } = useContext(AuthContext);
    const token = userAuth.token;
    const navigate = useNavigate();

    useEffect(() => {
        const isMember = item.userBelongsToGroup;
        if (isMember) setButtonDisabled(true);
    }, []);

    async function joinGroup() {
        const id = item.id;
        try {
            await api.postJoinGroup(token, { id });
            alert("Ingresso registrado! Hora de palpitar no seu novo grupo associado");
            navigate(`/group-selected/${id}`);

        } catch (error) {
            console.log(error.message);
        }
    }
    
    return (
        <GroupListedBox>
            <GroupInfos>
                <div>{item.name}</div>
                <div>{item.codeGroup}</div>
            </GroupInfos>
            <LowerBox>
                <CreatorInfos>
                    <CreatorPicture src={item.User.foto} />
                    <div>{item.User.name}</div>
                </CreatorInfos>
                <OptionsButtons>
                    <PreviewGroupModal id={item.id} modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen}/>
                    <JoinButton disabled={buttonDisabled} onClick={joinGroup}>{buttonDisabled ? "Já faço parte" : "Participar"}</JoinButton>
                </OptionsButtons>
            </LowerBox>
        </GroupListedBox>
    );
}


