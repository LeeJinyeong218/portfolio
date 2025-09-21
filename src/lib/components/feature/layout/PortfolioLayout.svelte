<script lang="ts">
    import { onMount } from 'svelte';
    import Intro from "./content/Intro.svelte";
    import EduCert from "./content/EduCert.svelte";
    import Projects from "./content/Projects.svelte";
    import Skills from "./content/Skills.svelte";

    export let slug: string = '';

    let introElement: HTMLElement;
    let eduCertElement: HTMLElement;
    let skillsElement: HTMLElement;
    let projectsElement: HTMLElement;

    // slug로 스크롤할 섹션 결정
    function getScrollTarget(slug: string) {
        switch (slug) {
            case 'intro':
            case '':
                return introElement;
            case 'educert':
                return eduCertElement;
            case 'skills':
                return skillsElement;
            case 'projects':
                return projectsElement;
            default:
                return introElement;
        }
    }

    // 스크롤 애니메이션
    function scrollToElement(element: HTMLElement) {
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }

    // slug 감지
    $: if (slug !== undefined) {
        const targetElement = getScrollTarget(slug);
        if (targetElement) {
            setTimeout(() => {
                scrollToElement(targetElement);
            }, 100);
        }
    }

    // 초기 로드 스크롤
    onMount(() => {
        const targetElement = getScrollTarget(slug);
        if (targetElement) {
            setTimeout(() => {
                scrollToElement(targetElement);
            }, 100);
        }
    });
</script>

<div class="flex flex-col items-center justify-start min-h-screen px-16">
    <div bind:this={introElement}>
        <Intro />
    </div>
    <div class="h-[1px] w-1 bg-light-gray"></div>
    <div bind:this={eduCertElement}>
        <EduCert />
    </div>
    <div class="h-[1px] w-1 bg-light-gray"></div>
    <div bind:this={skillsElement}>
        <Skills />
    </div>
    <div class="h-[1px] w-1 bg-light-gray"></div>
    <div bind:this={projectsElement}>
        <Projects />
    </div>
    <div class="h-[1px] w-1 bg-light-gray"></div>
</div>
