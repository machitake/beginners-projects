"use client";
import { NextPage } from 'next'
import { UseRealText } from "./customHook";

const RealtimeText: NextPage = () => {

  const {
    text,
    handleInput,
  } = UseRealText();

  return (
    <div className="mx-auto mt-10 max-w-4xl">
      <div className="flex flex-col gap-5 justify-center items-center">
        <h2 className="text-4xl mb-4">
          {text}
        </h2>
        <div>
          <input
          onChange={handleInput}
          className='px-3 py-2 border border-slate-500 rounded-lg'
          type="text" />
        </div>
      </div>
    </div>
  )
}

export default RealtimeText