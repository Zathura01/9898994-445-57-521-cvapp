const mongoose = require('mongoose');





const PersonalSchema = new mongoose.Schema({
  firstName: String,
  middleName: String,
  lastName: String,
  age: Number,
  nationality: String,
  contact: Number,
  email: String,
  location: String
});
  
const EducationSchema = new mongoose.Schema({
  degree: String,
  course: String,
  university: String,
  institute: String,
  start: Date,
  end: Date,
  grade: String,
  location: String,
  misc: String
});
 
const WorkSchema = new mongoose.Schema({
  jobTitle: String,
  companyName: String,
  location: String,
  start: Date,
  end: Date,
  misc: String,
});

const SkillSchema = new mongoose.Schema({
  skill: String,
  misc: String,
});

const ProjectSchema = new mongoose.Schema({
  title: String,
  role: String,
  tech: [String],
  duration: String,
  features: String,
  url: String,
  misc: String,
});
 
const AwardSchema = new mongoose.Schema({
  title: String,
  issuer: String,
  date: Date,
  credential: String,
  misc: String
});

const SocialSchema = new mongoose.Schema({
  name: String,
  link: String,
});

const CVSchema = new mongoose.Schema({
  cvId: { type: String, required: true, unique: true },
  cvName: String,
  personal: PersonalSchema,
  education: [EducationSchema],
  work: [WorkSchema],
  skill: [SkillSchema],
  project: [ProjectSchema],
  award: [AwardSchema],
  interest: [String],
  social: [SocialSchema],
  summary: String,
});

 
module.exports = mongoose.model('NewCV', CVSchema);


/**newAwardItem
 *    title:'',
   issuer:'',
   date: null,
   credential: '',
   misc: ''
 * 




 
 

 

 

 















 * 
 */