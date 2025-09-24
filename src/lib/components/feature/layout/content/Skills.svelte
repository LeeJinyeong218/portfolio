<script lang="ts">
    import { Brush, Star } from 'lucide-svelte';
    import { onMount } from 'svelte';
	import SkillBadge from '../SkillBadge.svelte';

    let skills: any;
    onMount(async () => {
        const res = await fetch('/skills/skills.json');
        skills = await res.json();
        console.log(skills);
    });

    const skillTypes = ['language', 'frontend', 'backend', 'database', 'collaborate', 'etc.'];
</script>

<div class="py-16 w-full">
    <div class="flex flex-col items-start gap-8">
        <h1 class="flex items-center gap-2">
            <Brush color="var(--color-primary)" size={48} />
            <span class="text-primary">기술 스택</span>
        </h1>
        {#if skills}
            {#each skillTypes as skillType}
                <div class="flex flex-col gap-4">
                    <h2 class="text-dark-gray">{skillType}</h2>
                    <div class="flex gap-2 flex-wrap">
                        {#each skills[skillType] as skill}
                            <SkillBadge name={skill.name} icon={skill.icon} level={skill.level} />
                        {/each}
                    </div>
                </div>
            {/each}
        {/if}
        <div>
            <div class="text-dark-gray caption flex items-center gap-1">
                <div class="w-14 flex gap-1 items-center mr-2">
                    <Star size={16} fill="currentColor" stroke="currentColor" class="text-yellow-400" />
                    <Star size={16} fill="currentColor" stroke="currentColor" class="text-yellow-400" />
                    <Star size={16} fill="currentColor" stroke="currentColor" class="text-yellow-400" />
                </div>
                <p>프로젝트 경험이 다수 있음</p>
            </div>
            <div class="text-dark-gray caption flex items-center gap-1">
                <div class="w-14 flex gap-1 items-center mr-2">
                    <Star size={16} fill="currentColor" stroke="currentColor" class="text-yellow-400" />
                    <Star size={16} fill="currentColor" stroke="currentColor" class="text-yellow-400" />
                </div>
                <p>기능을 개발할 수 있음</p>
            </div>
            <div class="text-dark-gray caption flex items-center gap-1">
                <div class="w-14 flex gap-1 items-center mr-2">
                    <Star size={16} fill="currentColor" stroke="currentColor" class="text-yellow-400" />
                </div>
                <p>개념을 알고 있음</p>
            </div>
        </div>
    </div>
</div>