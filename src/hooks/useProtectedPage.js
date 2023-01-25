import { useEffect } from "react"
import { navigateToLogin } from "../routes/coordinator"
import { useNavigate } from "react-router-dom"


export default function useProtectedPage() {
    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    useEffect(() => {
        if(!token){
            navigateToLogin(navigate)
        }
    }, [])

}