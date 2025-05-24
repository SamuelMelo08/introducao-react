import { useState } from "react"

export default function Counter() {

    //useSate vai estabelecer um valor inicial e modifica-lo com base em uma função
    const [count, setCount] = useState(0)

    return (
        <div>
            <h2>Contador</h2>

            <p>Você clicou {count} vezes</p>

            <button onClick={() => {setCount(count+1)}}>
                Clique aqui!
            </button>

        </div>
    )

}