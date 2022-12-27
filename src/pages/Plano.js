import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { FaMoneyBillWave } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa";

import PopUp from "../components/Confirmacao";
import UserContext from "../components/UseContext";
import PlanoStyle from "../assets/styles/PlanoStyle.js";

export default function Plano() {
  const [nomeCartao, setNomeCartao] = useState("");
  const [numeroCartao, setNumeroCartao] = useState("");
  const [CVC, setCVC] = useState("");
  const [validade, setValidade] = useState("");

  const [popUpVisivel, setPopUpVisivel] = useState(false);
  const [dadosAPI, setDadosAPI] = useState(null);
  const { id } = useParams();

  const { token } = useContext(UserContext);

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const dadosCartao = {
    membershipId: id,
    cardName: nomeCartao,
    cardNumber: numeroCartao,
    securityNumber: parseInt(CVC),
    expirationDate: validade,
  };

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships/${id}`,
      config
    );

    promise.then((response) => {
      setDadosAPI(response.data);
    });
    promise.catch((err) => console.log(err));
  }, []);

  function Topo() {
    return (
      <PlanoStyle.ContainerTopo>
        <Link to={"/subscriptions"}>
          <ion-icon name="arrow-undo"></ion-icon>
        </Link>
      </PlanoStyle.ContainerTopo>
    );
  }

  function LogoPlano() {
    return (
      <PlanoStyle.ContainerLogoPlano>
        <img src={dadosAPI.image} alt="Logo do plano" />

        <h2>{dadosAPI.name}</h2>
      </PlanoStyle.ContainerLogoPlano>
    );
  }

  function DadosPlano() {
    return (
      <PlanoStyle.ContainerDadosPlano>
        <h6>
          <FaClipboardList color={"#FF4791"} /> Beneficios:
        </h6>
        <ol>
          {dadosAPI.perks.map((itensPlano) => (
            <li key={itensPlano.id}>{itensPlano.title}</li>
          ))}
        </ol>

        <h6>
          <FaMoneyBillWave color={"#FF4791"} /> Preço:
        </h6>
        <ul>
          <li>{`R$ ${dadosAPI.price} cobrados mensalmente`}</li>
        </ul>
      </PlanoStyle.ContainerDadosPlano>
    );
  }

  return (
    <>
      {dadosAPI ? (
        <PlanoStyle.TelaPlano>
          <Topo />
          <LogoPlano />
          <DadosPlano />
          <Formulario
            setPopUpVisivel={setPopUpVisivel}
            nomeCartao={nomeCartao}
            setNomeCartao={setNomeCartao}
            numeroCartao={numeroCartao}
            setNumeroCartao={setNumeroCartao}
            CVC={CVC}
            setCVC={setCVC}
            validade={validade}
            setValidade={setValidade}
          />
        </PlanoStyle.TelaPlano>
      ) : (
        console.log("carregando")
      )}

      {popUpVisivel && dadosAPI ? (
        <PopUp
          dadosCartao={dadosCartao}
          name={dadosAPI.name}
          setPopUpVisivel={setPopUpVisivel}
        />
      ) : (
        <></>
      )}
    </>
  );
}

function Formulario({
  setPopUpVisivel,
  nomeCartao,
  setNomeCartao,
  numeroCartao,
  setNumeroCartao,
  CVC,
  setCVC,
  validade,
  setValidade,
}) {
  const mudaEstadoPopup = false;

  function renderizarPopUp(e) {
    e.preventDefault();
    setPopUpVisivel(!mudaEstadoPopup);
  }

  return (
    <PlanoStyle.TelaPlano>
      <form onSubmit={renderizarPopUp}>
        <PlanoStyle.SectionBox>
          <input
            placeholder="Nome impresso no cartão"
            value={nomeCartao}
            onChange={(e) => setNomeCartao(e.target.value)}
            type="text"
          ></input>
          <input
            placeholder="Numero do cartão"
            value={numeroCartao}
            onChange={(e) => setNumeroCartao(e.target.value)}
            type="text"
          ></input>
        </PlanoStyle.SectionBox>

        <PlanoStyle.SectionFlex>
          <input
            placeholder="Codigo segurança"
            value={CVC}
            onChange={(e) => setCVC(e.target.value)}
            type="text"
          ></input>
          <input
            placeholder="validade"
            value={validade}
            onChange={(e) => setValidade(e.target.value)}
            type="text"
          ></input>
        </PlanoStyle.SectionFlex>

        <PlanoStyle.Button type="submit">Assinar</PlanoStyle.Button>
      </form>
    </PlanoStyle.TelaPlano>
  );
}
