const express = require('express');
const router = express.Router();
const CV = require('../models/NewCvSchema');
const SaveNewCv = require('../services/SaveNewCV');
const UpdateNewCV = require('../services/UpdateNewCV');


router.post('/newcv', async (req, res) => {
    try {
        const {cvId} = req.body;
  
     const existingNewCV = await CV.findOne({cvId})

     if(existingNewCV){
        console.log('updated existing cv ', existingNewCV)
        const updatedCV = await UpdateNewCV(req.body, existingNewCV)
        res.status(201).json({message:"Existing CV updated successfully", date: updatedCV, flag: true})

     }else{
     const savedCV = await SaveNewCv(req.body)
        console.log('new cv saved')
        res.status(201).json({ message: "CV saved successfully", data: savedCV, flag: true });

     }
    } catch (err) {
        console.error('Error saving CV:', err);
        res.status(500).json({ message: 'Failed to save CV', error: err.message, flag: false });
    }
});

module.exports = router;
