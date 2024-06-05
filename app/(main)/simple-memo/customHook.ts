import { ChangeEvent, useState } from "react";

type useSimpleMemo = () => {
  inputText: string;
  memo: string[];
  handleInputText: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  handleMemo: () => void;
  deleteMemo: (index: number) => void;
};

export const useSimpleMemoText: useSimpleMemo = () => {
  const[inputText, setInputText] = useState("");
  const[memo, setMemo] = useState<string[]>([]);
  const handleInputText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(e.target.value);
  }

  const handleMemo = () => {
    if(!inputText.trim()) return;
    setMemo((prev) => [...prev, inputText]);
    setInputText('');
  }

  const deleteMemo = (index: number) => {
    setMemo((prev)=>prev.filter((_, i) => index !== i));//インデックス番号と一致するもの以外で配列を再定義する
  }

  return {
    inputText,
    memo,
    handleInputText,
    handleMemo,
    deleteMemo
  }
}