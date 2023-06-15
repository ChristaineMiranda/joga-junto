import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { styled } from "styled-components";
import api from "../../services/api"
import { AuthContext } from "../../contexts";
import gol from "../../assets/gol.jpeg";


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
        <Container imageUrl={gol}>
        
            <InputBox onSubmit={toEnter}>
                <span>Entre em campo!</span>
                <Input type="email" name="email" placeholder="e-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
                <Input type="password" name="password" placeholder="senha" value={password} onChange={(e) => setPassword(e.target.value)} />
                <LoginButton>Entrar</LoginButton>
                <LinkStyled to='/sign-up'>Não tem conta? Cadastre-se!</LinkStyled>

            </InputBox>
        </Container>
    )
}

export const LoginButton = styled.button`
    width:180px;
    height:50px;
    border-radius: 5px;
    background-color: rgb(80, 132, 24);
    border-color: rgb(173, 228, 115);
    color:white;
    &:hover{
        background-color: black;
    }	    
`;

export const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 80px;
    background-image: url(${props => props.imageUrl});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
`;
export const InputBox = styled.form`
    width: 400px;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-color: rgb(112, 173, 40);
    border-radius: 5px;
    border-width: 50px;
    background-color: rgb(224, 236, 210);
    span{
        margin-bottom: 20px;
        font-size: 20px;
    }    
`;

export const Input = styled.input`
    width: 320px;
    height: 35px;
    border-radius: 8px;
    margin-bottom: 20px;
    border-color: rgb(112, 173, 40);
    border-radius: 8px;
    border-width: 2px;
    padding: 8px;

`;

export const LinkStyled = styled(Link)`
    margin-top: 10px;
    color: rgb(42, 70, 11);
    text-decoration: none;
    &:hover {
    color: black;
  }
`;


