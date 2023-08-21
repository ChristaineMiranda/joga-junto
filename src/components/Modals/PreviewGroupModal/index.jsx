import Modal from "react-modal";
Modal.setAppElement('#root');
import styled from "styled-components";
import { useState, useContext } from "react";
import api from "../../../services/api";
import { AuthContext } from "../../../contexts";

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

const GroupName = styled.div`
font-weight:800;
margin-bottom: 10px;
color: #FFFFFF;
`
const MemberContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fafafa;
    height: 100%;
    width: 100%;
`
const MemberBox = styled.div`
display: flex;
margin-top: 10px;
align-items: center;
width: 100%;
img{
    width: 40px;
    border-radius: 100px;
    margin-right: 5px;
}
`;
const PreviewButton = styled.button`
        background-color: #ec7819;
`;

const ModalStyle = {
    content: {
        rigth: '40%',
        left: '40%',
        maxWidth: '200px',
        minHeight:'400px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius: '10px',
        backgroundColor: '#EC793D'
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.664)',
        zIndex: '1000',
    }
};