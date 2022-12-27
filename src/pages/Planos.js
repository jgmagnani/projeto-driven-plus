import PlanosStyle from "../assets/styles/PlanosStyle";
import plus from "../assets/images/Group 1.png";
import gold from "../assets/images/Group 2.png";
import platinum from "../assets/images/Group 3.png";

export default function Planos() {
  return (
    <PlanosStyle.TelaPlanos>
      <h1>Escolha seu Plano</h1>
      <PlanosStyle.ListaPlanos>
        <PlanosStyle.Plano>
          <img src={plus} alt="Usuário Plus" />
          <h2>R$ 39,99</h2>
        </PlanosStyle.Plano>
        <PlanosStyle.Plano>
          <img src={gold} alt="Usuário Gold" />
          <h2>R$ 69,99</h2>
        </PlanosStyle.Plano>
        <PlanosStyle.Plano>
          <img src={platinum} alt="Usuário Platinum" />
          <h2>R$ 99,99</h2>
        </PlanosStyle.Plano>
      </PlanosStyle.ListaPlanos>
    </PlanosStyle.TelaPlanos>
  );
}
