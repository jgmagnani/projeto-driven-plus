import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiUserCircle } from 'react-icons/hi';
import UserContext from "../components/UseContext";
import HomeStyle from "../assets/styles/HomeStyle";


export default function Home() {


    const { dadosUsuario, token } = useContext(UserContext);
    const navigate = useNavigate();
    const { membership } = dadosUsuario;

    function cancelarPlano(){

        const config = {
            headers: {
              Authorization: `Bearer ${token}`
            }
        }
        const promise = axios.delete("https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions", config);
    
        promise.then(()=>{
            alert("Plano cancelado com sucesso");
            navigate("/subscriptions");
        })
        promise.catch((err)=>{console.log(err)});
    }

    return (
        <HomeStyle.Container>

            <Topo image={dadosUsuario.membership.image} />
            <h2>
                Olá, {dadosUsuario.name}
            </h2>

            <HomeStyle.SubContainer>
                <section>
                    {membership.perks.map((itemPlano) => (<a key={itemPlano.id} href={itemPlano.link} target="_blank" ><HomeStyle.Botoes cor={"#FF4791;"} >{itemPlano.title}</HomeStyle.Botoes></a>))}

                </section>
                <section>
                    <HomeStyle.Botoes onClick={()=>{navigate("/subscriptions")}} cor={"#FF4791;"} > Mudar Plano</HomeStyle.Botoes>
                    <HomeStyle.Botoes onClick={cancelarPlano}  cor={"#FF4747;"} > Cancelar plano</HomeStyle.Botoes>
                </section>
            </HomeStyle.SubContainer>


        </HomeStyle.Container>
    );
}

function Topo({ image }) {
    return (
        <HomeStyle.ContainerTopo>
            <img src={image} />
            <HiUserCircle color=" #FFFFFF" size={"30px"} />
        </HomeStyle.ContainerTopo>
    );
}

