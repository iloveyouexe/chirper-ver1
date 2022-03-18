import React, { useState, useRef } from "react";
import Chirps from "./Chirps";
import "./styles.css";

// the logic of this app doesn't make sense becuase I wanted to experiment with different things, this is all for practice. When you type, "whats on your mind" it'll assign that text to a random user name.

const App = () => {
  const [chirps, setChirps] = useState([
    { id: 1, msg: "Hello world!" },
    { id: 2, msg: "Today my cat commited espionage..." },
    { id: 3, msg: "Rainy days are better than sunny days." },
  ]);

  const chirpRef = useRef();

  function getID() {
    return chirps.length + 1;
  }

  function handleAddChirp(e) {
    const message = chirpRef.current.value;
    console.log(message);
    setChirps((prevChirps) => {
      return [...prevChirps, { id: getID(), msg: message }];
    });
    chirpRef.current.value = "";
    console.log(chirps);
  }

  return (
    <div className="container mt-5">
      <h1 className="text-primary text-center">Welcome to Chirper!</h1>
      <div className="row g-3">
        <div className="col-12">
          <input
            ref={chirpRef}
            type="text"
            className="form-control"
            id="inputfield"
            placeholder="What's on your mind?"
          ></input>
        </div>
        <div className="col-12">
          <button onClick={handleAddChirp} className="mt-2 mb-2 btn btn-dark">
            Send Message
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <Chirps chirps={chirps} />
        </div>
      </div>
    </div>
  );
};

export default App;
