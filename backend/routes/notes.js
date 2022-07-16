const express = require("express");
const router = express.Router();

const fetchusers = require("../middleware/fetchuser");
const { body, validationResult } = require("express-validator");

const Note = require("../models/Note");

//will give the data of the logged in user
//ROUTE 1: Get All the notes using: GET "api/notes/fetchallnotes". Login required
router.get("/fetchallnotes", fetchusers, async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error");
  }
});

//ROUTE 2: Add a new Note using: POST "/api/notes/addnote". Login required
router.post(
  "/addnote",
  fetchusers,
  [
    body("title", "Enter a valid title").isLength({ min: 3 }),
    body("description", "Description must be atleast 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    try {
      const { title, description, tag } = req.body;
      //if there are errors, return Bad request and the errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const note = new Note({
        title,
        description,
        tag,
        user: req.user.id,
      });
      const savedNote = await note.save();
      res.json(savedNote);
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);
//ROUTE 3: Update an existing Note using: PUT "/api/notes/updatenote". Login required

router.put(
    "/updatenote/:id",
    fetchusers,
    async (req, res) => {
      try {
        const { title, description, tag } = req.body;
        const newNote = {};
        if(title){
            newNote.title = title;
        }
        if(description){
            newNote.description = description;
        }
        if(tag){
            newNote.tag = tag;
        }
        //to make sure that the user can only access his own notes
        let note = await Note.findById(req.params.id);
        if(!note){
            return res.status(404).send('Not Found');
        }
        if(note.user.toString() !== req.user.id){
            //login user is trying to access some other users notes
            return res.status(401).send('Not Allowed');
        }
        note  = await Note.findByIdAndUpdate(req.params.id,{$set:newNote},{new:true})
        //Find the note to be updated and update it
        // const note = Note.findByIdAndUpdate()
        res.json({note});
      } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error");
      }
    }
  );
//ROUTE 3: DELETE an existing Note using: DELETE "/api/notes/deletenote". Login required
router.delete(
    "/deletenote/:id",
    fetchusers,
    async (req, res) => {
      try {
        
        //to make sure that the user can only access his own notes
        //Fid the note to delete and delete it
        let note = await Note.findById(req.params.id);
        if(!note){
            return res.status(404).send('Not Found');
        }
        //allow deletion only if user owns it
        if(note.user.toString() !== req.user.id){
            //login user is trying to access some other users notes
            return res.status(401).send('Not Allowed');
        }
        note  = await Note.findByIdAndDelete(req.params.id)
        //Find the note to be updated and update it
        // const note = Note.findByIdAndUpdate()
        res.json({'Success':'Note has been deleted',note:note});
      } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error");
      }
    }
  );
module.exports = router;
