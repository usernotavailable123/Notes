import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) =>{
    const notesInitial = [
        {
          "_id": "62d27f0049168a5f713b9c58",
          "user": "62cee17f476fbb9a56a53a48",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "personal",
          "timestamp": "2022-07-16T09:04:00.181Z",
          "__v": 0
        },
        {
          "_id": "62d27f0049168a5f713b9c55",
          "user": "62cee17f476fbb9a56a53a48",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "personal",
          "timestamp": "2022-07-16T09:04:00.181Z",
          "__v": 0
        },
        {
          "_id": "62d27f0049168a5f713b9c50",
          "user": "62cee17f476fbb9a56a53a48",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "personal",
          "timestamp": "2022-07-16T09:04:00.181Z",
          "__v": 0
        },
        {
          "_id": "62d27f0049168a5f713b9c53",
          "user": "62cee17f476fbb9a56a53a48",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "personal",
          "timestamp": "2022-07-16T09:04:00.181Z",
          "__v": 0
        },
        {
          "_id": "62d27f0049168a5f713b9c54",
          "user": "62cee17f476fbb9a56a53a48",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "personal",
          "timestamp": "2022-07-16T09:04:00.181Z",
          "__v": 0
        }
      ]
      const[notes,setNotes] = useState(notesInitial);
      //Add a Note
      const addNote = (title,description,tag) =>{
            //api call here to get all other data:TODO
        let note = {
          "_id": "62d27f0049168a5f713b9c54",
          "user": "62cee17f476fbb9a56a53a48",
          "title": title,
          "description": description,
          "tag": tag,
          "timestamp": "2022-07-16T09:04:00.181Z",
          "__v": 0
          };
            setNotes(notes.concat(note))
        }
      //Delete a Note
      const deleteNote = (id) =>{
        //TODO: API Call
        console.log("Delete Note id",id);
        const newNotes = notes.filter((note) =>{return note._id!==id});
        setNotes(newNotes);
      }
      //Edit a Note
      const editNote = () =>{
        
      }

    return(
        <NoteContext.Provider value = {{notes,setNotes,addNote,deleteNote,editNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;