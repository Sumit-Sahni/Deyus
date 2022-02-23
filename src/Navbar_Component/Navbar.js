import React from 'react'
import styled from 'styled-components';
import { MdReorder} from "react-icons/md";
import { MdOutlineShoppingCart} from "react-icons/md";

const NabBox = styled.div`
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
   justify-content: space-between;
   max-width: 100%;
   color: #E5E5E5;

`
const InsideNav = styled.div`
    margin:10px;
`

const Navbar = () => {
    return(

         <NabBox>
             <InsideNav><div><h1><MdReorder/></h1></div></InsideNav>
             <InsideNav><div><h1><MdOutlineShoppingCart/></h1></div></InsideNav> 
         </NabBox>
        
      
    );
}

export default Navbar;