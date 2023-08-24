import styled from "styled-components";


export const Title = styled.div`
display: flex;
align-items: center;
width: 50%;
font-size: 20px;
margin-bottom: 30px;
margin-left: 50px;
color: green;
font-weight: 600;

 & > div:nth-child(1) {
width: 3px;
height: 35px;
margin-right: 10px;
background-color: green;
 }
`;
export const Team = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const InfoTeams = styled.div`
width: 90%;
height: 40%;
display: flex;
flex-direction: column;
justify-content: space-around;
& > div:nth-child(1) {
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: #d6e9d6;
}
`;
export const InfoMatch = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
  width: 90%;
  font-weight: 300;
  font-family: 'Roboto', sans-serif; 
  & > div:nth-child(2) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 5px;
    width: 30%;
    div{
      width: 2px;
      height: 2px;
      background-color: #000000;
      border-radius: 100px;
    }
  }
`;
export const MatchBox = styled.div`
margin: 5px;
border-color: #d6e9d6;
border-style: solid;
border-width: 1px;
width: 290px;
height: 130px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
`;
export const MatchesPanel = styled.div`
background-color: white;
width: 100vw;
min-height: 100vh;
display: flex;
justify-content: space-around;
flex-wrap: wrap;
overflow-y: auto;
`;
export const ContainerMatches = styled.div`
width: 100vw;
max-height: 100vh;
margin-top: 80px;
padding-top: 20px;
@media(max-width: 768px){
  margin-top: 110px;
}
`;
