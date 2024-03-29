import styled from "styled-components";

const ConfirmacaoStyle = { 
  TelaConfirmacao: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 248px;
    height: 210px;
    background: #ffffff;
    border-radius: 12px;
    p {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 21px;
      text-align: center;
      color: #000000;
      margin-top: 33px;
    }

    div {
      display: flex;
      margin-bottom: 20px;
    }
  `,

  Container: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: absolute;
    width: 410px;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgb(14, 14, 19, 0.5);
    height: 100vh;
  `,

  ContainerTopo: styled.div`
    display: flex;
    position: absolute;
    top: 24px;
    right: 24px;
  `,

  Button: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 95px;
    height: 52px;
    background: ${(props) => props.cor};
    border-radius: 8px;
    margin-left: 10px;
  `,
};

export default ConfirmacaoStyle;
