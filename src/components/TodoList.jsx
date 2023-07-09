import React, { useState } from "react";

function TodaList(props) {
  const [flag, setFlag] = useState(true);

  function handleClick() {
    setFlag(false);
    setTimeout(() => {
      props.onChecked(props.id);
      setFlag(true);
    }, 2000);
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
