import React, { useState } from "react";

import { useCustomHook } from "../hooks/customHook";

const Main = () => {
  const { nameArr, findName } = useCustomHook({
    initialArr: ["Huyen", "Hoa", "Hung", "Long"]
  });
  const [name, setName] = useState("");
  const [position, setPosition] = useState(0);

  return (
    <div>
      <p>学生一覧: {nameArr.toString()}</p>
      <p>検索名前:</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setPosition(findName(name))
        }}
      >
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="submit" value="確定" />
      </form>
      <p>検索名前: {name}</p>
      <p>位置: {position}</p>
    </div>
  );
}

export default Main;