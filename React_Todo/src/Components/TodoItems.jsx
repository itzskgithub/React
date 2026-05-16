import React from 'react'
import {useState} from 'react'
import {useTodo} from '../Context/Context'

function TodoItems({todo}) {
    const [IsTodoEditable, setIsTodoEditable] = useState(false)
    const [todomsg, setTodomsg] = useState(todo.todo)
    const {updateTodo, deleteTodo, toggleComplete} = useTodo()

    const editTodo = () => {
        updateTodo(todo.id, {...todo, todo:todomsg})
        setIsTodoEditable(false)
    }

    const toggleCompleted = () => {
      toggleComplete(todo.id);
    }

  return (
    <div className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"}`}>

        <input
        type = "checkbox"
        className="cursor-pointer"
        checked = {todo.completed}
        onChange = {toggleCompleted}
        />

        <input 
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg ${
                  IsTodoEditable ? "border-black/10 px-2" : "border-transparent"
              } ${todo.completed ? "line-through" : ""}`}
        value={todomsg}
        onChange={(e) => setTodomsg(e.target.value)} 
        readOnly={!IsTodoEditable}
        />
        <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"

        onClick={() => {
          if(todo.completed) return;
          else if(IsTodoEditable) {
            editTodo()
          }
          else setIsTodoEditable(prev => !prev)
        }}

        disabled={todo.completed}
        >
          {IsTodoEditable ? "📁" : "✏️"}

        </button>

        <button
              className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
              onClick={() => deleteTodo(todo.id)}
          >
              ❌
          </button>

    </div>
  )
}

export default TodoItems