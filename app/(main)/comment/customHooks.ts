import { ChangeEvent, useState } from 'react'

type UseComment = () => {
  inputText: string;
  commentList: string[];//配列 よく間違える
  handleInputText: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  handleSubmit: () => void;
}

export const UseCommentText: UseComment = () => {
  const [inputText, setInputText] = useState("");
  const [commentList, setCommentList] = useState<string[]>([]);

  const handleInputText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(e.target.value);
  }

  const handleSubmit = () => {
    if(!inputText.trim()) return
    setCommentList((prev)=>[...prev, inputText])
    setInputText("");
  }

  return {
    inputText,
    commentList,
    handleInputText,
    handleSubmit,
  }
}