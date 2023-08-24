import { styled } from "styled-components";
import {Link} from "react-router-dom";

export const OptionsBox = styled.div`
background-color: #FFFFFF;
color: black;
height:100px;
width: 200px;
font-size:14px;
position: fixed;
z-index: 10;
top: 15px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
@media (max-width: 768px) {
    width: 90px;
    top: 10px;
}
div{
    border-color: green;
    border-style: dashed;
    border-width: 1px;
    width: 99%;
    height: 50%;
    display: flex;;
    align-items: center;
    text-align: center;
    justify-content: center;
    border-radius: 8px;
    &:hover{
        background-color: #e2d6e2;
    }
}
`;
export const LinkStyled = styled(Link)`
    text-decoration: none;
    &:visited{
        color: inherit;
    }
`;
export const Profile = styled.div`
    width: 180px;
    height: 50px;
    border-radius: 5px;
    background: rgb(3,20,20);
    background: linear-gradient(0deg, rgba(3,20,20,1) 0%, #a2e97b 100%);
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: 500;
    @media(max-width: 768px){
        width: 90px;
        height:40px;
        font-size: 10px;
    }
`;
export const Menu = styled.div`
    display: flex;
    font-size: 18px;
    justify-content: space-around;
    width: 500px;
    @media(max-width: 768px){
        width: 100vw;
        margin-top: 50px;
    }
`;
export const Navbar = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    padding: 5px;
    align-items: center;
    height: 80px;
    font-weight: 400;
    position: fixed;
    top: 0;
    background-color: white;
    border-bottom: 1px solid black;
    & > div:nth-child(1) {
        &:hover{
            cursor: pointer;
        }
    }

    @media(max-width: 768px){
        font-size: 10px;
        flex-direction: column;
        width: 100%;
        height: 110px;
    }

`;
export const Logo = styled.img`
    height: 50px;
    border-radius: 100%;
    @media(max-width: 768px){
        height: 30px;
        position: fixed;
        top:15px;
        left: 15px;
    }
`;
export const LoginButton = styled.button`
    width: 180px;
    height: 50px;
    border-radius: 10px;
    background-color: #db8625;
    border-color: #db8625;
    font-size: 20px;
    color:white;
    @media(max-width:768px){
        width: 90px;
    }
`;
export const UserAcess = styled.div`
  @media(max-width: 768px){
        height: 30px;
        position: fixed;
        top:10px;
        right: 15px;
    }
`;
