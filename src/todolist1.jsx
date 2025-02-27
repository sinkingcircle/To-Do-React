import React, { useState } from "react";

function TodoList1() {
    const [task, setTasks] = useState(['eat', 'drink']);
    const [newTask, setNewTasks] = useState('');

    function inchagne(event) {
        if (event.target.value !== "") {
            setNewTasks(event.target.value);
        }
    }

    function addtask() {
        if (newTask.trim() !== "") {
            const utask = [...task, newTask];
            setNewTasks("");
            setTasks(utask);
        }
    }

    function deletetask1(index) {
        const updatedTasks = task.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    function moveup(index) {
        if (index > 0) {
            const utask = [...task];
            [utask[index], utask[index - 1]] = [utask[index - 1], utask[index]];
            setTasks(utask);
        }
    }

    function movedown(index) {
        if (index < task.length - 1) {
            const utask = [...task];
            [utask[index], utask[index + 1]] = [utask[index + 1], utask[index]];
            setTasks(utask);
        }
    }

    return (
        <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold mb-4">ToDoList</h1>
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="enter task"
                    value={newTask}
                    onChange={inchagne}
                    className="border p-2 mr-2"
                />
                <button className="bg-blue-500 text-white p-2" onClick={addtask}>Add</button>
            </div>
            {task.length === 0 ? (
                <p className="bg-blue-500 text-white p-2 bg-">No tasks remaining</p>
            ) : (
                <ol className="list-decimal pl-5">
                    {task.map((tasks, index) => (
                        <li key={index} className="mb-2">
                            <span className="mr-2">{tasks}</span>
                            <button className="bg-green-500 text-white p-1 mr-2" onClick={() => moveup(index)}>UP</button>
                            <button className="bg-yellow-500 text-white p-1 mr-2" onClick={() => movedown(index)}>Down</button>
                            <button className="bg-red-500 text-white p-1" onClick={() => deletetask1(index)}>Delete</button>
                        </li>
                    ))}
                </ol>
            )}
        </div>
    );
}

export default TodoList1;