import styled from "styled-components";

export const MyGroupsBox = styled.div`
width: 50vw;
min-height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
background-color: #FFFFFF;
margin-right: 25px;
margin-top: 25px;
border-radius: 8px;

@media(max-width: 768px){
    margin-right: 0px;
}
`;
export const Title = styled.div`
    font-size: 20px;
    margin-bottom: 20px;
    margin-top: 20px;    
`;
export const Container = styled.div`
width: 100vw;
min-height: 100vh;
background-color: #EBE9F0;
margin-top: 80px;
display: flex;
justify-content: space-around;
overflow-y: auto;
@media(max-width:768px){
    justify-content: space-between;
}
`;
export const Ranking = styled.div`
width: 40vw;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
background-color: #FFFFFF;
margin-left: 25px;
margin-top: 25px;
border-radius: 8px;
padding: 20px;
@media(max-width:768px){
    margin-left: 0px;
    width: 49vw;

}
`;