import React, { useContext, useState } from 'react'
import NoteContext from '../context/notes/NoteContext';

const AddNote = (props) => {
    const context = useContext(NoteContext);
    const {addNote} = context;
    const [note,setNote] = useState({title:" ",description:" ",tag:" "})
    const handleClick = (e) =>{
        e.preventDefault();
        addNote(note.title,note.description,note.tag);
        setNote({title:" ",description:" ",tag:" "});
        props.showAlert("Updated Successfully","success")

    }
    const onChange = (e) =>{
        setNote({...note,[e.target.name]:e.target.value})

    }
  return (
    <div>
      <h2>Add A Note</h2>
      <form className = "my-3">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name='title'
            aria-describedby="emailHelp"
            onChange={onChange}
            value={note.title}
            minLength={5}
            required
          />
          <div id="emailHelp" className="form-text">

          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            onChange={onChange}
            value={note.description}
            minLength={5}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Tag
          </label>
          <input
            type="text"
            className="form-control"
            id="tag"
            name="tag"
            onChange={onChange}
            value={note.tag}
          />
        </div>
        <button disabled={note.title.length<5 || note.description.length<5} type="submit" className="btn btn-primary" onClick={handleClick}>
          Submit
        </button>
      </form>
    </div>
  )
}

export default AddNote
