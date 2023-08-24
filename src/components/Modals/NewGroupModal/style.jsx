import styled from "styled-components";
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
`;
export const ModalStyle = {
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
export const InputModal = styled.input`
    width:90%;
    height: 30px;
    border-color: #d8ffa9;
    border-radius: 7px;
    
`;
