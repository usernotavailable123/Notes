import React, { useContext, useEffect } from 'react'
import NoteContext from '../context/notes/NoteContext';
import AddNote from './AddNote';
import Noteitem from './Noteitem';

const Notes = () => {
    const context = useContext(NoteContext);
    const {notes,getNotes} = context;
    useEffect(() =>{
      getNotes()
    },[])
  return (
    <>
    <AddNote/>
    <div className="row my-3">
        <h2>Your Notes</h2>
            {notes.map((note) =>{
                return <Noteitem note={note} key={note._id}/>
            })}
        </div>
    </>
        
  )
}

export default Notes
