<script lang="ts">
    import { Layers } from 'lucide-svelte';
    import ProjectCard from '../../ProjectCard.svelte';
    import { onMount } from 'svelte';
    let projects: any;
    onMount(async () => {
        const res = await fetch('/projects/projects.json');
        projects = await res.json();
        console.log(projects);
    });

</script>

<div class="py-16 w-full">
    <div class="flex flex-col items-start gap-8">
        <h1 class="flex items-center gap-2">
            <Layers color="var(--color-primary)" size={48} />
            <span class="text-primary">프로젝트</span>
        </h1>
        {#if projects}
            <div class="flex flex-col gap-4">
                {#each projects as project}
                    <ProjectCard project={project} />
                {/each}
            </div>
        {/if}
    </div>
</div>