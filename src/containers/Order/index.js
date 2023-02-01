import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import burguerTwo from '../../Assets/burguerTwo.svg';
import trash from '../../Assets/trash.svg';
import { Container, ContainerItens, ContainerOrders, Button, Image, H1,  ImageTrash, OrderClient, NameClient, ContainerImg    } from "./styles";


function Order (){

  const [orders, setOrders] = useState([])
  const navigate = useNavigate()

  const baseUrl= "https://api-challenge-node-tiw7.vercel.app/orders"
        
      
  useEffect(() =>
    {
      async function fetchUsers (){
      const {data: newOrder} = await axios.get(`${baseUrl}`);
      
      setOrders(newOrder);}
      
         
      
      fetchUsers()
      }, [])
        
        
      
      async function deleteOrder (orderId) {
      await axios.delete(`${baseUrl}/${orderId}`);
      const newOrders = orders.filter(order => order.id !== orderId);
      
      setOrders(newOrders)
      }
      
      function goback () {
        navigate("/");
      }
  

    return (

      <Container>
            

        <ContainerItens>
            <ContainerImg>
              <Image alt="burguerOrder" src={burguerTwo}/>
            </ContainerImg>
                
            <H1>Pedidos</H1>
            {orders.map((order) => (
            <ContainerOrders key={order.id}>
                    
                <OrderClient>{order.order}</OrderClient>
                <button onClick={()=>{deleteOrder(order.id)}}>
                <ImageTrash alt="trash" src={trash}/>
                </button>
                <NameClient>{order.clientName}</NameClient>
                    
            </ContainerOrders>
            ))
            }
            
            <Button onClick={goback}>Voltar</Button>
          </ContainerItens>
      </Container>


    )
}

export default Order