import './App.css';
import { useState } from 'react';
import React from 'react';
import Menu from './components/Menu';
import About from './components/About';
import{BrowserRouter,Routes,Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Footer from './components/Footer';
// import Footer from './components/Footer';



function MyButton({count , onClick}){
  return (
    <button onClick={onClick}> {count}</button>
  )
}
function MyButton1({count , onClick}){
  return (
    <button onClick={onClick}> +</button>
  )
}
function MyButton2({count , onClick}){
  return (
    <button onClick={onClick}> -</button>
  )
}


function App() {

  const [count , setCount] = useState(0);
  function inc(){
    setCount(count+1);
  }
  function dec(){
    setCount(count-1);
  }
  return (
    <div >
       <BrowserRouter>
      <Routes>
      <Route path="/" element={<Menu />} >
          <Route path="/About" element={<About/>} /> 
        </Route>

      </Routes>
      </BrowserRouter>

      <MyButton1  count = {count} onClick={inc}/>
      
      <MyButton  count = {count}/>
    <MyButton2 count = {count} onClick={dec}/> 
   
      
    </div>
  );
}

export default App;




