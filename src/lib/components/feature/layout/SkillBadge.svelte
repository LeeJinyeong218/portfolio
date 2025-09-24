<script>
    import { Star } from 'lucide-svelte';
    
    export let name;
    export let icon = '';
    export let level = 0;
</script>

<div class="relative w-34 h-12 overflow-hidden shadow-md rounded-lg" class:group={level > 0}>
    <div class="absolute inset-0 flex items-center gap-2 transition-transform duration-300 translate-x-[4px] group-hover:-translate-x-full">
        <div class="w-8 h-8 flex items-center justify-center">
            {#if icon}
                <img src={icon} alt={name} class="w-6 h-6" />
            {:else}
                <div class="w-6 h-6 bg-gray-200 rounded-md"></div>
            {/if}
        </div>
        <span class="text-sm">{name}</span>
    </div>
    
    <div class="absolute inset-0 flex items-center justify-center gap-1 translate-x-full transition-transform duration-300 group-hover:translate-x-0">
        {#each Array(level) as _, i}
            <Star size={16} fill="currentColor" stroke="currentColor" class="text-yellow-400" />
        {/each}
    </div>
</div>
