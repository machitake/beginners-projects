import { useState } from "react";

type UseRandomColor = () => {
  color: string;
  handleColorChange: () => void;
}

const colors = ["lightblue", "lightgreen", " pink", "indigo", "green", "red", "slate", "gray", "orange", "yellow", "purple"];

export const useRandomColorText: UseRandomColor = () => {
  const [color, setColor] = useState('gray');
  const handleColorChange = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setColor(randomColor);
  }

  return {
    color,
    handleColorChange,
  }
}