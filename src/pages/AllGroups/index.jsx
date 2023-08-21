import { styled } from "styled-components";
import api from "../../services/api";
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../contexts";
import { useNavigate } from "react-router-dom";
import PreviewGroupModal from "../../components/Modals/PreviewGroupModal";

export default function AllGroups() {
    const [groupsList, setGroupsList] = useState([]);
    const { userAuth } = useContext(AuthContext);
    const token = userAuth.token;
    const navigate = useNavigate();

    useEffect(() => {
        if (!token) return navigate("/not-logged-in");
        async function getAllGroups() {
            try {
                const { data } = await api.getAllGroups(token);
                setGroupsList(data);
            } catch (error) {
                console.log(error);
            }

        }

        getAllGroups()
    }, []);

    return (
        <ContainerAllGroups>
            {groupsList.map((item, index) => <GroupListed item={item} key={index} />)}
        </ContainerAllGroups>
    )
}


function GroupListed({ item }) {
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const { userAuth } = useContext(AuthContext);
    const token = userAuth.token;
    const navigate = useNavigate();

    useEffect(() => {
        const isMember = item.userBelongsToGroup;
        if (isMember) setButtonDisabled(true);
    }, []);

    async function joinGroup() {
        const id = item.id;
        try {
            await api.postJoinGroup(token, { id });
            alert("Ingresso registrado! Hora de palpitar no seu novo grupo associado");
            navigate(`/group-selected/${id}`);

        } catch (error) {
            console.log(error.message);
        }
    }
    
    return (
        <GroupListedBox>
            <GroupInfos>
                <div>{item.name}</div>
                <div>{item.codeGroup}</div>
            </GroupInfos>
            <LowerBox>
                <CreatorInfos>
                    <CreatorPicture src={item.User.foto} />
                    <div>{item.User.name}</div>
                </CreatorInfos>
                <OptionsButtons>
                    <PreviewGroupModal id={item.id} modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen}/>
                    <JoinButton disabled={buttonDisabled} onClick={joinGroup}>{buttonDisabled ? "Já faço parte" : "Participar"}</JoinButton>
                </OptionsButtons>
            </LowerBox>
        </GroupListedBox>
    )
}


const OptionsButtons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 50%;
    height: 100%;    
    button{
        width: 70px;
        height: 38px;
        border-radius: 5px;
        border-color: #FFFFFF;
        font-size: 10px;
        font-weight: 900;
        color: #FFFFFF;
    }
`;
const JoinButton = styled.button`
    background-color:${props => props.disabled ? "#4CBAAB" : "#F7B13E"};
`;
const CreatorPicture = styled.img`
    width: 40px;
    border-radius: 100px;
    margin-right: 10px;
    border-color: #FFFFFF;
    border-width: 2px;
    border-style: solid;
`;
const ContainerAllGroups = styled.div`
width:99vw;
min-height: 100vh;
margin-top: 80px;
display: flex;
flex-wrap: wrap;
justify-content: space-around;
@media(max-width: 768px){
    flex-direction: column;
    align-items: center;
    margin-top: 110px;
}
`;
const CreatorInfos = styled.div`
display:flex;
align-items: center;
justify-content: flex-start;
`;
const GroupInfos = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
margin-top: 20px;
border-bottom-style:dotted;
border-bottom-width:1px;
border-bottom-color: #022e02;
padding-bottom: 10px;
&>:nth-child(1){
font-weight:600;
background-color: #e7e6e6;
padding: 8px;
border-radius: 8px;
}
`;
const GroupListedBox = styled.div`
display:flex;
flex-direction: column;
width: 25%;
height: 112px;
margin: 15px;
border-radius: 8px;
border-style: solid;
border-color: purple;
border-width: 1px;
:hover{
    cursor: pointer;
}
@media (max-width: 768px) {
    height:110px ;
    width: 70%;
}
`;
const LowerBox = styled.div`
    display: flex;
    height: 100%;
    justify-content: space-between;
   
`;