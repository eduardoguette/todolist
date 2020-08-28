import React, { useEffect, useState } from "react";
import "./styles.css";

const Home = () => {
  const [value, setValue] = useState("");
  const [isLocked, setIsLocked] = useState(false);
  const [note, setNote] = useState({
    note: "",
  });
  const [tmp, setTmp] = useState([]);

  const handleAddNotes = (e) => {
    setNote({
      ...note,
      [e.target.name]: e.target.value,
    });
    setIsLocked(false);
    if (isLocked) {
      e.target.value = "";
    }
  };

  const handleSubmitAddNotes = (e) => {
    e.preventDefault();
    setTmp([...tmp, note.note]);
    setIsLocked(true);
  };
  const handleDeleteNote = (e) => {
    setValue(e.target.textContent);
  };

  useEffect(() => {
    if (value.length > 0) {
      setTmp(tmp.filter((elem) => elem !== value));
    }
  }, [isLocked, value]);

  return (
    <div className="form">
      <form action="#" onSubmit={handleSubmitAddNotes} className="wrapper">
        <div>
          <input onChange={handleAddNotes} className="input" type="text" placeholder="Pendientes..." name="note" />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>

      {tmp.length > 0
        ? tmp.map((elem, i) => (
            <div onClick={handleDeleteNote} className="container-task" key={i}>
              <span className="task">{elem}</span>
              <span className="task-delete">x</span>
            </div>
          ))
        : void 0}
    </div>
  );
};
export default Home;
