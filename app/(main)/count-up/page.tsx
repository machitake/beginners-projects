"use client";//フロントで動くように
import { NextPage } from "next"
import { CountUpPageText } from "./customHook";

const CountUpPage:NextPage = () => {
  const {
    count,
    countUpButton,
    countDownButton,
  } = CountUpPageText();

  return (
    <div className="mx-auto mt-10 max-w-4xl">
      <div className="flex flex-col gap-5 justify-center items-center">
        <h2 className="text-4xl mb-4">{count}</h2>
        <button 
          onClick={countUpButton}
          className="border-4 border-gray-500 bg-cyan-300 px-4 py-3 rounded-lg">
          カウントアップ
        </button>
        <button 
          onClick={countDownButton}
          className="border-4 border-gray-500 bg-red-300 px-4 py-3 rounded-lg">
          カウントダウン
        </button>
      </div>
    </div>
  )
}

export default CountUpPage