import React from "react";
import styled from "styled-components";
import './ProductSubscription.css';
import { MdStar} from "react-icons/md";


const Container = styled.div`
    display: flex;
    flex-direction:column;
    flex-wrap: wrap;
    width: auto;
    height: auto;
    padding-left: 1.5rem;
    @media (min-width: 768px) {
        width:700%;
        height:100%;
        display:flex;
        flex-direction:row;
        justify-content:space-between;
      }

`


const InactiveSubscription = styled.div`
    width: 306px;
    height: 124px;
    background: #21272C;
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    jsutify-content: center;
`
const  InactiveSubscriptionBox1 = styled.div`
//    border: 1px solid white;
   width: 70%;
   height: 100%;
   padding: 0.6rem;
`
const  InactiveSubscriptionBox1h3 = styled.div`
     color: white;
     width: 60%;
     height: 13px;
     border-radius: 8px;
     background-color: blue;
     TEXT-ALIGN: center;
     font-family: Poppins;
     font-style: normal;
     font-weight: 500;
     font-size: 6px;
     line-height: 223.7%;
`
const  InactiveSubscriptionBox1h1 = styled.div`
  color: red;
  font-family: DM Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 9px;
  line-height: 136.2%;
  width: 208px;
  height: 22px;
  color: #FFFFFF;
  margin-top:1rem;
    
`


const InactiveSubscriptionBox2 = styled.div`
//    border: 1px solid white;
      width: 30%;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      padding: 0.6rem;
      font-size: 12px;
      font-family: DM Serif Display;
      color: #FFFFFF;
      margin-top: 2rem;
`

const ActiveSubscription = styled.div`
    width: 306px;
    height: 94px;
    border: 1px solid white;
    background: #374B5B;
    border-radius: 8px;
    margin-top: 1rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    jsutify-content: center; 
`
const ActiveSubscriptionBox1 = styled.div`
        // border: 1px solid white;
     width: 70%;
     height: 100%;
     padding: 0.6rem;
`
const ActiveSubscriptionBox2h1 = styled.div`
      color: red;
      font-family: DM Sans;
      font-style: normal;
      font-weight: bold;
      font-size: 9px;
      line-height: 136.2%;
      width: 208px;
      height: 22px;
      color: #FFFFFF;
      padding-top: 0.5rem;
`
const ActiveSubscriptionBox2 = styled.div`
      width: 30%;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      padding: 0.6rem;
      font-size: 12px;
      font-family: DM Serif Display;
      color: #FFFFFF;
`


const ProductSubscription = () => {
    return(
        <Container>
            <InactiveSubscription>
               <InactiveSubscriptionBox1>
                     <InactiveSubscriptionBox1h3>
                           <h3><MdStar/>MOST POPULAR<MdStar/></h3>
                        </InactiveSubscriptionBox1h3>
                        <InactiveSubscriptionBox1h1>
                            <h1>1 Months Pack (4 tubes)</h1>
                        </InactiveSubscriptionBox1h1>
                      <h4>Savings: ₹200</h4>
                      <ul>
                          <li style={{color:'#24DB6D'}}>38% Saved</li>
                          <li style={{marginLeft:'20px',color:'#DB9D24'}}>Best Results</li>
                      </ul>
                 
                    </InactiveSubscriptionBox1>


                  <InactiveSubscriptionBox2>
                       <h1>₹595</h1>
                       <h1 style={{color:"grey"}}><strike>₹795</strike></h1>
                    </InactiveSubscriptionBox2>
            </InactiveSubscription>
               
                <ActiveSubscription>
                    <ActiveSubscriptionBox1>
                         <ActiveSubscriptionBox2h1>
                              <h1>3 Months Pack (12 tubes)</h1>
                         </ActiveSubscriptionBox2h1>
                          
                           <h4 style={{color:"grey"}}>Savings: ₹100</h4>
                         <ul>
                            <li style={{color:'#24DB6D'}}>12% Saved</li>
                         </ul>
                    </ActiveSubscriptionBox1>

                    <ActiveSubscriptionBox2>
                       <h1>₹899</h1>
                       <h1 style={{color:"grey"}}><strike>₹999</strike></h1>
                    </ActiveSubscriptionBox2>
                </ActiveSubscription>
        </Container>
    );
}

export default ProductSubscription;