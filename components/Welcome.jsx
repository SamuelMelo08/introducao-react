import { use } from "react"

export default function Welcome({name}) {

    const data = new Date().toLocaleDateString('pt-br', {weekday: 'long'})

    return (
        <div className="divWel">
            <h2>Seja bem-vindo, {name}!</h2>
            <p>Hoje é {data}</p>
        </div>
    )


}