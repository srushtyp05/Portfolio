import AspiringMinds from '../src/assets/Aspiring Minds.jpg';
import MusicRecommendation from '../src/assets/Music Recommendation.jpg';
import Gse from '../src/assets/Gse.jpg';
import BlogApp from '../src/assets/BlogApp.jpg';

export const projects = [
  {
    _id: "1",
    title: "Medical ChatBot",
    typo: 'Full Stack',
    content:
      "Created a live medical chatbot using HTML, CSS, Bootstrap, Tailwind, and the MERN stack (MongoDB, Express, React, Node.js). This intelligent chatbot assists users in resolving their medical queries, provides suggestions regarding suitable medications for various health conditions.      ",
    category: "MERN stack React",
    image: "https://i.ibb.co/n1pT7f2/Chat-Bot-App.png",
    link: "https://github.com/srushtyp05/MedicalChatbot"
  },
  {
    _id: "2",
    title: "Kalakari",
    typo: "Front End",
    content:
      "Itchy eyes can be triggered by exposure to pollen, animal fur, mould, dust mites, make-up or eye drops.",
    category: "Front End",
    image: "https://i.ibb.co/VHWc4pk/Kalakari.png",
    link: "https://shaily5.github.io/Kalakari/",
  },

  {
    _id: "3",
    title: "Aspiring Minds",
    typo: 'Full Stack',
    content:
      "A new Flutter project. ",
    category: "React.js, Javascript, TailwindCSS  ",
    image: AspiringMinds,
    link: "https://github.com/srushtyp05/AspiringMinds",
  },
  {
    _id: "4",
    title: "Music Recommender",
    typo: 'Python',
    content:
      "Itchy eyes can be triggered by exposure to pollen, animal fur, mould, dust mites, make-up or eye drops.",
    category: "React.js, Javascript, TailwindCSS  ",
    image: MusicRecommendation,
    link: "https://github.com/srushtyp05/MusicRecommendationSystem",
  },
  {
    _id: "5",
    title: "Global Search Engine",
    typo: 'Java',
    content:
      "A search engine is a tool that helps users to find information from the web. For the user,the search engine returns the most accurate matches from the internet. The project covered concepts like web crawling, handling HTML files, website searching, frequency analysis, and pattern evaluation.",
    category: "Java",
    image: Gse,
    link: "https://github.com/srushtyp05/GlobalSearchEngine",
  },
  {
    _id: "6",
    title: "Blogging App",
    typo: 'Front End',
    content:
      "Created a Blog App using Node.js and Express.js with MongoDB that allows users to create, update, and delete blogs, as well as users add, update, and delete comments on those blogs.",
    category: "React.js, Javascript, TailwindCSS  ",
    image: BlogApp,
    link: "https://github.com/srushtyp05/BloggingPlatform",
  }
];

export default projects;

export const buttons = [
  {
    name: "All",
    value: "all"
  },
  {
    name: "Front End",
    value: "Front End"
  },
  {
    name: "Full Stack",
    value: "Full Stack"
  },
  {
    name: "Java",
    value: "Java"
  },
  {
    name: "Python",
    value: "Python"
  }
];