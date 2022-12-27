import LoginStyle from "../assets/styles/LoginStyle";
import logo from "../assets/images/Driven.png";

export default function Login() {
  return (
    <LoginStyle.TelaLogin>
      <LoginStyle.LogoLogin>
        <img src={logo} alt="Driven"></img>
      </LoginStyle.LogoLogin>

      <LoginStyle.ContainerLogin>
        <input type="email" placeholder="E-mail" />
        <input type="password" placeholder="Senha" />

        <button>ENTRAR</button>

        <a href="#">Não possui uma conta? Cadastre-se</a>
      </LoginStyle.ContainerLogin>
    </LoginStyle.TelaLogin>
  );
}
