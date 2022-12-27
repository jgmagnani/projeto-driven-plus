
import { FaWindowClose } from 'react-icons/fa';
import axios from "axios";
import { useContext } from "react";
import UserContext from "./UseContext";
import { useNavigate } from "react-router-dom";
import ConfirmacaoStyle from '../assets/styles/ConfirmacaoStyle';

export default function Confirmacao({dadosCartao, name, setPopUpVisivel}) {

  return (
    <ConfirmacaoStyle.Container>
      <Alt setPopUpVisivel={setPopUpVisivel}/>
       <ContainerButton dadosCartao={dadosCartao} name={name} setPopUpVisivel={setPopUpVisivel} />
       
    </ConfirmacaoStyle.Container>
  );   
}

function ContainerButton({dadosCartao, name, setPopUpVisivel}){

  const { token } = useContext(UserContext);

  const {dadosUsuario,setDadosUsuario} = useContext(UserContext);

  console.log("usuario", dadosUsuario)
  const navigate= useNavigate();

  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  function Submit(){
    const promise = axios.post("https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions", dadosCartao, config)

    promise.then((response)=>{
      
      const atualizarPlano = {
        ...dadosUsuario,
        membership: response.data.membership
      }
      setDadosUsuario(atualizarPlano);
      console.log()
      navigate("/home");
    })
    promise.catch((err)=>{alert("erro ao assinar o plano")});
  }

  return(
    <ConfirmacaoStyle.TelaConfirmacao>
      <p>
        {`Tem certeza que deseja assinar o plano ${name}?`}
      </p>
      <div>
        <ConfirmacaoStyle.Button onClick={Submit}  cor="#FF4791;" >sim</ConfirmacaoStyle.Button>
        <ConfirmacaoStyle.Button onClick={()=>setPopUpVisivel(false)} cor="#CECECE;" >não</ConfirmacaoStyle.Button> 
      </div>
      
    </ConfirmacaoStyle.TelaConfirmacao>
  )
}

function Alt({setPopUpVisivel}) {
  return (
    <ConfirmacaoStyle.ContainerTopo>
      <FaWindowClose onClick={()=>setPopUpVisivel(false)} color="#FFFFFF" size={"30px"} />
    </ConfirmacaoStyle.ContainerTopo>
  );
}