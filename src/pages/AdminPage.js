import styled from 'styled-components'
import {useEffect, useState } from "react";
import {useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import { navigateToHome } from '../routes/coordinator'
import useProtectedPage from '../hooks/useProtectedPage';

function AdminPage() {
  const navigate = useNavigate() //hook do react-router-dom que faz a navegação entre páginas


  const token = localStorage.getItem('token') //Pega a informação do token enviada para o localStorage

   const [tripDetail, setTripDetail] = useState({})//use este estado para guardar as informações da requisição.
   const { id } = useParams();//use este hook do houter para conseguir fazer a requisição através do id

   
   const getTripDetail = async () => {
     
     try {
      const idViagem = 'w0akNrTO6QzNVjc7O6bp'

      const auth = {headers: {auth:token}}

      const response = await axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/kieffer-barbosa/trip/${idViagem}`, auth)
      console.log(response);
      
    } catch (error) {
      console.log(error.message)
    }
   }

   useProtectedPage()


  return (
    <AdminContainer>
      <h1>Administração: Detalhes da Viagem</h1>
      <hr/>
      {id!=='undefined'?
      <BoxDetail >
        <h3>{tripDetail.name}</h3>
        <p>{tripDetail.description}</p>
        <p><b>Duração em dias: </b>{tripDetail.durationInDays}</p>
        <p><b>Data: </b>{tripDetail.date}</p>
        <p><b>Planeta: </b>{tripDetail.planet}</p>
      </BoxDetail >:
      <h2>Escolha uma das viagens disponiveis </h2>}
      
    </AdminContainer>
  );
}

export default AdminPage;
const AdminContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items:center;
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif
  
`;
const BoxDetail = styled.main`
margin: 10px;
border: 2px solid blueviolet;
width:50vw;
background-color: white;
padding:0 20px;
font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;

`;
const CandidateDetail = styled.main`
margin: 10px;
border: 2px solid blueviolet;
background-color: white;
padding:0 20px;
font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;

`;