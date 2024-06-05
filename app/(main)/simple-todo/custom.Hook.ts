import { RefObject, useRef, useState } from 'react';

type UseSimpleTodo = () => {
  todo: {
    text: string;
    isComplete: boolean;
  }[];
  textAreaRef: RefObject<HTMLTextAreaElement>;
  handelTodo: () => void;
  completedTodo: (index: number) => void;
  deleteTodo: (index: number) => void;
}

export const useSimpleTodoText: UseSimpleTodo = () => {
  const [todo, setTodo] = useState<{text: string; isComplete: boolean}[]>([]);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const handelTodo = () => {
    const textAreaValue = textAreaRef.current?.value;//オプショナル演算時(?)nullの場合もエラーが出ないようにする
    if(!textAreaValue || !textAreaValue.trim()) return;
    setTodo((prev) => [...prev, {text: textAreaValue, isComplete: false}]);
    textAreaRef.current.value = "";
  }

  const completedTodo = (index: number) => {
    setTodo((prev) => prev.map((item, i) => i === index ? {...item, isComplete: !item.isComplete} : item))
  }

  const deleteTodo = (index: number) => {
    setTodo((prev) => prev.filter((_, i) => i !== index ))
  }

  return {
    todo,
    textAreaRef,
    handelTodo,
    completedTodo,
    deleteTodo,
  }
}