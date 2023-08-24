import Modal from "react-modal";
Modal.setAppElement('#root');
import { useState, useContext } from "react";
import api from "../../../services/api";
import { AuthContext } from "../../../contexts";
import {GroupName, MemberBox, MemberContainer, PreviewButton, ModalStyle} from "./style";

export default function PreviewGroupModal({ id, modalIsOpen, setModalIsOpen }) {
    const [preview, setPreview] = useState([]);
    const [groupName, setGroupName] = useState("");
    const { userAuth } = useContext(AuthContext);
    const token = userAuth.token;

    function closeModal() {
        setModalIsOpen(false);
    }

    async function openModalAndGetPreview() {

        try {
            const membersList = await api.getRankingByGroup(token, id);
            setPreview(membersList.data);
            setGroupName(membersList.data[0].Group.name);
            setModalIsOpen(true);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <PreviewButton onClick={openModalAndGetPreview}> Ver grupo</PreviewButton>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Group preview"
                style={ModalStyle}
            >
                <GroupName>{groupName}</GroupName>
                <MemberContainer>
                    {preview.map((item, index) => <Member key={index} item={item}/>)}
                </MemberContainer>
            </Modal>
        </div>
    );
}

function Member({item}){
    return(
        <MemberBox>
            <img src={item.User.foto}/>
            <div>{item.User.name}</div>
        </MemberBox>
    );
}


