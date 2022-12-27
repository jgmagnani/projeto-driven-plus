import styled from "styled-components";

const Plano = {
  TelaPlano: styled.div`
    width: 400px;
    height: 667px;
    background: #0e0e13;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,

  SectionFlex: styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    input {
      height: 52px;
      width: 145px;
      background: #ffffff;
      border-radius: 8px;
      margin-bottom: 5px;
    }
  `,

  SectionBox: styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 24px;
    input {
      height: 52px;
      width: 299px;
      background: #ffffff;
      border-radius: 8px;
      margin-bottom: 5px;
    }
  `,

  ContainerDadosPlano: styled.div`
    display: flex-box;
    justify-content: center;
    align-items: center;
    flex-direction: start;
    margin-left: 40px;
    width: 100%;
    ol {
      margin-left: 16px;
      list-style-position: inside;
      list-style-type: decimal;
      color: #ffffff;
      margin-bottom: 10px;
    }
    h6 {
      color: #ffffff;
      margin-bottom: 10px;
    }
    ul {
      margin-left: 16px;
      li {
        list-style-position: inside;
        color: #ffffff;
      }
    }
  `,

  ContainerLogoPlano: styled.div`
    display: flex-box;
    justify-content: center;
    align-items: center;
    flex-direction: start;
    margin-bottom: 22px;
    h2 {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 700;
      font-size: 32px;
      line-height: 38px;
      color: #ffffff;
    }
  `,

  ContainerTopo: styled.div`
    display: flex;
    position: absolute;
    top: 24px;
    left: 24px;
    ion-icon {
      color: #ffffff;
      width: 30px;
      height: 30px;
    }
  `,
  Formulario: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  Button: styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 18px 122px;
    gap: 10px;
    width: 299px;
    height: 52px;
    background: #ff4791;
    border-radius: 8px;
    margin-left: auto;
    margin-right: auto;
  `,
};

export default Plano;
