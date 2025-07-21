const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

const TemplateOne = async (data) => {
  const doc = new PDFDocument({ size: 'A4' });

  const outputPath = path.join(__dirname, '..', 'output', `cv_${Date.now()}.pdf`);
  const stream = fs.createWriteStream(outputPath);
  doc.pipe(stream); 

  const { personal } = data;

  const fullName = [
    personal.firstName?.trim(),
    personal.middleName?.trim(),
    personal.lastName?.trim()
  ].filter(Boolean).join(' ');

  const contacts = [
    personal.contact?.toString().trim(),
    personal.email?.trim(),
    personal.location?.trim(),
    personal.age?.toString().trim()
  ].filter(Boolean).join(' | ');

  doc.moveDown();
  doc.text(`${fullName}`, { width: 410, align: 'justify' });
  doc.moveDown();
  doc.text(`${contacts}`, { width: 410, align: 'justify' });
  doc.rect(doc.x, 0, 410, doc.y).stroke();




  
  doc.end(); 

  return outputPath;
};

module.exports = TemplateOne;
