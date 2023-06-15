import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import images from "../../assets/images.png";


export default function NavBar({isLogged}) {
    const navigate = useNavigate();
    return (
        <Navbar>
            <div><Logo src={images}></Logo></div>
            <Menu className="flex space-x-20">
                <span>Ranking Geral</span>
                <span>Meu Grupo</span>
                <span>Próximos Jogos</span>
            </Menu>
            <div>{isLogged? <ProfileName/>: <LoginButton onClick={() => navigate('/sign-in')}>Entrar</LoginButton>}</div>
        </Navbar>
    );
}

function ProfileName(){
    const usuario = JSON.parse(localStorage.getItem("user"));
    return(
        <Profile>Olá, {usuario.name}!</Profile>
    )
}

const Profile = styled.div`
    width: 180px;
    height: 50px;
    border-radius: 5px;
    background: rgb(3,20,20);
    background: linear-gradient(0deg, rgba(3,20,20,1) 0%, rgba(119,253,45,1) 100%);
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: 900;
`

const Menu = styled.div`
    display: flex;
    font-size: 18px;
    justify-content: space-between;
    width: 500px;
 

`
const Navbar = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 80px;
    font-weight: 400;
    position: fixed;
    top: 0;
    background-color: white;
`
const Logo = styled.img`
    height: 50px;
`
const LoginButton = styled.button`
    width: 180px;
    height: 50px;
    border-radius: 5px;
    background-color: rgb(80, 132, 24);
    border-color: rgb(173, 228, 115);
    font-size: 20px;
    color:white;
`