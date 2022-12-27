import CadastroStyle from "../assets/styles/CadastroStyle";
import { useState } from "react";
import axios from "axios";
import { Link, Navigate, useNavigate } from "react-router-dom";


function TelaCadastro() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");
  const [cpf, setCPF] = useState("");

  const navigate = useNavigate();

  function cadastro() {
    const body = {
      email,
      name: nome,
      cpf,
      password: senha
    };

    const promise = axios.post(
      "https://mock-api.driven.com.br/api/v4/driven-plus/auth/sign-up",
      body
    );

    promise.then((response) => {
      console.log(response.data);

      navigate("/");
    });

    promise.catch((err) => {
      alert("erro ao realizar cadastro");
    });
  }

  return (
    <CadastroStyle.TelaCadastro>

      <CadastroStyle.Form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
        ></input>
        <input
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          type="password"
        ></input>
        <input
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          type="text"
        ></input>
        <input
          placeholder="CPF"
          value={cpf}
          onChange={(e) => setCPF(e.target.value)}
          type="text"
        ></input>

        <button onClick={() => cadastro()}>Cadastra</button>
      </CadastroStyle.Form>

      <Link to="/">
        á tem uma conta? faça login!
      </Link>
    </CadastroStyle.TelaCadastro>
  );
}

export default TelaCadastro;

