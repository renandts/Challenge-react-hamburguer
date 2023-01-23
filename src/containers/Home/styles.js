import styled from "styled-components";

//import FundoBurguer from '../../Assets/fundoHamburguer.png'

export const Container = styled.div`
    background: #0A0A10;
    display: flex;
    justify-content: center;
    align-items:center;
    height: 100%;
    min-height: 100vh;
    
`

export const ContainerImg = styled.div`
    display: flex;
    justify-content: center;
    margin-top:20px;
`
export const Image = styled.img`
    width: 342px;
    height: 354px;
    

   
`

export const ContainerItens = styled.div `
    
    display: flex;
    flex-direction: column;
    width: 414px;
    height: 100%;
    
    
    
`
export const ContainerInput = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    
`

export const H1 = styled.h1`
    font-weight: 700;
    font-size: 28px;
    line-height: 33px;
    text-align: center;
    color: #FFFFFF;
    margin: 10px 20px

`

export const InputLabel = styled.p`
font-weight: 700;
font-size: 18px;
line-height: 22px;
letter-spacing: -0.408px;
color: #EEEEEE;
margin-left:56px;
`

export const Input = styled.input`
width: 342px;
height: 58px;
background: rgba(255, 255, 255, 0.25);
border-radius: 14px;
margin: 0px 36px 20px;
outline:none;
border:none;

font-weight: 300;
font-size: 18px;
line-height: 30px;
padding-left: 15px;
color: #FFFFFF;


`

export const Button = styled.button`
width: 342px;
height: 68px;
background: #D93856;
margin: 0px 36px 56px;

font-weight: 700;
font-size: 17px;
line-height: 2px;
text-align: center;
color: #FFFFFF;

cursor: pointer;

&:hover{
   opacity:0.8 ;
}

&active{
   opacity:0.5 ;
}

`