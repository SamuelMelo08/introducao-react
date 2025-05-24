import { useState } from "react"


export default function FormExample() {

    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        inscrito: false
    })

    const handleChange = (e) => {
        const {name, value, type, checked} = e.target

        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value

        }))

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Dados enviados: ${JSON.stringify(formData)}`)
    }

    return (
        <div>
            <h2>Formulário Controlado:</h2>

            <form onSubmit={handleSubmit} >

                <div>
                    <label>
                        Nome:
                        <input 
                        type="text"
                        name="nome"
                        value={formData.nome}
                        onChange={handleChange}
                        />
                    </label>
                </div>

                <div>
                    <label>
                        Email:
                        <input 
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange} />
                    </label>
                </div>

                <div>
                    <label>
                        <input 
                        type="checkbox"
                        name="inscrito"
                        checked={formData.inscrito}
                        onChange={handleChange} />
                    </label>
                    Assinar newsletter
                </div>

                <button type="submit" >Enviar</button>

            </form>

        </div>
    )

}