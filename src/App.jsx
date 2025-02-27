import React from 'react';
import TodoList from "./todolist.jsx";
import TodoList1 from "./todolist1.jsx";
import './index.css'; // Import Tailwind CSS

function App() {
  return (
    <div className="flex justify-center items-center h-screen p-4">
      <div>
        <h1 className="text-3xl font-bold underline mb-4 !text-green-500">
          Tailwind is installed
        </h1>
        <TodoList1 />
      </div>
    </div>
  );
}

export default App;