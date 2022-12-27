import styled from "styled-components";

const LoginStyle = {
  TelaLogin: styled.div`
    width: 400px;
    height: 667px;
    background: #0e0e13;
    display: flex;
    flex-direction: column;
    align-items: center;    
  `,
  LogoLogin: styled.div`
    img {
        width: 299px;
        height: 49px;
        margin-top: 134px;
        margin-bottom: 100px;
    }
  `,

  ContainerLogin: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
    input{
        height: 52px;
        width: 299px;        
        border-radius: 8px;
        background: #FFFFFF;
        margin-left: 8px;
    }

    button{
        height: 52px;
        width: 298px;        
        border-radius: 8px;        
        background: #FF4791;
        color: white;
        font-family: Roboto;
        font-size: 14px;
        font-weight: 700;      

    }

    a {
        font-family: Roboto;
        font-size: 14px;
        font-weight: 400;
        line-height: 16px;
        color: white;
        
    }
  `,
};

export default LoginStyle;
