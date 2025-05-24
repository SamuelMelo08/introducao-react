
export default function ToDoList() {

    //Renderizando uma serie de elementos utilizando lista e estruturas de repetição

    //Requisição para o backend
    const tasks = [
        {id: 1, text: 'Aprender React'},
        {id: 2, text: 'Construir um projeto'},
        {id: 3, text: 'Publicar no GitHub'},
        {id: 4, text: 'Publicar no Linkedin'}
    ]

    return (
        <div>
            <h2>Lista de tarefas: </h2>

            <ul>

                {
                    tasks.map((task, index) => {

                        return (<li key={index} > {task.text} </li>)

                    })
                }

            </ul>

        </div>
    )

}