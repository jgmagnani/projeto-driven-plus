import styled from "styled-components";

const CadastroStyle = {

    TeleCadastro: styled.div`
        width: 400px;
        height: 667px;
        background: #0e0e13;
        display: flex;
        flex-direction: column;
        align-items: center;
        form{
            margin-top: 147px;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 16px;
            input{
                height: 52px;
                width: 299px;        
                border-radius: 8px;
                background: #FFFFFF;        
            }
        
            button{
                height: 52px;
                width: 299px;        
                border-radius: 8px;        
                background: #FF4791;
                color: white;
                font-family: Roboto;
                font-size: 14px;
                font-weight: 700;
                border-styled: none;
        
            }
            a {
                font-family: Roboto;
                font-size: 14px;
                font-weight: 400;
                line-height: 16px;
                color: white;
                
            }
        }

    
    `

}


export default CadastroStyle;