import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useProtectedPage from "../hooks/useProtectedPage";
import { navigateToLogin } from "../routes/coordinator";

export const CreateTrips = () => {
    const navigate = useNavigate()
    const id = '"2gjqNHAqhWe1ymyMHLXU"'
    const token = localStorage.getItem("token")
    const auth = {headers: {auth:token}}
    const body = {
        name: "Resenha em Jupiter",
        planet: "Jupiter",
        date: "24/04/2019",
        description: "Resenha e futebol dos guris e das gurias hahaha!",
        durationInDays: 30
    }
    
    const criar = async () => {
        try {
            const CreateTrip = await axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/kieffer-barbosa/trips`, body, auth)
            console.log(CreateTrip.data)
        } catch (error) {
            alert(error.message)
        }
    }

    useProtectedPage()

    return(
        <>
        <h1>Create Trip</h1>
        <button onClick={criar} >Criar Viagem</button>
        </>
    )
}