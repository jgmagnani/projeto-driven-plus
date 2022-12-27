import { BrowserRouter, Routes, Route } from "react-router-dom";

import UserContext from "./components/UseContext"
import { useState } from "react";
import Planos from "./pages/Planos";
import Plano from "./pages/Plano";
import Home from "./pages/Home"
import Cadastro from "./pages/Cadastro"
import Login from "./pages/Login"
function App() {

  const [token, setToken] = useState(null);
  const [dadosUsuario, setDadosUsuario] = useState(null);
  const [dadosPlano, setDadosPlano] = useState(null);

  return (
    <div className="App">

      <UserContext.Provider value={{ token, setToken, dadosUsuario, setDadosUsuario, dadosPlano, setDadosPlano }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/sign-up" element={<Cadastro />} />
            <Route path="/subscriptions" element={<Planos />} />
            <Route path="/subscriptions/:id" element={<Plano />} />
            <Route path="/home" element={<Home />} />

          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;