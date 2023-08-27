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
margin-right: 3px;
@media (max-width: 768px) {
    width: 12%;
}
`;
export const Line = styled.div`
display:flex;
width: 100%;
height: 35px;
justify-content: flex-start;
border-width: 10px;
border-radius: 8px;
border-color: #EBE9F0;
border-style: solid;
border-width: 1px;
padding-left: 5px;
padding-right: 5px;
`;
export const RankingBox = styled.div`
display: flex;
flex-direction: column;
width: 100%;
`;
export const Info = styled.div`
display: flex;
width: 93%;
justify-content: space-between;
align-items: center;
&>:nth-child(3){
    margin-right:5px;
}
img{
    height: 30px;
    width: 30px;
    border-radius: 40%;
    @media(max-width:768px){
    display:none    
    }
}
@media(max-width: 768px){
    font-size: 11px;
}
`;