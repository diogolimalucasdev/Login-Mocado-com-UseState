import { logout } from "../utils/auth"

export default function Dashboard () {

    function handleLogout() {
        logout()
        location.reload()
    }
    return (
        <div className="">
            <h1>Bem Vindo ao Painel</h1>
            <button onClick={handleLogout}>Sair</button>
        </div>
    )
}