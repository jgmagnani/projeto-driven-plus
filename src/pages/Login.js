import LoginStyle from "../assets/styles/LoginStyle";
import logo from "../assets/images/Driven.png";
import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../components/UseContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const { token, setToken, dadosUsuario, setDadosUsuario } =
    useContext(UserContext);

  const navigate = useNavigate();

  function login() {
    const body = {
      email,
      password: senha,
    };

    const promise = axios.post(
      "https://mock-api.driven.com.br/api/v4/driven-plus/auth/login",
      body
    );

    promise.then((response) => {
      console.log(response.data);
      setDadosUsuario(response.data);
      setToken(response.data.token);

      if (response.data.membership === null) {
        navigate("/subscriptions");
      } else {
        navigate("/home");
      }
    });
    promise.catch((err) => {
      alert("erro ao realizar login");
    });
  }

  return (
    <LoginStyle.TelaLogin>
      <LoginStyle.LogoLogin>
        <img src={logo} alt="Driven"></img>
      </LoginStyle.LogoLogin>

      
      <LoginStyle.ContainerLogin
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            placeholder="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
          ></input>
          <input
            placeholder="senha"
            value={senha}
            onChange={(e) => {
              setSenha(e.target.value);
            }}
            type="password"
          ></input>

          <button
            type="submit"
            onClick={() => {
              login();
            }}
          >
            Entrar
          </button>
          </LoginStyle.ContainerLogin>
        <Link to="/sign-up">não tem uma conta? cadastre-se!</Link>       
      
    </LoginStyle.TelaLogin>
  );
}
