import { useNavigate } from "react-router-dom";
import images from "../../assets/kjo.png";
import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../contexts";
import { OptionsBox, LinkStyled, Profile, Menu, Navbar, Logo, LoginButton, UserAcess } from "./style";

export default function NavBar({ setIsLogged, isLogged }) {
    const [showMenu, setShowMenu] = useState(false);
    const { userAuth } = useContext(AuthContext);
    const token = userAuth.token;

    useEffect(() => {
        if (token && !isLogged) {
            setIsLogged(true);
        }
    }, [isLogged]);

    const navigate = useNavigate();
    return (
        <Navbar>
            <div onClick={() => { navigate('/') }}>
                <Logo src={images}></Logo>
            </div>
            <Menu>
                <LinkStyled to="/home">Dashboard</LinkStyled>
                <LinkStyled to="/group-all">Grupos</LinkStyled>
                <LinkStyled to="/matches">Painel de Jogos</LinkStyled>
            </Menu>
            <UserAcess>{isLogged ? <ProfileBox showMenu={showMenu} setShowMenu={setShowMenu} isLogged={isLogged} setIsLogged={setIsLogged} /> : <LoginButton onClick={() => navigate('/sign-in')}>Entrar</LoginButton>}</UserAcess>
        </Navbar>
    );
}
function ProfileBox({ showMenu, setShowMenu, setIsLogged }) {

    function toggle() {
        const state = !showMenu;
        setShowMenu(state);
    }
    const user = JSON.parse(localStorage.getItem("user"));
    const nameUser = user.name.split(" ");
    return (

        <Profile onClick={toggle}>
            {showMenu ? <MenuProfile name={nameUser[0]} setIsLogged={setIsLogged} /> : `Olá, ${nameUser[0]}`}
        </Profile>
    );
}

function MenuProfile({ name, setIsLogged }) {
    const navigate = useNavigate();
    const { setUserAuth } = useContext(AuthContext);

    function logout() {
        setUserAuth({});
        localStorage.setItem("user", null);
        setIsLogged(false);
        navigate("/sign-in");
    }
    return (
        <OptionsBox>
            <div>{`Olá, ${name}!`}</div>
            <div onClick={logout}>Sair</div>
        </OptionsBox>
    )
}

