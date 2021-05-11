import { set } from 'mongoose';
import React from 'react';
import { StringDecoder } from 'string_decoder';
//import TodoList from'./TodoList.js';
function Form({inputText,setInputText,todo,setTodo,complete,setComplete}){

    function inputTextHandler(e){
        console.log(e.target.value);
        setInputText(e.target.value);

    }
    function submitHandler(e){
        e.preventDefault();
        let temp = [...todo,{text:inputText}];
        setTodo(temp);
        localStorage.setItem("todo",JSON.stringify(temp));
        setInputText('');
        
    }
    function deleteHandler(text){
       let temp = todo.filter((el)=>el.text!==text);
       setTodo(temp);
       localStorage.setItem("todo",JSON.stringify(temp));
    }
    

     return(
<div>
    
        <h1>Todo List</h1>
	<div className="container">
		<div className="addTodo">
			<input value={inputText} onChange={inputTextHandler} type="text" placeholder="Add todo"/>
			<button onClick={submitHandler}>ADD</button>
		</div>
        <ol className="notCompleted">
			<h3>NOT COMPLETED</h3>
            {todo.map (ele=><li key={todo.text}>{ele.text} 
                
                <button onClick={()=>{
                    let temp = [...complete,ele];
                    setComplete(temp);
                    deleteHandler(ele.text)
                    localStorage.setItem("complete",JSON.stringify(temp));
                }}>done</button>
                <button onClick={()=>deleteHandler(ele.text)}>delete</button></li>)}
            
		</ol>

		<ol className="Completed">
			<h3>COMPLETED</h3>
           {complete.map(ele=><li key={todo.text}>{ele.text} 
                
                
                <button onClick={()=>{
                    let temp = complete.filter(e=>e.text!==ele.text)
                    setComplete(temp)
                    localStorage.setItem("complete",JSON.stringify(temp));
                    }}>delete</button></li>)}
		</ol>

		
	</div>
</div>
 );
}
export default Form;