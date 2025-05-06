import React from "react";
import { createRoot } from "react-dom/client";

//Import da função App dp arquivo App.jsx
import {App} from "./App"

//Criação do root e ligação com o html
const rootElement = document.getElementById("root")
const root = createRoot(rootElement)

//Renderização dos componentes
root.render(<App/>)