const profileData = {
  projectTitle: 'Student Profile Activity',
  welcomeMessage: 'Welcome — glad you’re here!',
  motto: 'Study hard, dream big, and never give up.',
  fullName: 'Renchel N. Silvosa',
  courseYear: 'BSIT - First Year',
  age: '20',
  address: 'P-4 Caatihan, Boston, Davao Oriental',
  shortBio: 'Dream big. Work hard. I am a first year BSIT student with a strong desire to learn technology, solve problems, and build thoughtful solutions.',
  careerGoals: 'To become a skilled IT professional and use technology to solve real-world problems.',
  education: [
    { label: 'Elementary School', value: 'Caatihan Elementary School' },
    { label: 'High School', value: 'Caatihan National High School' },
    { label: 'Senior High School', value: 'Caatihan National High School' },
    { label: 'College (Current)', value: 'Currently pursuing a Bachelor of Science in Information Technology (BSIT)' }
  ],
  skills: {
    technical: 'Problem solving, research, adaptability',
    programmingLanguages: 'HTML, CSS, JavaScript (learning)',
    softwareApplications: 'Word processors, presentation tools, basic productivity software',
    softSkills: 'Teamwork, communication, perseverance'
  },
  featuredProject: {
    title: 'Personal Profile Portfolio',
    description: 'A responsive student profile activity page designed to present academic background, skills, goals, achievements, and contact information.',
    technologies: 'HTML, CSS, JavaScript',
    status: 'In progress',
    link: '#'
  },
  achievements: {
    trainings: 'Work Immersion; Leadership training',
    seminars: 'Not specified',
    certificates: 'Not specified',
    awards: 'Not specified'
  },
  gallery: {
    personalPhotos: '0',
    schoolActivities: '0',
    organizationalActivities: '0',
    communityInvolvement: '0'
  },
  contact: {
    email: 'Not provided',
    mobileNumber: '09813577806',
    facebook: 'Not provided',
    linkedin: 'Optional'
  }
};

const hexToRgb = hex => {
  const clean = hex.replace('#', '');
  const bigint = parseInt(clean, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `${r}, ${g}, ${b}`;
};

const seedStyles = () => {
  const accents = [
    ['#ff7a18', '#ffb56d', '#1a1a1a'],
    ['#3d7aed', '#8db6ff', '#101010'],
    ['#18c5ff', '#a8f0ff', '#111111'],
    ['#ff3d6d', '#ff9ab4', '#121212'],
    ['#7cff5a', '#c9ffb3', '#1f1f1f'],
    ['#ffcf33', '#ffe49a', '#141414'],
    ['#c53dff', '#e7b4ff', '#111111'],
    ['#33ffd1', '#a8fff4', '#151515'],
    ['#ff6633', '#ffb497', '#1b1b1b'],
    ['#3375ff', '#99b8ff', '#121212'],
    ['#44ff85', '#aff6c5', '#181818'],
    ['#ff33d7', '#ff9aec', '#100f10'],
    ['#ff9b33', '#ffd69a', '#161616'],
    ['#4a33ff', '#aaa8ff', '#121118'],
    ['#33ffd0', '#a2fff2', '#141417'],
    ['#ff4f4f', '#ffb2b2', '#121212'],
    ['#59ffb2', '#b4ffd6', '#181818'],
    ['#ffde33', '#fff0a5', '#101010'],
    ['#6e33ff', '#c4a8ff', '#111113'],
    ['#33b8ff', '#97dcff', '#111219']
  ];
  const choice = accents[Math.floor(Math.random() * accents.length)];
  document.documentElement.style.setProperty('--accent', choice[0]);
  document.documentElement.style.setProperty('--accent-soft', choice[1]);
  document.documentElement.style.setProperty('--accent-rgb', hexToRgb(choice[0]));
  document.documentElement.style.setProperty('--background', `linear-gradient(135deg, ${choice[2]} 0%, #202020 55%, #101010 100%)`);
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
  document.getElementById('projectLink').href = profileData.featuredProject.link;
  insertText('trainings', profileData.achievements.trainings);
  insertText('seminars', profileData.achievements.seminars);
  insertText('certificates', profileData.achievements.certificates);
  insertText('awards', profileData.achievements.awards);
  insertText('personalPhotos', profileData.gallery.personalPhotos);
  insertText('schoolActivities', profileData.gallery.schoolActivities);
  insertText('orgActivities', profileData.gallery.organizationalActivities);
  insertText('communityInvolvement', profileData.gallery.communityInvolvement);
  insertText('email', profileData.contact.email);
  insertText('mobileNumber', profileData.contact.mobileNumber);
  insertText('facebook', profileData.contact.facebook);
  insertText('linkedin', profileData.contact.linkedin);
};

window.addEventListener('DOMContentLoaded', () => {
  seedStyles();
  buildEducation();
  setupProfile();
});
