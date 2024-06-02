import { useState } from "react";

type useTextToggle = () => {
  isHidden: boolean;
  handleDisplay: () => void;
  handleDisplayOff: () => void;
}

export const textToggleText:useTextToggle = () => {
  const [isHidden, setIsHidden] = useState(false);

  const handleDisplay = () => {
    setIsHidden(false)
  }

  const handleDisplayOff = () => {
    setIsHidden(true)
  }

  return {
    isHidden,
    handleDisplay,
    handleDisplayOff,
  }
}
