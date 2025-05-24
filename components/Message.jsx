
export default function Message({text, onDismiss}) {

    return (
        <div style={{border: '1px solid #ccc', padding: '10px', margin: '10px'}}>

            <p>{text}</p>

            <button onClick={onDismiss} >Fechar</button>

        </div>
    )

}