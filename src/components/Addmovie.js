import React, { useState } from "react";
import Modal from "react-modal";

export default function Addmovie(props) {
  const [modalIsopen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const [newmovie, setNewmovie] = useState({
    title: "",
    img: "",
    rating: "",
  });
  const handleAdd = (e) =>
    setNewmovie({
      newmovie: { [e.target.name]: e.target.value },
    });

  const handelAddMovie = (e) => {
    e.preventDefault();

    if (Object.values(setNewmovie).indexOf("") === -1) {
      props.addMovie(newmovie);

      setModalIsOpen(false);
      setNewmovie({
        title: "",
        image: "",
        rating: "",
      });
    } else alert("Enter a valid info");
  };

  return (
    <div className="addmodal">
      <button className="Add-btn" onClick={openModal}>
        Add Movie
      </button>
      <Modal
        className="add-modal"
        isOpen={modalIsopen}
        onRequestClose={closeModal}
      >
        <h2>Add A Movie</h2>
        <form onSubmit={handelAddMovie}>
          <label>Movie Name</label>
          <input onChange={handleAdd} type="text" name="title" />
          <label>Movie Rate</label>
          <input
            onChange={handleAdd}
            type="number"
            max="5"
            name="rating"
          />
          <label>Movie Image</label>
          <input onChange={handleAdd} type="url" name="img" />

          <div>
            <button>Add Movie</button>
            <button onClick={closeModal}>Cancel</button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
