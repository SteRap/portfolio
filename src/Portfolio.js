import img0 from "./Media/Project/quizzical.png";
import img0Pres from "./Media/Project/quizzical_presentation.png";
import img1 from "./Media/Project/save_the_meal.png";
import img1Pres from "./Media/Project/save_the_meal_presentation.png";
import img2 from "./Media/Project/smart_brain.png";
import img2Pres from "./Media/Project/smart_brain_presentation.png";
import img3 from "./Media/Project/space_tourism.png";
import img3Pres from "./Media/Project/space_tourism_presentation.png";
import img4 from "./Media/Project/robofriends.png";
import img4Pres from "./Media/Project/robofriends_presentation.png";
// import img6 from "./Media/Project/project_6.png";
// import img7 from "./Media/Project/project_7.png";
// import img8 from "./Media/Project/project_8.png";

const Portfolio = [
  {
    id: 0,
    img: img0,
    presentation: img0Pres,
    link: "https://quizzical-game.herokuapp.com",
    titleSmall: "A quiz game called",
    titleStrong: "Quizzical",
    subtitle: "Full-stack app with React and a public API",
    intro: `
     <p><strong>Quizzical</strong> is an online game built on the API provided by Open Trivia DataBase.<br> I started to develop Quizzical as the solo final project of the React course provided by  
      <a href="https://scrimba.com/" target="_blank">Scrimba</a>
     and taught by Bob Ziroll. The only requirements were <strong>1.</strong> to use React to create a frontend app that <strong>2.</strong> fetched the questions/answers from the <a href="https://opentdb.com/api_config.phpabout" target="_blank">Open Trivia DataBase</a>. <br> However, I saw good rooms to improve the app and decided <strong>1.</strong> to allow users to choose different categories of questions, <strong>2.</strong> to serve the app with the backend. Using a server was a must to allow players to monitor their scores and incentivize them to improve their scores playing more games.<p>`,
    description: `<br><h3>Technologies</h3>
    <h4>Frontend</h4>
    For the frontend, the application relies mostly on CSS3 and JSX due to the use of the REACT framework. This application has been the first one that I developped using React. 
    On top of CSS3, I relied on Tachyons https://tachyons.io libraries for the SignIn and Register form; also on Sass to create tooltips and animate them. 
    
    <h4>Backend</h4>
    
    For the backend, I use NODE.js powered with EXPRESS.js. In addiction, I relied on few npm extensions: <strong>1.</strong> <a href="https://www.npmjs.com/package/body-parser" target="_blank">BodyParser</a> as the middleware to enable the communication and data exchange between the frontend and the backend; <strong>2.</strong> <a href="https://knexjs.org" target="_blank">KNEX.js</a>  to powered Node.js and create better queries; <strong>3.</strong> <a href="https://www.npmjs.com/package/bcrypt" target="_blank">BCRYPT</a>  to encrypt users'passwords and guarentee security; <strong>4.</strong> <a href="https://www.npmjs.com/package/cors" target="_blank">CORS</a> the package for providing the Express middleware that can be used to enable CORS with various options.
    To test the server's requests I relied on <a href="https://www.postman.com" target="_blank">Postman</a> . 
    
    <h4>Database</h4> 
    To mantain the data for users'profile and for their games and scores, I use the relational database PostegreSQL. To work better with it I relied on the database tool <a href="https://dbeaver.io" target="_blank">DBeaver</a>. On the matter, I structured the database by creating two tables: <strong>1.</strong> Login <strong>2.</strong> Users. They communicate between them through the common value <i>"EMAIL"</i>. 
    
    <h4>Hosting</h4>
    Frontend, Backend and Database are all of them hosted by <a href="https://www.heroku.com/home" target="_blank">HEROKU</a>  <br>
    <br>
    <h3 style="margin-bottom:0.5em">Challenges</h3>
    
    <strong>FRONTEND:</strong> Being my first solo project using React, the main challenges have been about <strong>1.</strong> the architecture of the app; <strong>2.</strong> dealing with States and components that could affect parents' and siblings' States <i>(N.B. I didn't use Redux)</i>; <strong>3.</strong> tailoring the API response to have clean data (e.g. have the answers that could be displayed randomly --> right answers NOT always on the 4th position); <strong>4.</strong> rendering components at my needs (--> learning React.useEffect has been a must). <br>
    <strong>BACKEND:</strong> On the backend side, the main difficulties have been <strong>1.</strong> creating working queries <strong>2.</strong> allow the DB tables to relate between them; <strong>3.</strong> use req.body to transfer users'inputs to the backend. <br>
    <strong>DATABASE:</strong>  Luckly, it was easier than expected, but still it requires some efforts to move myself around with a new language and the use of the software DBeaver. 
    <br>
    <br>
    <h3 style="margin-bottom:0.5em">Learnings</h3>  
    
    Developing and working on this project has been extremely fun. The knowledge and skills learnt and developed are such tremendous that will be difficult to report all of them here. Still, at the end of the project I feel much more confortable developping React app with functional components, dealing with React States, using React Hooks, performing API fetches and creating a backend to serve a frontend app.
    <br>
    <br>
    <h3 style="margin-bottom:0.5em">Credits</h3>
    
    Extremely felt gratitude is due to <a href="https://github.com/bobziroll" target="_blank">Bob Ziroll</a>  that taught me lot of skills to work with React; and to <a href="https://github.com/aneagoie" target="_blank">Andrei Neagoie</a> founder of ZeroToMastery, who taught me, through a 37-long-hours <a href="https://www.udemy.com/course/the-complete-web-developer-zero-to-mastery/learn/lecture/19845426#overview" target="_blank">course</a>, countless knowledge including the ones to create the backend and Database of Quizzical.`,
  },
  {
    id: 1,
    img: img1,
    presentation: img1Pres,
    link: "https://sterap.github.io/save-the-meal/",
    titleSmall: "Website for",
    titleStrong: "Save the Meal",
    subtitle: "Multipages responsive website with React",
    intro: "",
  },
  {
    id: 2,
    img: img2,
    presentation: img2Pres,
    link: "https://dane-thesmartbrain.herokuapp.com/",
    titleSmall: "Dane",
    titleStrong: "the Smart Brain",
    subtitle: "Full-stack app powered by AI",
    intro: "",
  },
  {
    id: 3,
    img: img3,
    presentation: img3Pres,
    link: "https://sterap.github.io/space-tourism-website/",
    titleSmall: "Explore",
    titleStrong: "the Space",
    subtitle: "My first multipages responsive website",
    intro: "",
  },
  {
    id: 4,
    img: img4,
    presentation: img4Pres,
    link: "https://sterap.github.io/robofriends/",
    titleSmall: "Search your",
    titleStrong: "Robofriends",
    subtitle: "My first app with React and API fetched data",
    intro: "",
  },
  // {
  //   id: 5,
  //   img: img5,
  // },
  // {
  //   id: 6,
  //   img: img6,
  // },
  // {
  //   id: 7,
  //   img: img7,
  // },
  // {
  //   id: 8,
  //   img: img8,
  // },
];

export default Portfolio;
