import { useState } from "react";

export default function Shouter() {

    const [text, setText] = useState("");

    function updateShouter(event) {
        setText(event.target.value);
    }

  return (
    <>
      <input onChange={updateShouter} />
      <output>{text.toUpperCase()}</output>
    </>
  );
}
