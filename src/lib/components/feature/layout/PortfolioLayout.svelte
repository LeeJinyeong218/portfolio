<script lang="ts">
    import { goto } from '$app/navigation';
    import { onDestroy, onMount } from 'svelte';
    import Intro from "./content/Intro.svelte";
    import EduCert from "./content/EduCert.svelte";
    import Projects from "./content/Projects.svelte";
    import Skills from "./content/Skills.svelte";

    export let slug: string = '';

    let introElement: HTMLElement;
    let eduCertElement: HTMLElement;
    let skillsElement: HTMLElement;
    let projectsElement: HTMLElement;
    let intersectionObserver: IntersectionObserver | null = null;

    // 현재 URL에 반영된 slug를 추적하여 불필요한 내비게이션 방지
    let currentSlugInUrl: string = slug ?? '';

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

        // 50% 이상 보이는 섹션을 감지하여 URL 갱신
        const elementToSlug = new Map<HTMLElement, string>([
            [() => introElement as HTMLElement, 'intro'] as unknown as [HTMLElement, string],
            [() => eduCertElement as HTMLElement, 'educert'] as unknown as [HTMLElement, string],
            [() => skillsElement as HTMLElement, 'skills'] as unknown as [HTMLElement, string],
            [() => projectsElement as HTMLElement, 'projects'] as unknown as [HTMLElement, string]
        ]);

        // Lazy getter들을 실제 요소로 치환 (초기화 시점에 안전하게 보장)
        const resolvedMap = new Map<HTMLElement, string>();
        for (const [getter, s] of elementToSlug as unknown as Map<() => HTMLElement, string>) {
            const el = getter();
            if (el) resolvedMap.set(el, s);
        }

        intersectionObserver = new IntersectionObserver((entries) => {
            // 가장 많이 보이는 항목 우선
            const visibleEntries = entries
                .filter((e) => e.isIntersecting && e.intersectionRatio >= 0.5)
                .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

            if (visibleEntries.length === 0) return;

            const topEntry = visibleEntries[0];
            const newSlug = resolvedMap.get(topEntry.target as HTMLElement) ?? '';

            // 동일 slug면 건너뜀
            if (newSlug === currentSlugInUrl || (newSlug === 'intro' && currentSlugInUrl === '')) return;

            currentSlugInUrl = newSlug;

            const newUrl = newSlug === 'intro' ? '/' : `/${newSlug}`;
            // 히스토리를 교체하며 스크롤은 유지
            goto(newUrl, { replaceState: true, noScroll: true, keepFocus: true });
        }, { threshold: [0.5] });

        // 관찰 시작
        for (const el of resolvedMap.keys()) {
            intersectionObserver.observe(el);
        }
    });

    onDestroy(() => {
        if (intersectionObserver) {
            intersectionObserver.disconnect();
            intersectionObserver = null;
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
