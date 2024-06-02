"use client"
import { useState } from "react";

const textToggle = () => {
  const [isHidden, setIsHidden] = useState(false);

  // const handleChange = () => {
  //   setIsHidden(!isHidden);
  // }

  const handleDisplay = () => {
    setIsHidden(false)
  }

  const handleDisplayOff = () => {
    setIsHidden(true)
  }

  return (
    <div className="mx-auto mt-10 max-w-4xl">
      <div className="flex flex-col gap-5 justify-center items-center">
        <h2 className={`text-4xl mb-4 ${isHidden ? 'invisible' : 'visible'}`}>
          ここのテキストが切り替わります
        </h2>
        <button 
          onClick={handleDisplay}
          className="border-4 border-gray-500 bg-cyan-300 px-4 py-3 rounded-lg">
          表示
        </button>
        <button
          onClick={handleDisplayOff}
          className="border-4 border-gray-500 bg-red-300 px-4 py-3 rounded-lg">
          非表示
        </button>
        {/* <button 
        onClick={handleChange}
        className="border-4 border-gray-500 bg-green-300 px-4 py-3 rounded-lg">
          表示/非表示
        </button> */}
      </div>
    </div>
  )
}

export default textToggle