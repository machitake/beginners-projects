"use client"
import { NextPage } from 'next'
import { useSimpleTodoText } from './custom.Hook';

const SimpleTodo: NextPage = () => {

  const {
    todo,
    textAreaRef,
    handelTodo,
    completedTodo,
    deleteTodo,
  } = useSimpleTodoText();

  return (
    <div className='max-w-4xl mx-auto mt-8'>
    <div className='flex justify-center'>
      <div className='flex flex-col items-center p-5 bg-white shadow-xl rounded-lg'>
        <h1 className='text-4xl font-mono text-slate-500 mb-4'>Simple Todo</h1>
        <textarea
          ref={textAreaRef}
          className='resize-none w-72 border border-slate-500 rounded-lg text-center p-5'
          placeholder='Todoを入力してください'
        />

        <div className='mt-8 mb-8'>
          <button
            onClick={handelTodo}
            className='border border-slate-400 bg-green-400 px-3 py-2 rounded-lg'>
            送信
          </button>
        </div>

        <div className='w-full max-w-md mt-6'>
          <ul className='space-y-4'>
            {/* MEMO */}
              {todo.map((item, index) => (
                <li 
                key={index}
                className="flex justify-between items-center bg-gradient-to-r from-orange-50 p-4 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  <span className={`flex-1 text-gray-700 ${item.isComplete ? 'line-through' : ""}`}>
                    {item.isComplete ? "✅" : ""}{item.text}
                  </span>
                  <div className='flex space-x-2'>
                    <button 
                      onClick={() => completedTodo(index)}
                      className='ml-4 border border-slate-400 bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-red-300 transition-colors duration-300'>
                      完了
                    </button>
                    <button 
                      onClick={() => deleteTodo(index)}
                      className='ml-4 border border-slate-400 bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-300 transition-colors duration-300'>
                      削除
                    </button>
                  </div>
                </li>
              ))}
          </ul>
        </div>

      </div>
    </div>
  </div>
  )
}

export default SimpleTodo
