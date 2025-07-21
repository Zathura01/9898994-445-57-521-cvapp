const CV = require('../models/NewCvSchema');
const preprocessCV = require('../services/TrimValidation')



const SaveNewCv = async (req) => {
    // Preprocess data first
    const cleanedData = preprocessCV(req);

    const {
        cvId,
        cvName,
        personal,
        education,
        work,
        project,
        skill,
        award,
        interest,
        social,
        summary
    } = cleanedData;

    const newCV = new CV({
        cvId,
        cvName,
        personal,
        education,
        work,
        project,
        skill,
        award,
        interest,
        social,
        summary
    });

    const savedCV = await newCV.save();
    return savedCV;
};

module.exports = SaveNewCv;
