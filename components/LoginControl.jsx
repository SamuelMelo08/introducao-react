import { useState } from "react";

export default function LoginControl() {

    //Renderização condicional utilizando o useState
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    return (
        <>
            <h2>Controle de Login: </h2>

            {
                isLoggedIn ? (
                    <div>
                        <p>Bem-vindo de volta!</p>
                        <button onClick={ () => { setIsLoggedIn( false ) } }>Sair</button>
                    </div>
                ) : (
                    <div>
                        <p>Por favor, faça login!</p>
                        <button onClick={ () => { setIsLoggedIn( true ) } }>Entrar</button>
                    </div>
                )
            }

        </>
    )

}