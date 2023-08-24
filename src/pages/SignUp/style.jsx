import { styled } from "styled-components";

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
`;
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