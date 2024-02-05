import { useState } from "react";

const useReplaceWords = () => {
  const [word, setWord] = useState<string>("");

  const handleReplace = (array: string[]) => {
    setWord(word.includes(array[0]) ? array[1] : array[0]);
  };

  return { word, setWord, handleReplace };
};

export default useReplaceWords;
