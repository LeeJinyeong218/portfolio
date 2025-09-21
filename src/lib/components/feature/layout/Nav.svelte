<script lang="ts">
    import { goto } from '$app/navigation';
    
    const navItems = [
        { name: 'Intro', slug: 'intro' },
        { name: 'Education & Certificates', slug: 'educert' },
        { name: 'Skills', slug: 'skills' },
        { name: 'Projects', slug: 'projects' }
    ];
    
    function navigateToSection(slug: string) {
        if (slug === 'intro') {
            goto('/');
        } else {
            goto(`/${slug}`);
        }
    }
</script>

<div class="w-full h-fit Content">
    <nav class="sticky top-8">
        <ul class="space-y-4">
            {#each navItems as item}
                <li>
                    <button 
                        class="block w-full text-left px-4 py-2 rounded hover:bg-gray-100 transition-colors"
                        on:click={() => navigateToSection(item.slug)}
                    >
                        {item.name}
                    </button>
                </li>
            {/each}
        </ul>
    </nav>
</div>