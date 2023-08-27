import styled from "styled-components";


export const RealResult = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 65%;
background-color: #ffffff;
border-radius: 8px;

&>:nth-child(1){
    font-size: 10px;
    font-weight: 500;
}
&>:nth-child(2){
    display: flex;    
    justify-content: space-between;
    font-weight: 400; 
    font-size: 14px;
    
    div{
        display: flex;
        align-items: center;
        div{
            display: flex;
            align-items: center;
            margin: 3px;
        }
    }
    @media (max-width: 768px){
        font-size: 10px;
    }
}
@media (max-width:768px){
    width: 75%;
}

`;
export const SendButton = styled.button`
    width: 65%;
    height: 35px;
    background-color: ${props => props.disabled ? "#3a3939" : "#036b03"};
    color: #FFFFFF;
    font-weight: 500;
    border-radius: 5px;
    border-width: 3px;
    border-color: ${props => props.correctGuess ? "#dfd008" : "#023a02"};
    @media(max-width: 768px){
        height: 37px;
        font-size: 11px;
    }
`;
export const Guesses = styled.div`
    display: flex;
    width: 90%;
    justify-content: center;
    font-weight: 600;    
    div{
        display: flex;
        align-items: center;
        input{
            width: 20px;
            height: 20px;
            border-color: #d6d3d3;
            border-style: solid;
            border-width: 1px;
            border-radius: 3px;
            margin-left: 4px;
            margin-right: 4px;
            &::-webkit-inner-spin-button,
            &::-webkit-outer-spin-button {
                appearance: none;
                margin: 0;
            }
        }
    }
    @media(max-width: 768px){
        width: 100%;
        font-size: 12px;
    }
`;
export const InfosMatch = styled.div`
width: 30%;
height: 25%;
border-color: ${props => props.color};
border-style: solid;
border-width: 1px;
border-radius: 8px;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items:center;
margin: 5px;
border-radius: 10px;
background-color: ${props => props.color};

 @media(max-width: 768px){
    width: 80%;
    min-height: 20%;
    margin: 20px;
}
`;
export const DateAndTimeInfo = styled.div`
font-family: Roboto;
width: 100%;
height: 25%;
display: flex;
justify-content: space-between;
align-items: center;
font-size:14px;
font-weight: 300;
padding:5px;
& > :nth-child(1){
display: flex;
flex-direction: column;
align-items: flex-start;

}
`;