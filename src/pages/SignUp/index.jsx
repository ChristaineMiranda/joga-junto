import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { Title, Button, InputBox, Container, Input, Link } from "./style";

export default function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [foto, setfoto] = useState('');
    const navigate = useNavigate();

    async function register(e){
        e.preventDefault();
        if(!name || !email || !password || !confirmPassword || !foto)  return alert("Preencha corretamente seu cadastro");
        if(password !== confirmPassword) return alert("As senhas precisam ser iguais! Confirme a senha desejada")
        const data = { name, email, password, confirmPassword, foto };
        try {
            await api.signUp(data);
            alert("Cadastro realizado com sucesso! faça login para continuar");
            navigate("/sign-in");     
                     
        } catch (error) {
            if(error.response.status === 422) alert("Verifique o preenchimento dos campos e tente novamente");
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




