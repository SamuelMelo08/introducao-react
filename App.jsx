import Hello from "./components/Hello.jsx" 
import JsxExample from "./components/JsxExample.jsx"

export function App() {

    return (
        <div className="App">
            <h1>Hello World!</h1>
            <Hello nome={"Cleisonauta"} />
            <JsxExample/>
        </div>

    )

}