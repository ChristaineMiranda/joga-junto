import { styled } from "styled-components";
import principal from "../../assets/pb.png";

export default function InitialPage(){
    return(
        <Container>
            <Principal>
                <img src={principal}/>
                <Title>A torcida brasileira joga junto!</Title>
            </Principal>
            <Info>
                <div>Sobre nós</div>
                <div>Como funciona</div>
                <div>Pontuação</div>
            </Info>
        </Container>
    )
}
const Info = styled.div`
    background-color: rgb(236, 236, 234);
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 200px;
    align-items: center;
    font-family: 'Saira Stencil One', cursive;
    div{
        width: 25%;
        height: 120px;
        text-align: center;
        background-color: white;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`
const Principal = styled.div`
    display: flex;
    align-items: center;
    margin-top: 30px;
    margin-left: 50px;
 img{
        border-radius: 100%;
        width: 250px;
        height: 250px;
        margin-right: 50px;
    }
@media(max-width: 768px){
    flex-direction: column;
    margin-left: 0px;
    img{
        margin-bottom: 30px;
        margin-right: 0px;
        margin-top: 20px;
    }
}
    
`
const Container = styled.div`
    position: fixed;
    z-index: -1;
    top: 80px;
    width: 100%;
    height: 100vh;
    background-color:rgb(129, 202, 45);
    display: flex;
    flex-direction: column;
    
`
const Title = styled.div`
font-size: 28px;
color:white;
font-family: 'Raleway', sans-serif;
@media(max-width: 768px){
    font-size: 22px;
    width: 100%;
    margin-top: 50px;
    margin-left: 20px;

}

`