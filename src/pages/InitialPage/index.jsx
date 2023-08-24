import principal from "../../assets/pb.png";
import { Info, Principal, Container, Title } from "./style";
import InitialInfoModal from "../../components/Modals/InitialInfoModal/index";

export default function InitialPage(){
    return(
        <Container>
            <Principal>
                <img src={principal}/>
                <Title>A torcida brasileira joga junto!</Title>
            </Principal>
            <Info>
               <InitialInfoModal name={"Sobre nós"} />
               <InitialInfoModal name={"Como funciona"}/>
               <InitialInfoModal name={"Pontuação"}/>
            </Info>
        </Container>
    )
}
