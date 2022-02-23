import React from 'react'
import Navbar from './Navbar_Component/Navbar';
import ProductImage from './Product_Img/ProductImg';
import './App.css';
import ProductDetail from './Product_Detail/ProductDetail';
import ProductSubscription from './Product_Subscription/ProductSubscription';
import Cart from './Addtocart/Cart';
import styled from 'styled-components';

const Container = styled.div`
  @media (min-width: 768px) {
    display:flex;
    flex-direction:row;
    align-item:center;
    justify-content:center;
  }
`

const Container2 = styled.div`
  @media (min-width: 768px) {
    display:flex;
    flex-wrap:wrap;
    flex-direction:column;
     margin:-8% 47%;
  }
`
function App() {
  return (
  <div>
    <Navbar/>
      <hr style={{marginTop: "10px", marginLeft: "10px", marginRight: "10px",Color: "red"}}></hr>
      <Container>
          <ProductImage/>
          <ProductDetail/>
      </Container>
       <Container2>
       <ProductSubscription/>
       <Cart/>
       </Container2>
     
     
  </div>
  );
}

export default App;
