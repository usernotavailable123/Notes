import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) =>{
    const host = "http://localhost:5000"
    const notesInitial = [];
    //Get all notes
    const getNotes = async () => {
      //TODO :API Call
      //API Call
      const response = await fetch(`${host}/api/notes/fetchallnotes`, {
        method: 'GET', 
        headers: {
          'Content-Type': 'application/json',
          'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJjZWUxN2Y0NzZmYmI5YTU2YTUzYTQ4In0sImlhdCI6MTY1Nzk1NDg1MH0.9hFNeWB4KHxZZcJSSlxtK8FofNCGBotqOc8TgTl72QE'
        }
      });
      const json = await response.json();
      console.log(json);
      setNotes(json);
    } 

    const[notes,setNotes] = useState(notesInitial);
      //Add a Note
      const addNote = async (title,description,tag) =>{

        const response = await fetch(`${host}/api/notes/addnote`, {
          method: 'POST', 
          headers: {
            'Content-Type': 'application/json',
            'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJjZWUxN2Y0NzZmYmI5YTU2YTUzYTQ4In0sImlhdCI6MTY1Nzk1NDg1MH0.9hFNeWB4KHxZZcJSSlxtK8FofNCGBotqOc8TgTl72QE'
          },
          body: JSON.stringify({title,description,tag}) 
        });
        // const json= response.json(); 
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
      const editNote = async (id,title,description,tag) =>{
        //API Call

        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
          method: 'POST', 
          headers: {
            'Content-Type': 'application/json',
            'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJjZWUxN2Y0NzZmYmI5YTU2YTUzYTQ4In0sImlhdCI6MTY1Nzk1NDg1MH0.9hFNeWB4KHxZZcJSSlxtK8FofNCGBotqOc8TgTl72QE'
          },
          body: JSON.stringify({title,description,tag}) 
        });
        const json= response.json(); 
        //logic to edit in client
        for(let index=0;index<notes.length;index++){
          const element = notes[index];
          if(element._id === id){
            element.title = title;
            element.description = description;
            element.tag = tag;
          }
        }
      }

    return(
        <NoteContext.Provider value = {{notes,setNotes,addNote,deleteNote,editNote,getNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;