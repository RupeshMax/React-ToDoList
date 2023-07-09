import React, { useState } from "react";

function TodaList(props) {
  const [flag, setFlag] = useState(true);

  function handleClick() {
    if (flag) {
      setFlag(false);
    } else {
      setFlag(true);
    }
  }
  return (
    <li
      onClick={handleClick}
      style={{ textDecoration: flag ? "none" : "line-through" }}
    >
      {props.text}
    </li>
  );
}

export default TodaList;
