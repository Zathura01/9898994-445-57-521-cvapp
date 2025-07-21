const express = require('express');
const NewCvSchema = require('../models/NewCvSchema');
const router = express.Router()


router.get('/oldcv', async(req, res)=>{

    const fetchedData = await NewCvSchema.find()
    res.status(201).json({message:"Fetching", flag: true, data: fetchedData})

})

module.exports = router;