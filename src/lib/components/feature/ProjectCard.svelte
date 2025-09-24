<script lang="ts">
    import { Github, Globe } from 'lucide-svelte';

    export let project: {
        id: number;
        period: string;
        title: string; 
        competition?: string;
        program?: string;
        image: string;
        links: {
            github?: string;
            site?: string;
        };
        team: string;
        description: string;
        tech: string[];
        role: string;
        achievements: string[];
    };
</script>

<div class="flex flex-col gap-6 p-6 rounded-lg border border-light-gray hover:border-primary transition-colors">
    <div class="aspect-video rounded-lg overflow-hidden">
        <img src={project.image} alt={project.title} class="h-full" />
    </div>
    
    <div class="flex flex-col gap-4">
        <div class="flex flex-col gap-2">
            <p class="caption text-dark-gray">{project.period}</p>
            <h3>{project.title}</h3>
            {#if project.competition}
                <p class="body text-dark-gray">{project.competition}</p>
            {/if}
            {#if project.program}
                <p class="body text-dark-gray">{project.program}</p>
            {/if}
        </div>

        <div class="flex gap-2">
            {#if project.links.github}
                <a href={project.links.github} target="_blank" rel="noopener noreferrer" 
                   class="p-2 rounded-full hover:bg-gray-100 transition-colors">
                    <Github size={20} class="text-dark-gray" />
                </a>
            {/if}
            {#if project.links.site}
                <a href={project.links.site} target="_blank" rel="noopener noreferrer"
                   class="p-2 rounded-full hover:bg-gray-100 transition-colors">
                    <Globe size={20} class="text-dark-gray" />
                </a>
            {/if}
        </div>

        <div class="flex flex-col gap-2">
            <p class="body text-dark-gray">{project.description}</p>
            <p class="body text-dark-gray">팀 구성: {project.team}</p>
            <p class="body text-dark-gray">담당 역할: {project.role}</p>
        </div>

        <div class="flex flex-wrap gap-2">
            {#each project.tech as tech}
                <span class="px-3 py-1 rounded-full bg-gray-100 caption text-dark-gray">{tech}</span>
            {/each}
        </div>

        <div class="flex flex-col gap-2">
            <h4>주요 성과</h4>
            <ul class="list-disc list-inside">
                {#each project.achievements as achievement}
                    <li class="body text-dark-gray">{achievement}</li>
                {/each}
            </ul>
        </div>
    </div>
</div>
