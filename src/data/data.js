import quoteGenerator from  "../assets/quote.png";
import ageChecker from "../assets/age-checker.png";
import digitalClock from "../assets/digital-clock.png";
import landingPage from "../assets/landing-page.png";
import restaurant from "../assets/restaurant.png";
import victoriaUzomaPortfolio from "../assets/victoria-uzoma.png";

export const skills = [
    { name: "HTML", icon: "html", category: "Frontend" },
    { name: "CSS", icon: "css", category: "Frontend" },
    { name: "JavaScript", icon: "javascript", category: "Frontend" },
    { name: "TypeScript", icon: "typescript", category: "Frontend" },
    { name: "React", icon: "react", category: "Frontend" },
    { name: "Node.js", icon: "node", category: "Backend" },
    { name: "Express", icon: "express", category: "Backend" },
    { name: "SQL", icon: "sql", category: "Backend" },
    { name: "Photoshop", icon: "photoshop", category: "Design" },
];


export const projects = [

    {
        title: "Quote Generator",
        description: "A JavaScript application that displays random motivational quotes.",
        technologies: ["HTML", "CSS", "JavaScript"],
        image: quoteGenerator,
        link: "https://quote-generator-pi-five.vercel.app/",
        github: "https://github.com/Victoria-Uzoma/Quote",
    },

    {
        title: "Age Checker",
        description: "A TypeScript project that checks the user's age and returns a result.",
        technologies: ["HTML", "CSS", "TypeScript"],
        image: ageChecker,
        link: "https://age-checker-ebon.vercel.app/",
        github: "https://github.com/Victoria-Uzoma/Age-Checker",
    },

    {
        title: "Digital Clock",
        description: "A digital clock application that displays the current time.",
        technologies: ["HTML", "CSS", "JavaScript"],
        image: digitalClock,
        link: "https://digital-clock-rho-green.vercel.app/",
        github: "https://github.com/Victoria-Uzoma/My-digital-clock",
    },

    {
        title: "Landing Page",
        description: "A responsive landing page built with HTML, CSS and JavaScript.",
        technologies: ["HTML", "CSS", "JavaScript"],
        image: landingPage,
        link: "https://landing-page-woad-rho-19.vercel.app/",
        github: "https://github.com/Victoria-Uzoma/Landing-Page",
    },

    {
        title: "Restaurant Website",
        description: "A responsive restaurant website designed to showcase food, services and ordering information.",
        technologies: ["HTML", "CSS", "JavaScript"],
        image: restaurant,
        link: "https://restaurant-nine-weld.vercel.app/",
        github: "https://github.com/Victoria-Uzoma/restaurant",
    },

    {
        title: "Victoria Uzoma Portfolio",
        description: "My personal portfolio website built with HTML, CSS and JavaScript.",
        technologies: ["HTML", "CSS", "JavaScript"],
        image: victoriaUzomaPortfolio,
        link: "https://victoria-uzoma.vercel.app/",
        github: "https://github.com/Victoria-Uzoma/Victoria-Uzoma",
    },

];


export const articles = [
    {
        slug: "javascript-project",
        title: "What I Learned Building My First JavaScript Project",
        category: "JavaScript",
        excerpt: "A look at what I learned while building a small JavaScript application.",
        date: "September 2026",
    },

    {
        slug: "learned-typescript",
        title: "My Journey Into TypeScript",
        category: "TypeScript",
        excerpt: "Understanding types, functions and how TypeScript works with JavaScript.",
        date: "September 2026",
    },
];