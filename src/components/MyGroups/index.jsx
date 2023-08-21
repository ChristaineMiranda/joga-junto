import  styled  from "styled-components";
import api from "../../services/api";
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../contexts";
import { useNavigate } from "react-router-dom";
import GroupComponent from "../GroupComponent";
import NewGroupModal from "../Modals/NewGroupModal";


export default function MyGroups() {
    const { userAuth } = useContext(AuthContext);
    const token = userAuth.token;
    const [myGroups, setMyGroups] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);
   

    const navigate = useNavigate();

    useEffect(() => {
        if(!token) return navigate("/not-logged-in");
        async function getMyGroups() {

            try {
                const { data } = await api.myGroups(token);
                setMyGroups(data);
            } catch (error) {
                console.log(error);
            }
        }
        getMyGroups();
    }, [modalIsOpen]);
  

    return (
        <Container>
            <p>Meus grupos</p>
            <GroupContainer>
                {myGroups.length ? myGroups.map((item, index) => (<GroupComponent key={index} group={item} />)) : "Crie um grupo ou junte-se a um!"}
            </GroupContainer>
            <NewGroupModal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen}/>
            
        </Container>
    );
}


const GroupContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 10px;
`;

const Container = styled.div`
width: 100%;
min-height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
padding-top: 20px;
overflow-y: auto;
p {
    font-size: 20px;
}
`;

