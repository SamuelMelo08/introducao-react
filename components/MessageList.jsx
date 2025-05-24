import { useState } from "react";
import Message from "./Message.jsx";


export default function MessageList() {

    const [messages, setMessages] = useState([
        {id: 1, text:'Primeira mansagem'},
        {id: 2, text:'Segunda mansagem'},
        {id: 3, text:'Terceira mansagem'}
    ])

    const handleDismiss = (id) => {
        setMessages(messages.filter(message => message.id !== id))
    }

    return (

        <div>
            <h2>Lista de Mensagens</h2>

            {messages.map(message => (
                <Message
                key={message.id}
                text={message.text}
                onDismiss={() => {handleDismiss(message.id)}}
                />
            ))}

        </div>

    )

}