import React from "react";

const Suggestion = (props) => {
  return (
    <div style = {{fontSize: ".80em"}}>
      <p>{props.name}</p>
      <p>{props.price}</p>
    </div>
  );
}

export default Suggestion;