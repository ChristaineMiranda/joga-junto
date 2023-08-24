import styled from "styled-components";

export const GroupName = styled.div`
font-weight:800;
margin-bottom: 10px;
color: #FFFFFF;
`;
export const MemberContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fafafa;
    height: 100%;
    width: 100%;
`;
export const MemberBox = styled.div`
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
export const PreviewButton = styled.button`
        background-color: #ec7819;
`;
export const ModalStyle = {
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
        backgroundColor: '#EC793D',
        fontSize: '12px'
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.664)',
        zIndex: '1000',
    }
};