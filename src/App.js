import './App.css';

import Form from './Form.js';
import React,{useState,useEffect} from "react";

function App() {
  const [inputText,setInputText]=useState("");
  const [todo,setTodo]=useState([])
  const [complete,setComplete]=useState([])
  useEffect(() => {
      if(localStorage.getItem("todo"))
        setTodo(JSON.parse(localStorage.getItem("todo")));
      if(localStorage.getItem("complete"))
        setComplete(JSON.parse(localStorage.getItem("complete")));
  }, [setTodo,setComplete]);
  
  return (
    <div className="App">
     
     <Form todo={todo} setTodo={setTodo} complete={complete} setComplete={setComplete} inputText={inputText} setInputText={setInputText}/>
     
    </div>
  );
}

export default App;
