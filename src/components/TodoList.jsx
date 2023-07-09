import React, { useState } from "react";

function TodaList(props) {
  const [flag, setFlag] = useState(true);

  // function handleClick() {
  //   setFlag((prevFlag) => {
  //     return !prevFlag;
  //   });
  // }

  return (
    <li
      onClick={() => {
        props.onChecked(props.id);
      }}
      style={{ textDecoration: flag ? "none" : "line-through" }}
    >
      {props.text}
    </li>
  );
}

export default TodaList;
