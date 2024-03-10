import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import HOC from "./HOC";
import { useDispatch, useSelector } from "react-redux";
import FetchData from "../Axios/FetchData";
import { add } from "../Redux/Actions/Actions";
//import { fetchProduct } from "../Redux/Actions/Actions";

const Home = () => {
    
  const dispatch = useDispatch();
  useEffect(() => {
		///dispatch(fetchProduct())     to use thunk middleware
    dispatch(add())
	}, [])

  return (
    <div>
      
      <h1>Products page</h1>
      
      <FetchData/>
    </div>
  );
};

export default HOC(Home);
