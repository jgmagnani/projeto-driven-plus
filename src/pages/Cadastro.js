import CadastroStyle from "../assets/styles/CadastroStyle";

export default function Cadastro(){
    return(
        <CadastroStyle.TeleCadastro>
            <form>
                <input type="text" placeholder="Nome" />
                <input type="cpf" placeholder="CPF" />
                <input type="email" placeholder="E-mail" />
                <input type="password" placeholder="Senha" />
                <button>CADASTRAR</button>
                <a href="#">Já possuí uma conta? Entre</a>
            </form>
        </CadastroStyle.TeleCadastro>
    )
}