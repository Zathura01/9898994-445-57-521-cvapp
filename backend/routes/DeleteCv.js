const express = require('express')
const NewCvSchema = require('../models/NewCvSchema')
const router = express.Router()


router.delete('/oldcv/:id', async(req, res)=>{
    const { id } = req.params
    
    const deleteStatus = await NewCvSchema.deleteOne({ _id: id });

    res.status(201).json({message:"Deleted", flag:true, data: null})

})

module.exports = router;