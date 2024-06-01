import { gdsc,nexus,adventura,research } from "../assets/images";
import {
    contact,
    css,
    github,
    html,
    javascript,
    linkedin,
    react,
    tailwindcss,
    c,
    sql,
    wireshark,
    packettracer,
    python

} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: c,
        name: "C/C++",
        type: "Programming Language",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Programming Language",
    },
    {
        imageUrl: sql,
        name: "PL/SQL",
        type: "Databasemanagement",
    },
    {
        imageUrl: wireshark,
        name: "Wireshark",
        type: "Networking",
    },
    {
        imageUrl: packettracer,
        name: "Packet Tracer",
        type: "Networking",
    },
    
];

export const experiences = [
    {
        title: "Developer",
        company_name: "Hack the Tank - Hackathon",
        icon: gdsc,
        iconBg: "#accbe1",
        date: "March 2024",
        points: [
            'Participated in a 30-hour hackathon to devise a technical solution for a business featured on Shark Tank - India', 
            'Focusing on data analytics and WhatsApp integration',
            'Developed a website to complement the solution, demonstrating collaborative problem-solving skills within a competitive environment in addressing real-world business challenges.'
        ],
    },
    {
        title: "Developer",
        company_name: "Google Winter of Code",
        icon: gdsc,
        iconBg: "#accbe1",
        date: "January 2024",
        points: [
            'An interactive website for Mudberry Studio, spotlighting the artistic offerings of studio',
            'Detailing information on pottery workshops, and providing a seamless platform for individuals to engage',
            'As a frontend developer, I developed the design and code for different webpages to entice the client’s needs'
        ],
    },
    {
        title: "Developer-Lead",
        company_name: "NEXUS : Web development competition",
        icon: nexus,
        iconBg: "#accbe1",
        date: "July 2023",
        points: [
            'Adventura is a dynamic travel and adventure website crafted from scratch by our dedicated team',
            'As the creative force behind ideas and content',
            'I was a part of front-end development to bring my team’s vision to life using HTML, CSS and JavaScript',
            'Ensuring an immersive and visually captivating user experience'
        ],
    },

];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/LamyaGandhi',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/lamyagandhi10/',
    }
];

export const projects = [
    {
        iconUrl: adventura,
        theme: 'btn-back-red',
        name: 'Adventura - travel website',
        description: 'Adventura is a dynamic travel and adventure website crafted from scratch by our dedicated team.',
        link: 'https://github.com/LamyaGandhi',

    },
    {
        iconUrl: research,
        theme: 'btn-back-red',
        name: ' Research on use of AI in logistical Operations',
        description: ' It explores the transformative potential of AI in redefining how we approach supply chains, transportation networks, warehouse management,and distribution systems. ',
        link: 'https://github.com/LamyaGandhi',
        
    },
    // {
    //     iconUrl: threads,
    //     theme: 'btn-back-green',
    //     name: 'Full Stack Threads Clone',
    //     description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
    //     link: 'https://github.com/adrianhajdin/threads',
    // },
    // {
    //     iconUrl: car,
    //     theme: 'btn-back-blue',
    //     name: 'Car Finding App',
    //     description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
    //     link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    // },
    // {
    //     iconUrl: snapgram,
    //     theme: 'btn-back-pink',
    //     name: 'Full Stack Instagram Clone',
    //     description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
    //     link: 'https://github.com/adrianhajdin/social_media_app',
    // },
    // {
    //     iconUrl: estate,
    //     theme: 'btn-back-black',
    //     name: 'Real-Estate Application',
    //     description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
    //     link: 'https://github.com/adrianhajdin/projects_realestate',
    // },
    // {
    //     iconUrl: summiz,
    //     theme: 'btn-back-yellow',
    //     name: 'AI Summarizer Application',
    //     description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
    //     link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    // }
];