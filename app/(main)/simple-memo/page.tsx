"use client"

import { NextPage } from "next"
import { useSimpleMemoText } from "./customHook";

const simpleMemo: NextPage = () => {

  const {
    inputText,
    memo,
    handleInputText,
    handleMemo,
    deleteMemo
  } = useSimpleMemoText();

  return (
    <div className='max-w-4xl mx-auto mt-8'>
      <div className='flex justify-center'>
        <div className='flex flex-col items-center p-5 bg-white shadow-xl rounded-lg border-slate-500'>
          <textarea
            onChange={handleInputText}
            value={inputText}
            className='resize-none w-72 border border-slate-500 rounded-lg text-center p-5'
            placeholder='メモを入力してください'
          />

          <div className='mt-8 mb-8'>
            <button
              onClick={handleMemo}
              className='border border-slate-400 bg-green-400 px-3 py-2 rounded-lg'>
              送信
            </button>
          </div>

          <div className='w-full max-w-md mt-6'>
            <ul className='space-y-4'>
              {/* MEMO */}
              {memo.map((item, index) => (
                <li 
                className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-md"
                key={index}>
                  <span className="flex-1 text-gray-700">{item}</span>
                  <button 
                    onClick={()=>deleteMemo(index)}
                    className='ml-4 border border-slate-400 bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-300 transition-colors duration-300'>
                    削除
                  </button>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </div>
  )
}

export default simpleMemo
