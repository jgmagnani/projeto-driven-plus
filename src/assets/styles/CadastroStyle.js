import styled from "styled-components";

const CadastroStyle = {

 TelaCadastro: styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #0E0E13;
  width: 400px;
  height: 100vh;
  a{
    width: 232px;
    height: 17px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 13.976px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;
    
    color: #52B6FF;
  }
`,
Form: styled.form`
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  input{
    box-sizing: border-box;
    width: 303px;
    height: 45px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 8px;
    margin-bottom: 16px;
  }
  button{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 18px 122px;
    gap: 10px;
    width: 299px;
    height: 52px;
    background: #FF4791;
    border-radius: 8px;
    margin-top: 8px;
    margin-bottom: 24px;
  }
`
}

export default CadastroStyle;