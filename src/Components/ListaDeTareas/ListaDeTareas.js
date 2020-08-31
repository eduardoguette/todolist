import React from "react";
import { DivListaDeTareas } from "./styles";

function ListaDeTareas({ handleDeleteNote, note, date, setIsDone, isDone, lista, id }) {
  /*   var date = new Date();
  var anio = date.getFullYear() */

  const taskDone = () => {
    if (lista[id].statusDone) {
      setIsDone(false);
      lista[id].statusDone = isDone;
      lista[id].statusDone = false
    } else {
      setIsDone(true);
      lista[id].statusDone = isDone;
      lista[id].statusDone = true
    }
    
    
  };

  return (
    <DivListaDeTareas isDone={lista[id].statusDone}>
      <div className="container-task">
        <span onClick={taskDone} className="task">
          {note}
        </span>
        <span onClick={handleDeleteNote} className="task-delete">
          x
        </span>
        <small>{date}</small>
      </div>
    </DivListaDeTareas>
  );
}

export default ListaDeTareas;
