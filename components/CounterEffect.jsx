import { useState, useEffect } from "react";

export default function CounterEffect() {

    //Utilizando useEffects para acionar ações após uma ação

    const [count, setCount] = useState(0)
    const [isEven, setIsEven] = useState(false)

    //Efeito que será dependente da variável 'count'
    useEffect( () => {

        console.log(`O contador mudou para: ${count}`)

        setIsEven(count % 2 === 0)

        //Efeito visual baseado no valor
        document.title = `Contagem: ${count}`

    }, [count] )

    return (
        <div>

            <h2>Contador com efeito dependente: </h2>
            <p>Valor atual: {count} </p>
            <p>O númreo é par/ímpar</p>

            <button onClick={() => { setCount( count+1 ) } }>
                Incrementar
            </button>

            <button onClick={ () => { setCount(0) } }>Resetar</button>

        </div>
    )

}