import { styled } from "styled-components";
import principal from "../../assets/img-3146.jpg";

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
    justify-content: space-evenly;
    width: 100%;
    height: 200px;
    align-items: center;
    font-family: 'Raleway', sans-serif;
font-family: 'Saira Stencil One', cursive;
    div{
        width: 140px;
        height: 120px;
        background-color: white;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`
const Principal = styled.div`
    display: flex;
    align-items: center;
    font-size: 28px;
    color:white;
    margin-top: 30px;
    margin-left: 50px;
 img{
        border-radius: 100%;
        width: 300px;
        margin-right: 50px;
    }
    
`
const Container = styled.div`
    position: fixed;
    top: 80px;
    width: 100%;
    height: 100vh;
    background-color:rgb(112, 173, 40);
    display: flex;
    flex-direction: column;
    
`
const Title = styled.div`
    
`