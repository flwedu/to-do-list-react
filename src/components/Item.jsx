import React, { useState } from "react";

export default function Item(props) {
  const [done, setDone] = useState(false);

  function handleClick() {
    setDone(!done);
  }

  return (
    <li
      onClick={handleClick}
      style={{ textDecoration: done ? "line-through" : "none" }}
    >
      {props.text}
    </li>
  );
}
