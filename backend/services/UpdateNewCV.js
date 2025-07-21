const CV = require('../models/NewCvSchema');
const preprocessCV = require('../services/TrimValidation')

const UpdateNewCV = async (cvData) => {
    
    const cleanedData = preprocessCV(cvData);
    
    
    
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

    const updatedCV = await CV.findOneAndUpdate(
        { cvId },
        {
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
        },
        { new: true } // Return the updated document
    );

    return updatedCV;
};

module.exports = UpdateNewCV;
