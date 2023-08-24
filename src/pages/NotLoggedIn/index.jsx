import {ErrorImage, InfoBox} from "./style";
import errorPicture from "../../assets/erro.jpeg";


export default function NotLoggedIn() {
    return (
        <InfoBox>
            <div>
                <div>Parece que você ainda não fez login </div>
                <div>Entre no site para acessar a página </div>
            </div>
            <ErrorImage src={errorPicture} />


        </InfoBox>
    );
}
