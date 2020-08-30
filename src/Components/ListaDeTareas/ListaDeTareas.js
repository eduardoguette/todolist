import React from "react";
import { DivListaDeTareas } from "./styles";
import Moment from "react-moment";

function ListaDeTareas({ handleDeleteNote, task }) {
  /*   var date = new Date();
  var anio = date.getFullYear() */
  
  const taskDone = (e) => {
    if (e.target.style.cssText.includes("red")) {
      e.target.style.textDecoration = "none";
    } else {
      e.target.style.textDecoration = "line-through";
      e.target.style.textDecorationColor = "red";
    }
  };

  return (
    <DivListaDeTareas >
      <div className="container-task" >
        <span onClick={taskDone} className="task" >
          {task}   
        </span>
        <span onClick={handleDeleteNote} className="task-delete">
          x
        </span>
      </div>
    </DivListaDeTareas>
  );
}

export default ListaDeTareas;
