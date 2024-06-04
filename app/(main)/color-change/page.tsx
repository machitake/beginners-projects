"use client"
import { NextPage } from 'next'
import { useRandomColorText } from './customHook'

const RandomColor: NextPage = () => {//NextPageはNext.jsの宣言

  const {
    color,
    handleColorChange,
  } = useRandomColorText();

  return (
    <div className='h-screen pt-8' style={{ backgroundColor: color}}>
      <div className="flex justify-center">
        <button 
        onClick={handleColorChange}
        className='border-4 border-slate-600 bg-slate-300 hover:bg-slate-200 px-4 py-3 rounded-md'>
          Color Change
        </button>
      </div>
    </div>
  )
}

export default RandomColor