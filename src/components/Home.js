import React, { useContext } from "react";
import NoteContext from "../context/notes/NoteContext";
import AddNote from "./AddNote";
import Notes from "./Notes";

const Home = () => {
    
  return (
        <div className="container my-3">
        
        <Notes/>
        </div>
      
  );
};

export default Home;
