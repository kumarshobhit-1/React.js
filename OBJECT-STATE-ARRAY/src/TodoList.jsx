import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function TodoList() {
    let [todos, setTodos] = useState([{ task : "sample-task", id : uuidv4(), isDone : false }]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        setTodos((preTodos) =>{
            return [...preTodos, { task : newTodo, id : uuidv4()}]
        });
        setNewTodo("");
    }

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    }

    let deleteTodo = (id) => {
        setTodos((preTodos) => todos.filter((preTodos) => preTodos.id != id));   
    };


    let upperCaseAll = () =>{
        setTodos((preTodos) => (
            preTodos.map((todo) => {
                return {
                    ...todo,
                    task : todo.task.toUpperCase(),
                };
            })
        ));
    };


    let lowerCaseAll = () => {
        setTodos((preTodos) => (
            preTodos.map((todo) =>{
                return {
                    ...todo,
                    task : todo.task.toLowerCase(),
                };
            })
        ));
    };


    let upperCaseOne = (id) => {
        setTodos((preTodos) => 
            preTodos.map((todo) => {
                if(todo.id === id) {
                    return {
                        ...todo,
                        task : todo.task.toUpperCase(),
                    };
                } else {
                    return todo;
                }
            })
        );
    };


    let lowerCaseOne = (id) => {
        setTodos((preTodos) => 
            preTodos.map((todo) => {
                if(todo.id === id) {
                    return {
                        ...todo,
                        task : todo.task.toLowerCase(),
                    };
                } else {
                    return todo;
                }
            })
        );
    };

    return (
        <div>
            <input type="text" placeholder="add a Task" value={newTodo} onChange={updateTodoValue}/>
            <br /><br />
            <button onClick={addNewTask}>Add Task</button>
            <br /><br /><br />
            
            <hr />
            <h4>Task Todo</h4>
            <ul>
                {
                    todos.map((todo) =>(
                        <li key={todo.id}>
                        <span>{todo.task}</span>
                        &nbsp;&nbsp;&nbsp;
                        <button onClick={() => deleteTodo(todo.id)}>delete</button>
                        &nbsp;&nbsp;
                        <span>
                            <button onClick={() => upperCaseOne(todo.id)}>Upper Case One</button>
                            &nbsp;&nbsp;
                            <button onClick={() => lowerCaseOne(todo.id)}>Lower Case One</button>
                        </span>
                        </li>
                    ))
                }
            </ul>
            <br /><br />
            <span>
                <button onClick={upperCaseAll}>Upper Case All</button>
                &nbsp;&nbsp;
                <button onClick={lowerCaseAll}>Lower Case All</button>
            </span>
        </div>
    );
}