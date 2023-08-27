import styled from "styled-components";

export const GroupName = styled.div`
font-weight:800;
margin-bottom: 10px;
color: #f57b09;
`;
export const ContentModal = styled.div`
min-height:100%;
margin: 15px;
`;
export const MemberContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 20%;
    width: 100%;
`;
export const MemberBox = styled.div`
display: flex;
margin-top: 10px;
align-items: center;
width: 100%;
border-bottom: 1px solid #F5DEB3;
padding-bottom: 2px;
img{
    width: 25px;
    height: 25px;
    border-radius: 100px;
    margin-right: 5px;
}
`;
export const PreviewButton = styled.button`
        background-color: #ec7819;
`;
export const ModalStyle = {
    content: {
        minHeight: '400px',
        width: '230px',
        display: 'flex',
        flexDirection: 'column',  
        justifyContent: 'flex-start',    
        borderRadius: '10px',
        backgroundColor: '#FFFFFF',
        fontSize: '12px'
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        position: 'fixed',
        top: '0',
        bottom: '0',
        rigth: '0',
        left: '0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
};