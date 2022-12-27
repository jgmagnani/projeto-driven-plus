import styled from "styled-components";

const HomeStyle = {
    SubContainer: styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: space-around;
    section{
    a{
        color: #FFFFFF;
        text-decoration: none;
    }
    a:visited{
        color: #FFFFFF;
    }
  }
`,
Container: styled.div`
  display: flex;
  width: 400px;
  align-items: center;
  flex-direction: column;
  background: #0E0E13;
  height: 100vh;
  h2{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    margin-top: 12px;
    color: #FFFFFF;
  }
  
`,
ContainerTopo: styled.div`
    display: flex;
    justify-content: space-around;
    align-itens: center;
    width: 100%;
    margin-top: 22px;
    
    img{
        height: 50px;
        width: 56px;
        border-radius: 0px;
    }
`,

Botoes: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
    height: 52px;
    width: 299px;
    border-radius: 8px;
    background: ${props => props.cor};
    border-radius: 8px;
    margin-bottom: 8px;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    color: #FFFFFF;
`
}

export default HomeStyle;