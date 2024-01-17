import { hello } from "./hello";
import './index.css';

const rootApp = document.getElementById("app");
const elementChild = document.createElement("div");
elementChild.innerHTML = `
    <div>${hello()}</div>
`
rootApp.appendChild(elementChild);