import self from "../img/self.png"
import project1 from "../img/project1.png"
import project2 from "../img/project2.png"
import project3 from "../img/project3.png"
import project4 from "../img/project4.png"
import project5 from "../img/project5.png"

import { FaReact, FaVuejs, FaAngular, FaNodeJs, FaJsSquare, FaPython, FaJava } from 'react-icons/fa';
import { SiTypescript, SiExpress, SiPostgresql, SiMongodb } from 'react-icons/si';


const toolIcons = {
    Javascript: <FaJsSquare />,
    Python: <FaPython/>,
    Java: <FaJava/>,
    React: <FaReact />,
    Vue: <FaVuejs />,
    Angular: <FaAngular />,
    TypeScript: <SiTypescript />,
    Nodejs: <FaNodeJs />,
    Express: <SiExpress />,
    PostgreSQL: <SiPostgresql />,
    MongoDB: <SiMongodb />,
  };


export let colors = ["rgb(135, 138, 143)", "rgb(118, 119, 124)"];

export let singlePage = false;



export const info = {
    firstName: "Vivek",
    lastName: "Kalyanapu",
    initials: "", 
    position: "a Full Stack Developer",
    selfPortrait: self, 
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, 
    baseColor: colors[0],
    
    miniBio : [
        {
            emoji: '👨‍💻',
            text: 'Passionate Full Stack Developer'
        },
        {
            emoji: '🚀',
            text: 'Exploring new technologies'
        },
        {
            emoji: '🎓',
            text: 'Master\'s in Computer Science'
        },
        {
            emoji: '🌍',
            text: 'Based in Alabama, USA'
        },
        {
            emoji: '📚',
            text: 'Continuous learner and tech enthusiast'
        }
    ],
    socials: [
    
        {
            link: "https://www.instagram.com/i_mr.vivek/",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/vivekvardhank",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/vivek-vardhan-kalyanapu/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://x.com/Vivek_vardhan3",
            icon: "fa fa-twitter",
            label: 'twitter'
        }

    ],
    bio: "Hello! I'm a Full Stack Developer with a passion for crafting high-performing web applications. With a background in Computer Science from the University of Alabama at Birmingham, I thrive on exploring new tech trends and believe in the transformative power of AI. You should definitely hire me—I'm always ready to tackle new challenges and innovate!",
    skills:
        {
           
           proficientWith: [
            { name: 'Javascript', icon: toolIcons['Javascript'] },
            { name: 'Python', icon: toolIcons['Python'] },
            { name: 'Java', icon: toolIcons['Java'] },
            { name: 'React', icon: toolIcons['React'] },
            { name: 'Vue', icon: toolIcons['Vue'] },
            { name: 'Angular', icon: toolIcons['Angular'] },
            { name: 'TypeScript', icon: toolIcons['TypeScript'] },
            { name: 'Nodejs', icon: toolIcons['Nodejs'] },
            { name: 'Express', icon: toolIcons['Express'] },
            { name: 'PostgreSQL', icon: toolIcons['PostgreSQL'] },
            { name: 'MongoDB', icon: toolIcons['MongoDB'] },
          ]
        }
    ,
    hobbies: [
        {
            label: 'Sports',
            emoji: '🏏'
        },
        {
            label: 'Gaming',
            emoji: '🎮'
        },
        {
            label: 'Movies',
            emoji: '🎥'
        },
        {
            label: 'Cooking',
            emoji: '🌶'
        }

    ],
    portfolio: [ 
        /*{
            title: "Movie fun",
            live: "https://github.com/vivekvardhank?tab=repositories", 
            source: "https://github.com/vivekvardhank?tab=repositories", 
            image: project1,
           description: "Movie Fun is a MERN Application featuring movie exploration by popularity, top-rated, and genre filters. Users can add movies to their favorites, view details using the TMDB API, and manage their profile with JWT-based login and signup. MongoDB is used for the database, and Node.js with Express for the backend."
        },*/
        {
            title: "Adopt a pet",
            live: "https://github.com/vivekvardhank/Adopt_a_pet",
            source: "https://github.com/vivekvardhank/Adopt_a_pet",
            image: project2,
            description: "Adopt a Pet is a pet adoption website built using React and React Router. The website allows users to view all adoptable pets, filter pets by species, view detailed profiles of individual pets, search for pets by name, and handle scenarios where pet details are unavailable."
        },
        {
            title: "Ecommerce clone",
            live: "https://github.com/vivekvardhank/Ecommerce_clone",
            source: "https://github.com/vivekvardhank/Ecommerce_clone",
            image: project3,
            description: "This responsive web app, created with HTML, CSS, and JavaScript, includes product browsing, shopping cart management, secure login, and a checkout process. It integrates Stripe for test payment processing, offering a realistic shopping experience."
           
        },
        {
            title: "Film Finder",
            live: "https://github.com/vivekvardhank?tab=repositories",
            source: "https://github.com/vivekvardhank?tab=repositories",
            image: project4,
            description : "Film Finder is a movie recommendation app that suggests random movies by genre. Users can like or dislike suggestions to find new content. It uses The Movie Database API for data."
        },
        {
            title: "Hot Potato",
            live: "https://github.com/vivekvardhank/hotpotato",
            source: "https://github.com/vivekvardhank/hotpotato",
            image : project5,
            description :"The Hot Potato Game is a web-based multiplayer game where players pass a virtual potato to avoid holding it when the timer ends. It uses WebSockets for real-time interaction, starting with exactly four players. The game includes simple mechanics for passing the potato and losing when the timer runs out."
        }
    ]
}