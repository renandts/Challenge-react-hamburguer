import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
//import axios from "axios";
import { useRef, useState} from "react";
import burguerOne from '../../Assets/burguerOne.svg'
import { Container, ContainerItens, ContainerImg, ContainerInput, H1, InputLabel, Input, Button, Image } from "./styles";




function App (){
const [orders, setOrders] = useState([])
const InputOrder = useRef()
const InputName = useRef()
const navigate = useNavigate()


async function AddNewOrder (){
    const {data: newOrder} = await axios.post('http://localhost:3001/orders', {
        order:InputOrder.current.value, clientName:InputName.current.value
    })
    setOrders([...orders, newOrder])

    console.log(newOrder)

    navigate('/orders')
}
    

    return(

        <Container>
            

            <ContainerItens>
            <ContainerImg>
            <Image alt="burguerCode" src={burguerOne}/>
            </ContainerImg>
            <ContainerInput>
                <H1>Faça seu Pedido!</H1>
            
                <InputLabel>Pedido</InputLabel>
                <Input ref={InputOrder}  placeholder="Digite seu pedido aqui"></Input>

                <InputLabel>Nome do cliente</InputLabel>
                <Input ref={InputName} placeholder="Digite seu nome aqui"></Input>

                <Button onClick={AddNewOrder}>Novo Pedido</Button>
                </ContainerInput>
            </ContainerItens>
        </Container>
    )
}

export default App