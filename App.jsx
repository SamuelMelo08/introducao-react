import Hello from "./components/Hello.jsx" 
import JsxExample from "./components/JsxExample.jsx"
import Welcome from "./components/Welcome.jsx"
import Greeting from "./components/Greeting.jsx"
import Counter from "./components/Counter.jsx"
import LoginControl from "./components/LoginControl.jsx"
import ToDoList from "./components/ToDoList.jsx"

export function App() {

    return (
        <div className="App">

            {/* <h1>Hello World!</h1>
            <Hello nome={"Cleisonauta"} />
            <JsxExample/>
            <Welcome name={"Samuel"} />
            <Greeting name="João" age={25} /> */}
            {/* <Counter/> */}
            {/* <LoginControl/> */}

            <ToDoList/>

        </div>

    )

}