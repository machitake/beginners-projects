import { ChangeEvent, useState } from "react";

type UseRealtimeText = () => {
  text: string;
  handleInput : (e: ChangeEvent<HTMLInputElement>) => void;
}

export const UseRealText: UseRealtimeText = () => {
  const [text, setText] = useState("ここのテキストが切り替わります");
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return {
    text,
    handleInput,
  }
}