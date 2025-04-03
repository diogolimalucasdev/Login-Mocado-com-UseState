import { useState } from "react"
import { login } from "../utils/auth"

export default function Login({onLogin}){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        if(login(email, password)){
            localStorage.setItem('auth', 'true')
            onLogin()
        } else {
            alert('Email ou senha invalidos..')
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <input type="email" value={email} onChange={(e) => {setEmail(e.target.value)}}/>
            <input type="password" value={password} onChange={(e) => {setPassword(e.target.value)}} />
            <button type="submit">Entrar</button>
        </form>
    )
}