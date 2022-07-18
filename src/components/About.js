import React, { useEffect } from 'react'
import { useContext } from 'react';
import NoteContext from '../context/notes/NoteContext';
const About = () => {
  const a = useContext(NoteContext);
  
  return (
    <div>
      This is about 
    </div>
  )
}

export default About
