    import React, { useState } from 'react';

    function TodoList(){


        const[task, setTasks] = useState(['eat','drink']);
        const[newTask, setNewTasks] = useState('');

        function inputchange(event){
            setNewTasks(event.target.value)

        }

        function addtask(){
            setTasks([...task, newTask]);
            setNewTasks('');


        }

        function deletetask(index){
            const updatedtasks = task.filter((_,i) => i !== index);
            setTasks(updatedtasks);
            

        }

        function movetaskup(index){
            if(index>0){
                const updatedtasks = [...task];
               [ updatedtasks[index], updatedtasks[index-1] ] = 
               [updatedtasks[index-1], updatedtasks[index]]
                setTasks(updatedtasks);
            }


        }

        function movetaskdown(index){
            if(index < task.length -1){
                const updatedtasks = [...task];
               [ updatedtasks[index], updatedtasks[index+1] ] = 
               [updatedtasks[index+1], updatedtasks[index]]
                setTasks(updatedtasks);
            }

            
        }
        return(
        <div className='todolist'>

            <h1>To Do List</h1>

            <div>
                <input
                type = 'text'
                placeholder='enter task'
                value = {newTask}
                onChange={inputchange}
                ></input>

            <button className='add-button' onClick={addtask}>
                Add
            </button>

            </div>

            <ol>
                {task.map((task,index) => 
                <li key = {index}>
                <span className='test'>{task}</span>

                <button
                className='delete-button'
                onClick={() => deletetask(index)}>Delete</button>

                
                <button
                className='move-button'
                onClick={() => movetaskup(index)}>Up</button>
                
                <button
                className='move-button'
                onClick={() => movetaskdown(index)}>Down</button>
                </li>
                
                )}
            </ol>



        </div>)


    }
    export default TodoList;
