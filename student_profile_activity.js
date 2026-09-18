const profileData = {
  projectTitle: 'Student Profile Activity',
  welcomeMessage: 'System Init... Welcome User.',
  motto: 'Study hard, dream big, and never give up.',
  fullName: 'Renchel N. Silvosa',
  courseYear: 'BSIT - Second Year',
  age: '20',
  address: 'P-4 Caatihan, Boston, Davao Oriental',
  shortBio: 'Dream big. Work hard. I am a second year BSIT student with a strong desire to learn technology, solve problems, and build thoughtful solutions.',
  careerGoals: 'To become a skilled IT professional and use technology to solve real-world problems.',
  education: [
    { label: 'Elementary School', value: 'Caatihan Elementary School' },
    { label: 'High School', value: 'Caatihan National High School' },
    { label: 'Senior High School', value: 'Caatihan National High School' },
    { label: 'College (Current)', value: 'Currently pursuing a Bachelor of Science in Information Technology (BSIT)' }
  ],
  skills: {
    technical: 'Hardware specialist, video editing, basic programming, simple edits, Canva',
    programmingLanguages: 'Basic programming (learning)',
    softwareApplications: 'Canva, video editing tools, productivity software',
    softSkills: 'Teamwork, communication, perseverance'
  },
  featuredProject: {
    title: 'Personal Profile Portfolio',
    description: 'A responsive student profile activity page designed to present academic background, skills, goals, achievements, and contact information.',
    technologies: 'HTML, CSS, JavaScript',
    status: 'In progress',
    link: '#'
  },
  contact: {
    email: 'Not provided',
    mobileNumber: '09813577806',
    facebook: 'Not provided',
    linkedin: 'Optional'
  }
};

const insertText = (id, value) => {
  const element = document.getElementById(id);
  if (element) element.textContent = value;
};

const buildEducation = () => {
  const list = document.getElementById('educationList');
  if (!list) return;
  list.innerHTML = profileData.education
    .map(item => `<li><strong>${item.label}:</strong> ${item.value}</li>`)
    .join('');
};

const setupProfile = () => {
  insertText('projectTitle', profileData.projectTitle);
  insertText('welcomeMessage', profileData.welcomeMessage);
  insertText('motto', profileData.motto);
  insertText('courseYear', profileData.courseYear);
  insertText('age', `Age: ${profileData.age}`);
  insertText('location', profileData.address);
  insertText('shortBio', profileData.shortBio);
  insertText('fullName', profileData.fullName);
  insertText('detailCourseYear', profileData.courseYear);
  insertText('detailAge', profileData.age);
  insertText('address', profileData.address);
  insertText('careerGoals', profileData.careerGoals);
  insertText('technicalSkills', profileData.skills.technical);
  insertText('programmingLanguages', profileData.skills.programmingLanguages);
  insertText('softwareApps', profileData.skills.softwareApplications);
  insertText('softSkills', profileData.skills.softSkills);
  insertText('projectTitleDetail', profileData.featuredProject.title);
  insertText('projectDescription', profileData.featuredProject.description);
  insertText('projectTechnologies', profileData.featuredProject.technologies);
  insertText('projectStatus', profileData.featuredProject.status);

  const projLink = document.getElementById('projectLink');
  if(projLink) projLink.href = profileData.featuredProject.link;

  insertText('email', profileData.contact.email);
  insertText('mobileNumber', profileData.contact.mobileNumber);
  insertText('facebook', profileData.contact.facebook);
  insertText('linkedin', profileData.contact.linkedin);
};

window.addEventListener('DOMContentLoaded', () => {
  buildEducation();
  setupProfile();
});