<script lang="ts">
    import { goto } from '$app/navigation';
    import { page } from '$app/state';
    import profile from '$lib/assets/profile.gif';
    import Github from '$lib/assets/icons/Github.svg';
    import Linkedin from '$lib/assets/icons/LinkedIn.svg';
    import Velog from '$lib/assets/icons/Velog.svg';
	import { Languages, ArrowUpFromLine } from 'lucide-svelte';
	import { m } from '$lib/paraglide/messages.js';
    import { navItems } from '$lib/constants/nav';
    
    function navigateToSection(slug: string) {
        if (slug === 'intro') { 
            goto('/', { replaceState: true, noScroll: true });
        } else {
            goto(`/${slug}`, { replaceState: true, noScroll: true });
        }
    }

    async function goToIntro() {
        // 현재 경로가 /가 아니라면 URL 변경
        if (page.url.pathname !== '/') {
            goto('/', { replaceState: true, noScroll: true });
        } else {
            // 이미 / 경로라면 스크롤만 맨 위로
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    }
</script>

<div class="fixed right-0 top-1/2 -translate-y-1/2 w-1/4 h-fit Content py-16 px-6 flex flex-col gap-6 items-center">
    <!-- title -->
    <div class="flex flex-col items-center gap-1">
        <h4 class="text-primary">Frontend Developer</h4>
        <h1 class="text-secondary">Lee Jinyoung</h1>
        <div class="subtitle text-primary">Portfolio</div>
    </div>
    <!-- info -->
    <div class="flex flex-col gap-3 justify-center items-center">
        <img alt="profile" src={profile} class="w-12 h-12" />
        <p class="body text-dark-gray text-center whitespace-pre-line">
            {m.hello()}
        </p>
        <div class="flex gap-3">
            <a href="https://github.com/LeeJinyeong218" target="_blank" rel="noopener noreferrer"><img alt="github" src={Github} class="w-6 h-6" /></a>
            <a href="https://www.linkedin.com/in/%EC%A7%84%EC%98%81-%EC%9D%B4-b97a6a32a/" target="_blank" rel="noopener noreferrer"><img alt="linkedin" src={Linkedin} class="w-6 h-6" /></a>
            <a href="https://velog.io/@leejinyeong218" target="_blank" rel="noopener noreferrer"><img alt="velog" src={Velog} class="w-6 h-6" /></a>
        </div>
    </div>
    <!-- nav -->
    <nav>
        <ul class="space-y-4">
            {#each navItems as item}
                <li>
                    <button 
                        class="block w-full text-left px-4 py-2 rounded hover:bg-gray-100 transition-colors flex gap-2 rounded-lg"
                        on:click={() => navigateToSection(item.slug)}
                    >
                        <item.icon size={24} color="var(--color-dark-gray)" />
                        <span class="text-dark-gray">{m[item.key as keyof typeof m]()}</span>
                    </button>
                </li>
            {/each}
        </ul>
    </nav>
    <!-- language button -->
    <button aria-label="language button">
        <Languages size={24} color="var(--color-dark-gray)" />
    </button>
    <!-- to top button -->
    <button aria-label="to top button" class="border-2 border-light-gray rounded-full p-3 flex items-center justify-center" on:click={goToIntro}>
        <ArrowUpFromLine size={24} color="var(--color-light-gray)" />
    </button>
</div>