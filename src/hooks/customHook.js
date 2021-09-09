import { useState } from "react";

const useCustomHook = ({ initialArr }) => {
  const [nameArr, setNameArr] = useState(initialArr);
  
  const findName = (name) => {
    return nameArr.indexOf(name) + 1 || NaN;
  };

  return { nameArr, findName };
};

export { useCustomHook };
