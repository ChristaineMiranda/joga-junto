import { useState, React, useContext }  from "react";
import Modal from "react-modal";
import api from "../../../services/api";
import {AuthContext} from "../../../contexts";
import {NewGroupButton, ModalButton, ModalStyle, InputModal, TitleModal, CustomModal} from "./style";
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
            <CustomModal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Create a new group"
            style={ModalStyle}
            >
                <TitleModal>Escolha um nome para o grupo</TitleModal>
                <InputModal type="text" value={nameGroup} onChange={(e) => setNameGroup(e.target.value)} />
                <ModalButton onClick={registerNewGroup}>Enviar</ModalButton>

            </CustomModal>

        </div>
    )
}

