import { useState, useEffect } from "react";
import { Todo, TodoItems } from "./Components/index";
import { TodoProvider } from "./Context/index";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center p-5">
        
        <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl p-6">
          
          <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
            📝 Todo App
          </h1>

          {/* Input */}
          <div className="mb-4">
            <Todo />
          </div>

          {/* Todo List */}
          <div className="space-y-3 max-h-[400px] overflow-y-auto">
            {todos.length === 0 ? (
              <p className="text-center text-gray-500">No todos yet</p>
            ) : (
              todos.map((todo) => (
                <div
                  key={todo.id}
                  className="bg-gray-100 rounded-lg p-3 shadow-sm hover:shadow-md transition"
                >
                  <TodoItems todo={todo} />
                </div>
              ))
            )}
          </div>

        </div>
      </div>
    </TodoProvider>
  );
}

export default App;