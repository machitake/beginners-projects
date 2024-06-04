"use client"
import { NextPage } from 'next'
import { useState } from 'react'

const RandomColor: NextPage = () => {//NextPageはNext.jsの宣言
  const [color, setColor] = useState('gray');
  const colors = ["lightblue", "lightgreen", " pink", "indigo", "green", "red", "slate", "gray", "orange", "yellow", "purple"];
  const handleColorChange = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setColor(randomColor);
  }

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