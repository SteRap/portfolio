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
    On top of CSS3, I relied on <a href="https://tachyons.io" target="_blank">Tachyons</a> libraries for the <i>Sign In</i> and <i>Register</i> form; also on Sass to create tooltips and animate them. 
    
    <h4>Backend</h4>
    
    For the backend, I used NODE.js powered with EXPRESS.js. In addiction, I relied on few npm extensions: <strong>1.</strong> <a href="https://www.npmjs.com/package/body-parser" target="_blank">BodyParser</a> as the middleware to enable the communication and data exchange between the frontend and the backend; <strong>2.</strong> <a href="https://knexjs.org" target="_blank">KNEX.js</a>  to powered Node.js and create better queries; <strong>3.</strong> <a href="https://www.npmjs.com/package/bcrypt" target="_blank">BCRYPT</a> to encrypt users' passwords and guarentee security; <strong>4.</strong> <a href="https://www.npmjs.com/package/cors" target="_blank">CORS</a> the package for providing the Express middleware that can be used to enable CORS with various options.<br>
    To test the server's requests I relied on <a href="https://www.postman.com" target="_blank">Postman</a>. 
    
    <h4>Database</h4> 
    To mantain the data for users' profile and for their games and scores, I used the relational database PostegreSQL. To work better with it I relied on the database tool <a href="https://dbeaver.io" target="_blank">DBeaver</a>. On the matter, I structured the database by creating two tables: <strong>1.</strong> Login <strong>2.</strong> Users. They communicate between them through the common value <i>"EMAIL"</i>. 
    
    <h4>Hosting</h4>
    Frontend, Backend and Database are all of them hosted by <a href="https://www.heroku.com/home" target="_blank">HEROKU</a>  <br>
    <br>
    <h3 style="margin-bottom:0.5em">Challenges</h3>
    
    <strong>FRONTEND:</strong> Being my first solo project using React, the main challenges have been about <strong>1.</strong> the architecture of the app; <strong>2.</strong> dealing with States and components that could affect parents' and siblings' States <i>(N.B. I didn't use Redux)</i>; <strong>3.</strong> tailoring the API response to have clean data (e.g. have the answers that could be displayed randomly &#x2192 right answers NOT always on the 4th position); <strong>4.</strong> rendering components at my needs (&#x2192 learning React.useEffect has been a must). <br>
    <strong>BACKEND:</strong> On the backend side, the main difficulties have been <strong>1.</strong> creating working queries <strong>2.</strong> allow the DB tables to relate between them; <strong>3.</strong> use req.body to transfer users' inputs to the backend. <br>
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
    intro: `Born on the desire to improve the food system and ensure food security, Save the Meal is a company* that produces <strong>plant-based foods</strong>. This project is a multipage website that advertises the company and its products. <br>The website consists of a Landing Page - <i>Home</i> -, three other pages** (1. <i>Foods</i> - where visitor can explore the details and benefits of the products; 2. <i>Store</i> - an e-commerce where to order and buy the products that you like; 3. <i>Recipes</i> - a database of many plant-based recipes that visitor can follow when they need some inspirations in the kitchen). In addiction, the released of an extra session is scheduled - "Don't waste it, Taste it!" - which is a web app that keeps track of the users' pantry and based on the ingredients' availability suggests recipes from the Save the Meal's database.
    <br> 
    <p style="font-size: 0.6em">* Save the Meal is not a real company. I created this fake company out of 1. my desire to use technology to redesign the food system; 2. my vocation to keep animals out of the plates.
    <br>** These pages are still under construction.</p>`,
    description: ``,
  },
  {
    id: 2,
    img: img2,
    presentation: img2Pres,
    link: "https://dane-thesmartbrain.herokuapp.com/",
    titleSmall: "Dane",
    titleStrong: "the Smart Brain",
    subtitle: "Full-stack app powered by AI",
    intro: `<strong>Smart Brain</strong> is a full-stack web app. <br>I developed this full-stack web app as the final project of the 37-hours-long Web developer <a href="https://www.udemy.com/course/the-complete-web-developer-zero-to-mastery/learn/lecture/19845426#overview" target="_blank">course</a> taught by <a href="https://github.com/aneagoie" target="_blank">Andrei Neagoi </a> founder of ZeroToMastery. <br>The application allows the users to paste an image URL in order to scan human faces inside the image itself. <br>Smart Brain runs on top an Artificial Intelligence technology provided by <a href="https://www.clarifai.com" target="_blank">Clarifai</a>.`,
    description: `
    <h3>Technologies</h3>
    <h4>Frontend</h4>
    For the frontend, the application relies mostly on CSS3 and JSX due to the use of the REACT framework. This application has been the first one that I developped using React. 
    On top of CSS3, I relied on <a href="https://tachyons.io" target="_blank">Tachyons</a> libraries for the <i>Sign In</i> and <i>Register</i> form;
    
    <h4>Backend</h4>
    For the backend, I used NODE.js powered with EXPRESS.js. In addiction, I relied on few npm extensions: <strong>1.</strong> <a href="https://www.npmjs.com/package/body-parser" target="_blank">BodyParser</a> as the middleware to enable the communication and data exchange between the frontend and the backend; <strong>2.</strong> <a href="https://knexjs.org" target="_blank">KNEX.js</a>  to powered Node.js and create better queries; <strong>3.</strong> <a href="https://www.npmjs.com/package/bcrypt" target="_blank">BCRYPT</a> to encrypt users' passwords and guarentee security; <strong>4.</strong> <a href="https://www.npmjs.com/package/cors" target="_blank">CORS</a> the package for providing the Express middleware that can be used to enable CORS with various options.<br>
    To test the server's requests I relied on <a href="https://www.postman.com" target="_blank">Postman</a>. 
    
    <h4>Database</h4> 
    To mantain the data for users' profile and for their entries' number, I used the relational database PostegreSQL. To work better with it I relied on the database tool <a href="https://dbeaver.io" target="_blank">DBeaver</a>. On the matter, I structured the database by creating two tables: <strong>1.</strong> Login <strong>2.</strong> Users. They communicate between them through the common value <i>"EMAIL"</i>. 
    
    
    <h4>Hosting</h4>
    Frontend, Backend and Database are all of them hosted by <a href="https://www.heroku.com/home" target="_blank">HEROKU</a>  <br>
    <br>
   
    
    <h3 style="margin-bottom:0.5em">Learnings</h3>  
    
    Developing and working on this project has been as fun as tough. Completing this project, I have acquired an enourmous amout of skills and knowledge. Now,  I feel much more confortable developping React app with class and functional components, dealing with React States, using React Hooks, performing API fetches and creating a backend to serve a frontend app.
    <br>
    <br>
    <h3 style="margin-bottom:0.5em">Credits</h3>
    
    Huge thank is due to <a href="https://github.com/aneagoie" target="_blank">Andrei Neagoi</a> that released and taught an amazing and detailed course. <br>All the topics have been introduced and explained clearly, and the Smart Brain app has been a great project to practice the taught knowledge and skills.`,
  },
  {
    id: 3,
    img: img3,
    presentation: img3Pres,
    link: "https://sterap.github.io/space-tourism-website/",
    titleSmall: "Explore",
    titleStrong: "the Space",
    subtitle: "My first multipages responsive website",
    intro: `A multipage website that advertises the next frontier of tourism: <strong>the space one!</strong> <br>The website consists of a Landing Page (Home), and three other pages (1. Planets - where you can travel to; 2. Crew - people that drive the space expeditions; 3 Technology - brief expalanation of the cool stuffs that makes space tourism possible). Each of the three pages contains several subpages that use the same design layout.`,
    description: `Working on this project was a challenging but fun exercise to develop and strengthen my pure CSS skills. Indeed it is the first project I did that focuses on fully responsiveness for different sizes devices and accessibility for people with physical disabilities, situational disabilities, and socio-economic restrictions on bandwidth and speed.
<br>
    Moreover, working on this project I tryed to follow and apply all the good practices for an efficient stylying system.<br><br>
    <h3 style="margin-bottom:0.5em">The Design System</h3>
    Everything started crafting the design system for Fonts, Colors, Elements, Buttons etc...
    <br><br>
    <h3 style="margin-bottom:0.5em">Default settings, Utility Classes and Custom Properties</h3>
    While creating the design system, I defined the basic rules for the UI of the websites pages &#x2192 <strong>1.</strong> Reset of sensible default settings; <strong>2.</strong> Create Utility Classes; <strong>3.</strong> Define Custom Properties. Afwerwards, the main part of the job consisted on creating the layout for the different pages. On this matter, the novelty, for me, consisted on defining the design for mobile first, and then, through the use of @media queries, tailored the layout for tablets and desktops as well. 
    <br>
    <br>
      
    <h3 style="margin-bottom:0.5em">JavaScript</h3>
      
    The needs to use JavaScript was limited to 
      <strong>1.</strong>enable the navigation bar to open and collapse at the users' need <i>(N.B. case specific for mobile devices)</i>
      </br>
      
    //  ![alt text](media/website_preview/website_preview_mobileview.png) 
      
      </br>
      <strong>2.</strong>allow users to use keytabs to navigate on the website;
      <br><br>
     
      <h3 style="margin-bottom:0.5em">Conclusions and Learnings</h3>
      This project inspired by <a href="https://www.frontendmentor.io" target="_blank">FrontEnd Mentor</a> gave me the opportunity to sharpen my CSS skills, to work on a responsive website, to realize the importance of accesibility, and probably, above all, the need to define classes for 99%, if not all, of the HTML elements that we write.`,
  },
  {
    id: 4,
    img: img4,
    presentation: img4Pres,
    link: "https://sterap.github.io/robofriends/",
    titleSmall: "Search your",
    titleStrong: "Robofriends",
    subtitle: "My first app with React and API fetched data",
    intro: `<strong>ROBOFRIENDS</strong> is a small and simple React App which I developed in order to start practicing with React and API requestes. <br>The app is built on the API provided by <a href="https://robohash.org" target="_blank">Robohash </a>. <br>
    The app includes a searching feature that allows users to filter among their robofriends by typing the robots' names. `,
    description: "",
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
