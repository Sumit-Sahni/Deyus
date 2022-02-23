import React from "react";
import styled from "styled-components";
import { MdOutlineShoppingCart} from "react-icons/md";

const Container = styled.div`
width: 327px;
height: 50px;
background: #13324A;
box-shadow: 0px 1px 15px rgba(2, 2, 2, 0.04), inset 0px 0px 15px rgba(88, 88, 88, 0.3);
margin: 30px 22px;
display: flex;
flex-wrap: wrap;
flex-direction: row;
justify-content: center;
`

const CartLogo = styled.div`
color: #ffffff;
display: flex;
flex-direction: row;
align-items: center; 
margin-right: 0.5rem;
`
const AddToCart = styled.div`
color: #ffffff;
display: flex;
flex-direction: row;
align-items: center;    
margin-: 10px;
font-size: 8px;
font-family: Montserrat;
font-style: normal;
font-weight: bold;
`
const Cart = ()=>{
    return(
            <Container>

               <CartLogo>
                < MdOutlineShoppingCart/>
               </CartLogo>
               <AddToCart>
                  <h1>ADD TO CART</h1>
               </AddToCart>
            </Container>
    );
}

export default Cart;