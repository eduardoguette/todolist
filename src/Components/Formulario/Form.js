import React, { useEffect, useState, Fragment } from "react";
import { DivFormulario } from "./styles.js";
import ListaDeTareas from "../ListaDeTareas/ListaDeTareas";
import imagenRelax from "../../icons/relaxing.svg";
const Home = () => {
  const [value, setValue] = useState("");
  const [notes, setNotes] = useState("");
  const [isFilter, setIsFilter] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [nota, setNota] = useState({
    note: "",
    statusDone: isDone,
    date: "",
  });
  const [lista, setLista] = useState([]);
  const [note, setNote] = useState({
    note: "",
  });

  const date = new Date();
  const fecha = date.getDate() + "/" + parseInt(date.getMonth() + 1) + "/" + date.getFullYear();

  const handleAddNotes = (e) => {
    setNotes(e.target.value);
    setNote({
      ...note,
      [notes]: notes,
    });
    setNota({
      note: e.target.value,
      statusDone: isDone,
      date: fecha,
    });
  };

  const handleSubmitAddNotes = (e) => {
    e.preventDefault();
    setNotes("");
    setLista([...lista, nota]);
  };

  const handleDeleteNote = (e) => {
    setValue(e.target.previousSibling.textContent);
    setIsFilter(true);
  };

  useEffect(() => {
    if (isFilter) {
      setLista(lista.filter(({note}) => note !== value));
      setIsFilter(false);
    }

    setTimeout(() => {
      localStorage.setItem("tasks", JSON.stringify(lista));
    }, 100);
    
  }, [isFilter, lista, value, isDone]);

  window.addEventListener("DOMContentLoaded", () => {

    if (localStorage.getItem("tasks")) {
      setLista(JSON.parse(localStorage.getItem("tasks")));
    }
  });

  const Tasks = () => {
    if (lista.length >= 1) {
      return lista.map(({ note, statusDone, date }, i) => <ListaDeTareas handleDeleteNote={handleDeleteNote} date={date} note={note} key={i} id={i} setIsDone={setIsDone} isDone={isDone} lista={lista} />);
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
              <input onChange={handleAddNotes} className="input" type="text" value={notes} placeholder="Go to supermarket..." name="note" required />
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
