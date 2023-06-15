import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import api from "../../services/api";

export default function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [foto, setfoto] = useState('');
    const navigate = useNavigate('');

    async function register(e){
        e.preventDefault();
        if(!name || !email || !password || !confirmPassword || !foto)  return alert("Preencha corretamente seu cadastro");
        if(password !== confirmPassword) return alert("As senhas precisam ser iguais! Confirme a senha desejada")
        const data = { name, email, password, confirmPassword, foto };
        try {
            await api.signUp(data);            
        } catch (error) {
            alert(error.message);
        }

    }
    return (
        <LoginContainer>
            <TitleBox>O lugar pra torcer com os amigos!</TitleBox>
            <InputBox onSubmit={register}>
                <Input type="text" name="name" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} />
                <Input type="email" name="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
                <Input type="password" name="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
                <Input type="password" name="password" placeholder="Confirme a senha" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                <Input type="foto" name="foto" placeholder="Imagem de usuário" value={foto} onChange={(e) => setfoto(e.target.value)} />

                <LoginButton>Cadastrar</LoginButton>
                <Link onClick={() => navigate('/sign-in')}>Já tem uma conta? Faça login</Link>

            </InputBox>
        </LoginContainer>
    )
}


export const LoginButton = styled.button`
    width:80;
    height:12px;
    border-radius: 5px;
    background-color: cyan;
    color:white;
    &:hover{
        background-color: black;
    }	    
`;

export const LoginContainer = styled.div`
    height: 100%;
    display: flex;   	
`;
export const InputBox = styled.form`
    width: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
`;

export const Input = styled.input`
    width: 80px;
    height: 20px;
    border-radius: 8px;
`;

export const Link = styled.h1`
    color:white
    &:hover{
        text-decoration: underline;
    }	
`;


