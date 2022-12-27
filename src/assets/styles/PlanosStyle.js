import styled from "styled-components";

const PlanosStyle = {
  TelaPlanos: styled.div`
    width: 400px;
    height: 667px;
    background: #0e0e13;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1{
        color: white;
        font-family: Roboto;
        font-size: 32px;
        font-weight: 700;
        line-height: 38px;
        margin-top: 29px;
        margin-bottom: 24px;
    

    }
  `,
  ListaPlanos: styled.div`
    font-family: Roboto;
    font-size: 32px;
    color: white;    
  `,
  Plano: styled.button`
    height: 180px;
    width: 290px;
    border-radius: 12px;
    border: 3px solid #7e7e7e;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    background: #0e0e13;
    img {
        width: 140px;
        height: 95px;
        margin-left: 15px;
      }
    h2 {
      font-family: Roboto;
      font-size: 24px;
      font-weight: 700;
      line-height: 28px;
      letter-spacing: 0em;
      color: white;   
    }
  `
};

export default PlanosStyle;
