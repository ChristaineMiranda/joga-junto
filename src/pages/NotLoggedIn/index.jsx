import { styled } from "styled-components";
import errorImage from "../../assets/erro.jpeg";


export default function NotLoggedIn() {
    return (
        <InfoBox>
            <div>
                <div>Parece que você ainda não fez login </div>
                <div>Entre no site para acessar a página </div>
            </div>
            <ErrorImage src={errorImage} />


        </InfoBox>
    );
}
const ErrorImage = styled.img`
    border-radius: 100%;
    margin-top: 80px;
`;
const InfoBox = styled.div`
background-color: #ffe9ff;
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-top: 80px;
font-size: 20px;
div{
    margin-bottom: 10px;
}
`;