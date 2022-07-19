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
    return(
        <NoteContext.Provider value = {{notes,setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;