import PlanosStyle from "../assets/styles/PlanosStyle";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import ListaPlanos from "../components/ListaPlanos";
import UserContext from "../components/UseContext";

export default function Planos() {
  const { token } = useContext(UserContext);
  const [planos, setPlanos] = useState([]);

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    const promise = axios.get(
      "https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships",
      config
    );

    promise.then((response) => {
      console.log("LISTAAAA", response.data);
      setPlanos(response.data);
    });

    promise.catch((err) => {
      console.log(err);
    });
  }, []);

  function listarPlanos() {
    if (planos.length === 0) {
      return <></>;
    } else {
      return planos.map((plano, index) => (
        <Link key={index} to={`/subscriptions/${plano.id}`}>
          {" "}
          <ListaPlanos
            imagemPlano={plano.image}
            valorPlano={plano.price}
          />{" "}
        </Link>
      ));
    }
  }

  return (
    <PlanosStyle.TelaPlanos>
      
        <h1>Escolha seu Plano</h1>

        {listarPlanos()}
      
    </PlanosStyle.TelaPlanos>
  );
}
