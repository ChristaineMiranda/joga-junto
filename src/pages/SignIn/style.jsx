import { styled } from "styled-components";
import gol from "../../assets/gol.jpg";
import { Link } from "react-router-dom";


export const LoginButton = styled.button`
    width:180px;
    height:50px;
    border-radius: 5px;
    background-color: rgb(23, 39, 5);
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
    background-image: url(${gol});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    @media (max-width: 768px){
        top:110px;
    }
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
    @media(max-width: 768px){
        width: 80%;
    }
`;
export const Input = styled.input`
    width: 80%;
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