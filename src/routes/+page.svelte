<script lang="ts">
    import Nav from "$lib/components/feature/layout/Nav.svelte";
    import Intro from "$lib/components/feature/layout/Intro.svelte";
    import EduCert from "$lib/components/feature/layout/EduCert.svelte";
    import Projects from "$lib/components/feature/layout/Projects.svelte";
    import Skills from "$lib/components/feature/layout/Skills.svelte";
</script>

<div class="bg-background flex">
    <main class="flex-1 flex flex-col items-center justify-start min-h-screen gap-16 p-16">
        <Intro />
        <div class="h-[1px] w-1 bg-light-gray"></div>
        <EduCert />
        <div class="h-[1px] w-1 bg-light-gray"></div>
        <Skills />
        <div class="h-[1px] w-1 bg-light-gray"></div>
        <Projects />
        <div class="h-[1px] w-1 bg-light-gray"></div>
    </main>
    <aside class="w-1/4 min-h-screen">
        <Nav />
    </aside>
</div>
