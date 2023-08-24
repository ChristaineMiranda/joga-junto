import { useState } from "react";
import Modal from "react-modal";
Modal.setAppElement('#root');
import { AboutUs, HowWorks, Punctuation } from "./initialTexts";
import styled from "styled-components";


export default function InitialInfoModal({ name }) {
    const [modalIsOpen, setModalIsOpen] = useState(false)

    function openModal() {
        setModalIsOpen(true);
    }
    function closeModal() {
        setModalIsOpen(false);
    }
    // 
    return (
        <div>
            <div onClick={openModal}>{name}</div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Information about the platform"
                style={ModalStyle}
            >
                <ModalInterno>
                    {name==="Sobre nós"? <AboutUs /> : ""}
                    {name==="Como funciona"? <HowWorks/> : ""}
                    {name==="Pontuação"? <Punctuation/> : ""}
                    

                </ModalInterno>
                <CloseButton onClick={closeModal}>Fechar</CloseButton>


            </Modal>

        </div>
    );
}
export const ModalInterno = styled.div`
    height: 100vh;
`;
export const CloseButton = styled.button`
    width: 100%;
    height: 40px;
    border-radius: 8px;
    border-color: #c06ec0;
    background-color: #FFFFFF;
    cursor: pointer;
    margin-top: 10px;
`

export const ModalStyle = {
    content: {
        rigth: '40px',
        left: '40px',
        maxWidth: '500px',
        minHeight: '400px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: '10px',
        backgroundColor: '#e1cbff',
        fontSize: '14px'
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.664)',
        zIndex: '1000',
    }
};