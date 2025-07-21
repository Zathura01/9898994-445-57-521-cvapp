const isValidString = (str) => typeof str === 'string' && str.trim().length >= 3;

const trimArray = (arr, key = null) => {
  if (!Array.isArray(arr)) return [];
  return arr.filter(item => {
    if (typeof item === 'string') return isValidString(item);
    if (key && typeof item[key] === 'string') return isValidString(item[key]);
    return true;
  });
};

const preprocessCV = (cvData) => {
  cvData.education = trimArray(cvData.education, 'degree');
  cvData.work = trimArray(cvData.work, 'jobTitle');
  cvData.skill = trimArray(cvData.skill, 'skill');
  cvData.project = trimArray(cvData.project, 'title');
  cvData.award = trimArray(cvData.award, 'title');
  cvData.social = trimArray(cvData.social, 'name');
  cvData.interest = trimArray(cvData.interest);
  return cvData;
};

module.exports = preprocessCV;
