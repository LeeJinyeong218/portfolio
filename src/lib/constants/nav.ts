import { BookA, Brush, CircleUserRound, Layers } from "lucide-svelte";


export const navItems = [
    {
        key: 'intro',
        slug: '/',
        icon: CircleUserRound
    },
    {
        key: 'educert',
        slug: '/educert',
        icon: BookA
    },
    {
        key: 'skills',
        slug: '/skills',
        icon: Brush
    },
    {
        key: 'projects',
        slug: '/projects',
        icon: Layers
    }
]