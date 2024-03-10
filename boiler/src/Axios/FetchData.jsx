import React, { useCallback, useEffect, useState } from "react";
import Spinner from 'react-bootstrap/Spinner';
import API from "./api";
import { useDispatch, useSelector } from "react-redux";
import { add, addToCart } from "../Redux/Actions/Actions";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const FetchData = () => {
  const [stateData, setData] = useState([]);
  const dispatch = useDispatch();

  
      const products = useSelector((state) => state.products[1]);
      const loaderState = useSelector((state)=> state.loader);
      
      
      useEffect(()=>{
        setData(products)
      },[products])

  
  
      const handleAddCart = useCallback((product) =>{
        console.log(product);
        dispatch(addToCart(product))
      })

      return (
        <div>
          {loaderState ? (
            <div>
              <Spinner animation="border" variant="success" />
            </div>
          ) : (
            stateData?.map((product) => {
              return (
                <div key={product.id}>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={product.images[0]} />
                    <Card.Body>
                      <Card.Title>{product.title}</Card.Title>
                      <Card.Text>
                        {product.id} <br />
                        {product.description} <br />
                        <h3>${product.price}</h3>
                      </Card.Text>
                      <Button
                        variant="primary"
                        onClick={() => handleAddCart(product)}
                      >
                        Add to Cart
                      </Button>
                      <Button variant="secondary">View Details</Button>
                    </Card.Body>
                  </Card>
                </div>
              );
            })
          )}
        </div>
      );
          }

export default FetchData
