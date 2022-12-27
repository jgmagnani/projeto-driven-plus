import styled from "styled-components";

export default function ListaPlano({imagemPlano, valorPlano}) {

  return (

    <Planos>
      <img src={imagemPlano} alt="logotipo" />

      <p>{valorPlano}</p>
    </Planos>
  );
}


const Planos = styled.div`
    box-sizing: border-box;
    width: 290px;
    height: 180px;
    background: #0E0E13;
    border: 3px solid #7E7E7E;
    border-radius: 12px;
    display: flex;
    justify-content: start;
    align-items: center;
    margin-bottom: 10px;
    img{
        width: 137px;
        height: 92px;
        margin: 42px 22px 42px 16px;
    }
    p{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        color: #FFFFFF;
    }
 
`