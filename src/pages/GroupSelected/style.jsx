import styled from "styled-components";

export const GroupName = styled.div`
background-color:#04032b;
height: 20%;
color: #FFFFFF;
display: flex;
align-items: center;
justify-content: center;
padding: 10px;
font-weight: 600;
`;
export const Line = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
border-color: #94c7f3;
border-width: 1px;
border-style: solid;
align-items: center;
padding: 3px;
div{
    overflow: hidden;
}
img{
    width: 35px;
    border-radius: 40%;
    @media(max-width:768px){
    display:none    
    }
}
`;
export const Position = styled.div`
    display: flex;
    justify-content: center;
    width: 10%;
    height: 100%;
    align-items: center;
    color: white;
    font-size: 16px;
    font-weight: bolder;
    border-radius: 8px;
    background-color: #a7a9fc;
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
`;
export const Container = styled.div`
    width: 99vw;
    min-height: 100vh;
    margin-top:80px;
    display: flex;
    flex-direction: column;
    @media (max-width: 768px) {
        margin-top:110px;       
    }
`;
export const GroupContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: space-between;
`;
export const MatchesContainer = styled.div`
    background-color: #f4faf4;
    width: 80%;
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: first baseline;
    
    @media(max-width:768px){
        width: 65%;
        min-height: 100%;
        flex-direction: column;
        flex-wrap: nowrap;
        overflow-y: auto;
        justify-content: flex-start;        
    }
`;
export const RankingContainer = styled.div`
width:20%;
display: flex;
flex-direction: column;
align-items: center;
border-right: 1px solid #012401;
@media(max-width: 768px){
    width: 40%;
}
`;
