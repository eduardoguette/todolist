import React, { useEffect, useState, Fragment } from "react";
import { DivFormulario } from "./styles.js";
import ListaDeTareas from "../ListaDeTareas/ListaDeTareas";

const Home = () => {
  const [value, setValue] = useState("");
  const [notes, setNotes] = useState("");
  const [isLocked, setIsLocked] = useState(true);
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
    setIsLocked(true);
    setValue(e.target.previousSibling.textContent);
  };

  useEffect(() => {
    console.log(arraysNotes.length);
    if (arraysNotes.length >= 1) {
      localStorage.setItem("tasks", JSON.stringify(arraysNotes));
    }
    
    if (isLocked) {
      setarraysNotes(arraysNotes.filter((elem) => elem !== value));
      setIsLocked(false);
      
    }
  }, [arraysNotes, isLocked, value]);

  window.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("tasks")) {
      setarraysNotes(JSON.parse(localStorage.getItem("tasks")));
    }
  });

  const Tasks = () => {
    if (arraysNotes.length >= 1) {
      return arraysNotes.map((task, i) => <ListaDeTareas handleDeleteNote={handleDeleteNote} task={task} key={i} />);
    } else {
      return <h2>No tienes Pendientes</h2>;
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
