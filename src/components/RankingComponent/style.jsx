import styled from "styled-components";

export const Position = styled.div`
display: flex;
justify-content: center;
width: 10%;
align-items: center;
color: white;
font-size: 16px;
font-weight: bolder;
border-radius: 8px;
background-color: #a7a9fc;
`;
export const Line = styled.div`
display:flex;
width: 100%;
height: 35px;
justify-content: space-between;
border-width: 10px;
border-radius: 8px;
border-color: #EBE9F0;
border-style: solid;
border-width: 1px;
padding: 3px;
`;
export const RankingBox = styled.div`
display: flex;
flex-direction: column;
width: 100%;
`;
export const Info = styled.div`
display: flex;
width: 88%;
justify-content: space-between;
align-items: center;
div{
    overflow: hidden;
}
img{
    width: 45px;
    border-radius: 40%;
    @media(max-width:768px){
    display:none    
    }
}
@media(max-width: 768px){
    font-size: 11px;
}
`;