 import React from 'react'
import { useParams } from 'react-router'
 
 function ProductScreen() {
    var { id } = useParams();
   return (
     <div>
        <p>Product ID: {id}</p>
     </div>
   )
 }

 export default ProductScreen