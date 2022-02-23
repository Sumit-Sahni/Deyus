import React from "react";
import styled from "styled-components";


const MainBox = styled.div`
   display: flex;
   flex-direction: column;
   flex-wrap: wrap;
   align-items: center;
   margin-top:2.5rem;
   
`
const ProductImage =styled.div`
   color: white;
   border: 1px solid white;
   width: 311px;
   height: 407px;
   background-image: url("https://unsplash.com/photos/ePPcMfzYQ-Y/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8N3x8YmxhbmslMjBiZWF1dHklMjBwcm9kdWN0fGVufDB8fHx8MTY0NTU1NzI4NA&force=true");
   background-size: cover;
   background-position: center;
   background-repeat: no-repeat;


`


const ProductImg = () => {
    return (
       <MainBox>
             <ProductImage>
            
             </ProductImage>
       </MainBox>
    );
}

export default ProductImg;