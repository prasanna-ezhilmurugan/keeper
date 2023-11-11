import React from "react";

function Note(props) {
  return (
    <div className={"note " + toString(props.id)}>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button
        onClick={() => {
          return props.onDel(props.id);
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default Note;
