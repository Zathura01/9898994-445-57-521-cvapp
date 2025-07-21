const express = require('express')
const app = express();
const PORT = 3500;
const cors = require('cors')
const connectToMongoDB = require("./connectionToMongo");
const bodyParser = require('body-parser')
const TemplateOne = require("./cvTemplates/TemplateOne");



app.use(cors())
 
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
connectToMongoDB()

app.use('/mean/cvapp/send', require('../backend/routes/NewCv'));
app.use('/mean/cvapp/generate', require('../backend/routes/GenerateCv'))
app.use('/mean/cvapp/fetch', require('../backend/routes/FetchCv'))
app.use('/mean/cvapp/delete', require('../backend/routes/DeleteCv'))


// const pathTosomething =  TemplateOne(dataHell);
// console.log(pathTosomething)






app.listen(PORT, () => console.log("Server running on port " + PORT));
