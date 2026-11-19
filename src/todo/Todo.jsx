import { useState } from "react";
import { useSelector, useDispatch} from "react-redux";
import { addTodo, deleteTodo, toggleTodo } from "./todoSlice";

function Todo() {
    const todos = useSelector((state)=>state.todo.todos);
    const dispatch = useDispatch();
    const [task, setTask] =useState("");
    const completedCount = todos.filter((todo)=>todo.completed).length;

  return (
    <div>
      <input type="text" value={task} onChange={(e)=>setTask(e.target.value)}/>
      <button onClick={()=>{
        if(task.trim !==""){
            dispatch(addTodo(task));
            setTask("");
        }
      }}>Add</button>
      <h3>Completed: {completedCount}</h3>

      {todos.map((todo)=>(
        <div key={todo.id}>
            <span onClick={()=>dispatch(toggleTodo(todo.id))}>{todo.text}</span>

            <button onClick={()=>dispatch(deleteTodo(todo.id))}>Delete</button>

        </div>
      ))}
    </div>
  )
}

export default Todo
