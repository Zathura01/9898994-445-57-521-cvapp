const express = require('express');
const NewCvSchema = require('../models/NewCvSchema');
const TemplateOne = require('../cvTemplates/TemplateOne');
const TemplateTwo = require('../cvTemplates/TemplateTwo');
const TemplateThree = require('../cvTemplates/TemplateThree');
const TemplateFour = require('../cvTemplates/TemplateFour');
const router = express.Router()



router.post('/newcv', async (req, res) => {

    const { cvid, sequence, applyFor, image, font, templateIndex } = req.body;

    const didWeFoundCVInDB = await NewCvSchema.findOne({ cvId: cvid })

    if (didWeFoundCVInDB) {
        let pdfBuffer;
        let pdfData = {
            applyingFor: applyFor || null,
            image: image || null,
            font
        }
        for (let i = 0; i < sequence.length; i++) {
            pdfData[sequence[i]] = didWeFoundCVInDB[sequence[i]]
        }
        /*         console.log('             we go agian          ----> ')
                console.log(pdfData, " this is pdfdata")
                console.log('             we go agian          ----> ')
                console.log(sequence, " from db", didWeFoundCVInDB) */
        switch (templateIndex) {
            case 0:
                //  pdfBuffer = await TemplateOne(pdfData)
                pdfBuffer = pdfData;
                break;
            case 1:
                pdfBuffer = await TemplateTwo(pdfData)
                break;
            case 2:
                pdfBuffer = await TemplateThree(pdfData)
                break;
            case 3:
                pdfBuffer = await TemplateFour(pdfData)
                break;
            default:
                break;
        }

        res.status(201).json({ message: "CV data sent", flag: true, data: pdfBuffer })

    } else {
        res.status(201).json({ message: "CV wasn't found in DB", flag: true, data: null })
    }


})

module.exports = router


/* {
  cvid: null,
  sequence: [],
  applyFor: '',
  image: null,
  font: '',
  templateIndex: 0
}; */