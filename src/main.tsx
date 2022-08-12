import ReactDOM from "react-dom/client";
import App from "./App";

//o document.getElementById procura na DOM (index.html) um elemento com o id = root
//achou esse elemento? renderize dentro dele meu componente react App.

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
