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
        <Container>
            <Title>Crie sua conta e comece a jogar!</Title>
            <InputBox onSubmit={register}>
                <Input type="text" name="name" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} />
                <Input type="email" name="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
                <Input type="password" name="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
                <Input type="password" name="password" placeholder="Confirme a senha" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                <Input type="foto" name="foto" placeholder="Imagem de usuário" value={foto} onChange={(e) => setfoto(e.target.value)} />

                <Button>Cadastrar</Button>
                <Link onClick={() => navigate('/sign-in')}>Já tem uma conta? Faça login </Link>

            </InputBox>
        </Container>
    )
}

export const Title = styled.div`
    width: 20%;
    height: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
    color:#389456;
    font-size: 35px;
    @media(max-width:768px){
        font-size: 18px;
        margin-right: 5px;
    }
`
export const Button = styled.button`
    width:12rem;
    height:3rem;
    border-radius: 5px;
    background-color: #389456;
    color:white;
    margin-bottom: 8px;
    margin-top: 5px;
    &:hover{
        background-color: black;
    }	    
`;
export const Container = styled.div`
    width: 100vw;
    margin-top: 80px;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const InputBox = styled.form`
    display: flex;
    flex-direction: column;
    height: 60%;
    width: 23%;
    align-items: center;
    justify-content: center;
    @media(max-width: 768px){
        width: 60%;
    }
`;
export const Input = styled.input`
    width: 100%;
    height: 10%;
    border-radius: 8px;
    margin-bottom: 10px;
    border-color: #389456;
    padding-left: 10px;
    &::placeholder{
        padding: 5px;
    }
`;
export const Link = styled.span`
    color: #389456;
    cursor: pointer;
    font-weight: 600;
    font-size: 15px;
    &:hover{
        text-decoration: underline;
}	
`;


