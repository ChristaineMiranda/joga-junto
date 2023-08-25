import styled from "styled-components";

export const OptionsButtons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 50%;
    height: 100%;    
    button{
        width: 65px;
        height: 38px;
        border-radius: 5px;
        border-color: #FFFFFF;
        font-size: 10px;
        font-weight: 900;
        color: #FFFFFF;
    }
    @media(max-width: 768px){
        width: 55%;
        margin-right: 5px;
    }
`;
export const JoinButton = styled.button`
    background-color:${props => props.disabled ? "#4CBAAB" : "#F7B13E"};
`;
export const CreatorPicture = styled.img`
    width: 40px;
    border-radius: 100px;
    margin-right: 10px;
    border-color: #FFFFFF;
    border-width: 2px;
    border-style: solid;
    @media(max-width:768px){
        width: 35px;
    }
`;
export const ContainerAllGroups = styled.div`
width:99vw;
min-height: 100vh;
margin-top: 80px;
display: flex;
flex-wrap: wrap;
justify-content: space-around;
@media(max-width: 768px){
    flex-direction: column;
    align-items: center;
    margin-top: 110px;
}
`;
export const CreatorInfos = styled.div`
display:flex;
align-items: center;
justify-content: flex-start;
font-size: 15px;
@media(max-width: 768px){
    font-size: 13px;
}
`;
export const GroupInfos = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
margin-top: 20px;
border-bottom-style:dotted;
border-bottom-width:1px;
border-bottom-color: #022e02;
padding-bottom: 10px;
&>:nth-child(1){
font-weight:600;
background-color: #e7e6e6;
padding: 8px;
border-radius: 8px;
}
&>:nth-child(2){
    color: #af5aaf;
    @media(max-width: 768px){
        font-size: 11px;
    }
}
`;
export const GroupListedBox = styled.div`
display:flex;
flex-direction: column;
width: 25%;
height: 120px;
margin: 15px;
border-radius: 8px;
border-style: solid;
border-color: purple;
border-width: 1px;
:hover{
    cursor: pointer;
}
@media (max-width: 768px) {
    height:140px ;
    width: 70%;
}
`;
export const LowerBox = styled.div`
    display: flex;
    height: 100%;
    justify-content: space-between;
   
`;
