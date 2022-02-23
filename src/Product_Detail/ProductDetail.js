import React from "react";
import styled from "styled-components";
import { MdStar} from "react-icons/md";
import { MdOutlineStarHalf} from "react-icons/md";


const Container = styled.div`
  padding: 0 2rem;
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
`
const ProductHeading = styled.div`
  color: white;
  width: 100%;
  font-size: 20px;
  font-family: DM Sans;
  font-style: normal;

`
const AboutProduct = styled.div`
color: white;
width: 311px;
height: 69px;   
font-family: Belgrano;
font-style: normal;
font-weight: normal;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 193.7%;
display: flex;
`
const ProductReview = styled.div`
  color: white;
  width: 70%;
  font-size: 12px;
  line-height: 193.7%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 0.5rem;

`
const Review = styled.div`
    width: 73px;
    height: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    background-color: #079741;
`

const Price = styled.div`
  color: white;
  font-family: Montserrat;
  font-weight: 500;
  font-size: 20px;
  line-height: 39px;
  display: flex;
  flew-wrap: wrap;
  flex-direction: row;
  width: 100%;
  height: auto;
  padding: 1.5rem 0;
`
const ProductDetail = ()=>{
    return(    
       <Container>
           <ProductHeading>
               <h2>Everyday rinse and reload<br></br></h2>
           </ProductHeading>
          
          <AboutProduct>
            <p>Achieve your dream skin goal with this complete<br></br>package of skincare product that will rejuvenate<br></br>your day.</p>
          </AboutProduct>
          <ProductReview>
            <Review>
                <MdStar/>
                <MdStar/>
                <MdStar/>
                <MdStar/>
                <MdOutlineStarHalf/>
            </Review>
            <p>4.5</p>
            <p>Click to read reviews</p>
          </ProductReview>

            <Price>
              <h1>₹899</h1>
              <h1 style={{color:"grey", marginLeft:"40px"}}><strike>₹1299</strike></h1>
            </Price>
       </Container>

      
    );
}

export default ProductDetail;