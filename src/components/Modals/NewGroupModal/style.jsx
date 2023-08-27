import styled from "styled-components";
import Modal from 'react-modal';

export const NewGroupButton = styled.button`
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
export const ModalButton = styled.button`
    width: 100px;
    height: 50px;
    font-size: 14px;
    border-radius: 10px;
    border-color: #367c2f;
    color: #FFFFFF;
    font-weight: bolder;
    background-color: #1e5249;
    margin-top: 10px;
`;
export const CustomModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
 `;

export const ModalStyle = {
    content: {        
        width: '350px',
        height: '200px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius: '10px',
        backgroundColor: '#e4ffc3'
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        position: 'fixed',
        top: '0',
        bottom: '0',
        rigth:'0',
        left:'0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',     
    }
};
export const InputModal = styled.input`
    width:90%;
    height: 40px;
    border-color: #d8ffa9;
    border-radius: 7px;
    
`;
export const TitleModal = styled.div`
    font-size: 14px;
    font-weight: 300;
    margin-bottom: 5px;
`;
