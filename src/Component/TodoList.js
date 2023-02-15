import './Todo.css'
import React from 'react'

const TodoList = ({items, DelData,EdData }) => {
  return (
    <div>
      {items.map((curData) => {
      return (
        <div key={curData.id} className='TodoList'>
          <p>{curData.name}</p>
          <button onClick={() => DelData(curData.id)}><i className="fas fa-trash"></i></button>
          <button onClick={() => EdData(curData.id)}><i className="fas fa-edit"></i></button>
        </div>
      );
    })}
    </div>
  )
}

export default TodoList