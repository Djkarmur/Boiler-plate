import React from 'react'
import HOC from './HOC'
import { useDispatch, useSelector } from 'react-redux'

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { checkout, removeFromCart } from '../Redux/Actions/Actions';

const Cart = () => {

  const cartProduct = useSelector((state) => state.cartProduct);
  const dispatch = useDispatch();

  const len = cartProduct.length;
  console.log(cartProduct);

  function handleRemoveCart(id){
    dispatch(removeFromCart(id))
  }
  function handlecheckout(){
    console.log('hello');
    dispatch(checkout());
  }
  return (
    <div>
      {  
         
          cartProduct?.map((product) => {
          return (
            <>
              <div key={product.id}>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={product.images[0]} />
                  <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                    {product.id}  <br/>
                    {product.description}  <br/>
                    <h3>${product.price}</h3>
                    </Card.Text>
                    <Button variant="primary" onClick={()=> handleRemoveCart(product.id)}>Remove from Cart</Button>
                    
                  </Card.Body>
                </Card>

                
              </div>
            </>
          );
        })}
        {
          cartProduct.length !== 0 ? ( <button onClick={handlecheckout}>checkout</button>) : (<div> <h2> No product in the Cart!</h2>  </div>)
        }
     
    </div>
  )
}

export default HOC(Cart) 
