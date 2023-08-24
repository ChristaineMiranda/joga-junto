import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api"
import { AuthContext } from "../../contexts";
import {LoginButton, InputBox, Container, Input, LinkStyled} from "./style";

export default function SignIn({setIsLogged}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { setUserAuth } = useContext(AuthContext);
 
    async function toEnter(e) {
        e.preventDefault();
        const data = { email, password };
        try {
            const response = await api.login(data);
            const { token, name, id, foto } = response.data;
            setUserAuth({ token, name, id, foto });
            localStorage.setItem("user", JSON.stringify({ token, name, id, foto }));
            setIsLogged(true);
            navigate('/home');
        } catch (error) {
            console.log(error.message)
            alert("Preenchimento incorreto, por favor tente novamente.");
        }
    }

    return (
        <Container >
        
            <InputBox onSubmit={toEnter}>
                <span>Entre em campo!</span>
                <Input type="email" name="email" placeholder="e-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
                <Input type="password" name="password" placeholder="senha" value={password} onChange={(e) => setPassword(e.target.value)} />
                <LoginButton>Entrar</LoginButton>
                <LinkStyled to='/sign-up'>Não tem conta? Cadastre-se!</LinkStyled>
            </InputBox>
        </Container>
    );
}




