"use client"

import { decrement } from '@/app/GlobalRedux/Features/counter/counterSlice';


import { useDispatch, useSelector } from "react-redux";

// import {  decrement } from "./GlobalRedux/Features/counter/counterSlice";

const Navbar = () => {

    const count = parseInt(localStorage.getItem('counterValue')) || 1;


    const dispatch = useDispatch();
  return (
    <div>
    <h2>Count Display: {count}</h2>
  </div>
  )
}

export default Navbar
