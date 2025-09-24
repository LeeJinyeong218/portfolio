import { BookA, Brush, CircleUserRound, Layers } from "lucide-svelte";


export const navItems = [
    {
        key: 'intro',
        name: '소개',
        slug: '/',
        icon: CircleUserRound
    },
    {
        key: 'educert',
        name: '학력 & 자격',
        slug: '/educert',
        icon: BookA
    },
    {
        key: 'skills',
        name: '기술 스택',
        slug: '/skills',
        icon: Brush
    },
    {
        key: 'projects',
        name: '프로젝트',
        slug: '/projects',
        icon: Layers
    }
]