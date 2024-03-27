import { FaReact } from "react-icons/fa";
import pokedex from "../assets/images/pokedexThumbnail.png"
import dashboardThumbnail from "../assets/images/dashboardThumbnail.png"
import GreeneryThumbnail from "../assets/images/GreeneryThumbnail.png"
import dreamhouseThumbnail from "../assets/images/dreamhouseThumbnail.png"
import theConsoleThumbnail from "../assets/images/theConsoleThumbnail.png"
import TravelblogThumbnail from "../assets/images/TravelblogThumbnail.png"
export const projects = [
    {
        title: 'Pokedex',
        language: [
            {
                name: 'ReactJS',
                icon: <FaReact />,
            },
            {
                name: 'Tailwind',
                icon: '',
            }
        ],
        image: 'https://plus.unsplash.com/premium_photo-1664361480105-33afc4559c40?q=80&w=1823&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: "Introducing my Pokédex powered by https://pokeapi.co/. Explore Pokémon with detailed info on types, abilities, stats, and more. Whether you're a seasoned Trainer or a newcomer, it's your ultimate resource to catch 'em all!",
        repository: 'https://github.com/senaCeejay/pokedex',
        live: 'https://pokedex-indol-delta.vercel.app/',
        thumbnail: pokedex,
    },
    // {
    //     title: 'Task Management',
    //     language: [
    //         {
    //             name: 'ReactJS',
    //             icon: '',
    //         },
    //         {
    //             name: 'Tailwind',
    //             icon: '',
    //         }
    //     ],
    //     image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    //     description: 'Introducing my latest creation: a streamlined web application for task management. With a clean and intuitive interface, this app helps you stay organized and focused on your goals. Easily create, prioritize, and track tasks, set deadlines, and collaborate with teammates seamlessly.',
    //     repository: 'https://github.com/senaCeejay/dashboard-v1',
    //     live: 'https://dashboard-v1-one.vercel.app/',
    //     thumbnail: dashboardThumbnail,
    // },
    {
        title: 'The Greenery',
        language: [
            {
                name: 'HTML',
                icon: '',
            },
            {
                name: 'CSS',
                icon: '',
            },
            {
                name: 'Bootstrap',
                icon: '',
            }
        ],
        image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: "Greenery is more than just a place to shop for plants With a user-friendly interface and seamless navigation, exploring SenaCeejay Greenery is a breeze. Whether you're a seasoned plant enthusiast or a newcomer to the world of gardening, our website offers a welcoming space to discover, learn, and connect with fellow plant lovers.",
        repository: 'https://github.com/senaCeejay/senaCeejay.Greenery?tab=readme-ov-file',
        live: 'https://senaceejay.github.io/senaCeejay.Greenery/home.html',
        thumbnail: GreeneryThumbnail,
    },
    {
        title: 'Dream House',
        language: [
            {
                name: 'HTML',
                icon: '',
            },
            {
                name: 'CSS',
                icon: '',
            },
            {
                name: 'Bootstrap',
                icon: '',
            },
            {
                name: 'JS',
                icon: '',
            }
        ],
        image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: 'A Website that can make your dreamhouse',
        repository: 'https://github.com/senaCeejay/dreamHouse.io?tab=readme-ov-file',
        live: 'https://senaceejay.github.io/dreamHouse.io/',
        thumbnail: dreamhouseThumbnail,
    },
    {
        title: 'The Console',
        language: [
            {
                name: 'JavaScript',
                icon: '',
            },
            {
                name: 'Blade',
                icon: '',
            },
            {
                name: 'CSS',
                icon: '',
            },
            {
                name: 'PHP',
                icon: '',
            }
        ],
        image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: 'A Website that can rent a video game and webapp that has admin panel',
        repository: 'https://github.com/richardjohnagrida/capstone',
        live: '',
        thumbnail: theConsoleThumbnail,
    },
    {
        title: 'TravelBlog',
        language: [
            {
                name: 'CSS',
                icon: '',
            },
            {
                name: 'HTML',
                icon: '',
            },
            {
                name: 'Tailwind',
                icon: '',
            },
            {
                name: 'React JS',
                icon: '',
            },
        ],
        description: 'A Website for travelblog',
        repository: 'https://github.com/senaCeejay/explorer',
        live: 'https://explorer-g7k2gdgb0-senaceejays-projects.vercel.app/',
        thumbnail: TravelblogThumbnail,
    },
]