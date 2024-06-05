"use client"
import { NextPage } from 'next'
import { ChangeEvent, useState } from 'react'

const comment: NextPage = () => {
  const [inputText, setInputText] = useState("");
  const [commentList, setCommentList] = useState<string[]>([]);

  const handleInputText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(e.target.value);
  }

  const handleSubmit = () => {
    //空文字やスペースで送信出来ないようする必要がある
    if(!inputText.trim()) return //trimは空白やスペースを省く、入力された文字がなければreturn
    setCommentList((prev)=>[...prev, inputText])//...prevは上書きせずに更新できる
    setInputText("");//inputのテキストを削除する　双方向バインディングに注意
  }

  return (
    <div className='max-w-4xl mx-auto mt-8'>
      <div className='flex justify-center'>
        <div className='flex flex-col items-center'>
          <textarea
            value={inputText}
            onChange={handleInputText}
            className='resize-none w-72 border border-slate-500 rounded-lg text-center p-5'
            placeholder='コメントを入力してください'/>
          <div className='mt-8 mb-8'>
            <button
              onClick={handleSubmit}
              className='border border-slate-400 bg-green-400 px-3 py-2 rounded-lg'>
                コメントする
            </button>
          </div>
          <div className='w-full max-w-md'>
            <ul className='space-y-4'>
              {/* TODO comment */}
              {commentList.map((comment, index) => (
                <li key={index}  className='bg-white p-4 border border-slate-300 rounded-lg shadow-md'>
                  <p>{comment}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default comment
//デフォルト名をcommentにしただけなのでimport先で名前を変えて読み込める
//基本的に読み込む時は名前を変えない
