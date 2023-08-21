import { useState, React, useContext }  from "react";
import styled from "styled-components";
import Modal from "react-modal";
import api from "../../../services/api";
import {AuthContext} from "../../../contexts";
Modal.setAppElement('#root');



export default function NewGroupModal({modalIsOpen, setModalIsOpen}) {
    
    const [nameGroup, setNameGroup] = useState("");
    const { userAuth } = useContext(AuthContext);
    const token = userAuth.token;

    function openModal() {
        setModalIsOpen(true);
    }
    function closeModal() {
        setModalIsOpen(false);
    }
    async function registerNewGroup(){
        if(!nameGroup) return alert("Escolha um nome para criar o grupo");
        alert("Criando seu grupo em 3, 2, 1...");
        try {
            await api.postGroup(token, {name: nameGroup});            
        } catch (error) {
            const {code} = error; 
            if(code === 'ERR_BAD_REQUEST') alert("Esse nome já está em uso. Escolha outro nome para o seu grupo e tente novamente");
        }
        setNameGroup("");
        closeModal();
    }
    return (
        <div>
            <NewGroupButton onClick={openModal}> Criar novo grupo</NewGroupButton>
            <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Create a new group"
            style={ModalStyle}
            >
                <InputModal type="text" value={nameGroup} onChange={(e) => setNameGroup(e.target.value)} />
                <ModalButton onClick={registerNewGroup}>Enviar</ModalButton>

            </Modal>

        </div>
    )
}

const NewGroupButton = styled.button`
    width:100%;
    height: 50px;
    font-size: 14px;
    border-radius: 10px;
    border-color: #c7a0ec;
    color: #FFFFFF;
    font-weight: bolder;
    background-color: #a25de4; 
    margin-bottom:20px;  
`;
const ModalButton = styled.button`
     width: 100px;
    height: 50px;
    font-size: 14px;
    border-radius: 10px;
    border-color: #367c2f;
    color: #FFFFFF;
    font-weight: bolder;
    background-color: #1e5249;
`;
const ModalStyle = {
    content: {
        top:'20%',
        bottom: '58%',
        rigth: '30%',
        left: '30%',
        maxWidth: '400px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius: '10px',
        backgroundColor: '#e4ffc3'
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: '1000',
    }
};
const InputModal = styled.input`
    width:90%;
    height: 30px;
    border-color: #d8ffa9;
    border-radius: 7px;
    
`;