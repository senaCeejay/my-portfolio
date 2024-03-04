import { FaReact } from "react-icons/fa";

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
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex odio non tempora incidunt perferendis quis! Eaque natus consequatur deleniti ut unde aut minima? Porro, eaque assumenda enim consequatur officiis cumque!',
        repository: 'https://github.com/senaCeejay/pokedex',
        live: 'https://pokedex-indol-delta.vercel.app/',
    },
    {
        title: 'Task Management',
        language: [
            {
                name: 'ReactJS',
                icon: '',
            },
            {
                name: 'Tailwind',
                icon: '',
            }
        ],
        image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex odio non tempora incidunt perferendis quis! Eaque natus consequatur deleniti ut unde aut minima? Porro, eaque assumenda enim consequatur officiis cumque!',
        repository: 'https://github.com/senaCeejay/dashboard-v1',
        live: 'https://dashboard-v1-one.vercel.app/',
    },
]