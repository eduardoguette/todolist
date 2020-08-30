import React, { useEffect, useState, Fragment } from "react";
import { DivFormulario } from "./styles.js";
import ListaDeTareas from "../ListaDeTareas/ListaDeTareas";
import imagenRelax from "../../icons/relaxing.svg";
import AOS from "aos"
const Home = () => {
  const [value, setValue] = useState("");
  const [notes, setNotes] = useState("");
  const [isFilter, setIsFilter] = useState(false);
  const [arraysNotes, setarraysNotes] = useState([]);
  const [note, setNote] = useState({
    note: "",
  });

  const handleAddNotes = (e) => {
    setNotes(e.target.value);
    setNote({
      ...note,
      [notes]: notes,
    });
  };

  const handleSubmitAddNotes = (e) => {
    e.preventDefault();
    setarraysNotes([...arraysNotes, notes]);

    setNotes("");
  };

  const handleDeleteNote = (e) => {
    setIsFilter(true);
    setValue(e.target.previousSibling.textContent);
  };

  useEffect(() => {
    if (isFilter) {
      setarraysNotes(arraysNotes.filter((elem) => elem !== value));
      setIsFilter(false);
    }
    
    setTimeout(() => {
      localStorage.setItem("tasks", JSON.stringify(arraysNotes));
      
    }, 200);
  }, [arraysNotes, isFilter, value]);

  window.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("tasks")) {
      setarraysNotes(JSON.parse(localStorage.getItem("tasks")));
    }
    
  });

  const Tasks = () => {
    if (arraysNotes.length >= 1) {
      return arraysNotes.map((task, i) => <ListaDeTareas handleDeleteNote={handleDeleteNote} task={task} key={i} />);
    } else {
      return (
        <div className="container-done">
          <img src={imagenRelax} height="200" alt={imagenRelax} />
          <h2> ¡Terminaste todo lo que tenias pendiente!</h2>
        </div>
      );
    }
  };

  return (
    <Fragment>
      <DivFormulario>
        <div className="form">
          <form action="#" onSubmit={handleSubmitAddNotes} className="wrapper">
            <div>
              <input onChange={handleAddNotes} className="input" type="text" value={notes} placeholder="Pendientes..." name="note" />
            </div>
            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
        {Tasks()}
      </DivFormulario>
    </Fragment>
  );
};
export default Home;
