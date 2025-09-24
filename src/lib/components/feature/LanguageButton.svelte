<script lang="ts"> 
    import { Languages } from "lucide-svelte";
    import { setLocale } from "$lib/paraglide/runtime";
    import { fly } from 'svelte/transition';

    let isOpen = true;

    function toggleIsOpen() {
        isOpen = !isOpen;
    }

    function setLocaleFn(locale: 'en' | 'ko') {
        setLocale(locale);
        toggleIsOpen();
    }
</script>

<div class="w-fit relative">
    <button
        aria-label="language button"
        aria-expanded={isOpen}
        on:click={toggleIsOpen}
        class="p-3 rounded-full hover:bg-gray-100"
    >
        <Languages size={24} color="var(--color-dark-gray)" />
    </button>
    {#if isOpen}
        <div 
            class="absolute top-full left-1/2 -translate-x-1/2 bg-white p-2 rounded-lg flex flex-col gap-2 shadow-md"
            in:fly={{ y: -12, duration: 180 }}
            out:fly={{ y: -12, duration: 140 }}
        >
            <button class="text-dark-gray py-1 px-2 hover:bg-gray-100 rounded-lg" aria-label="korean button" on:click={() => setLocaleFn('ko')}>
                한국어
            </button>
            <button class="text-dark-gray py-1 px-2 hover:bg-gray-100 rounded-lg" aria-label="english button" on:click={() => setLocaleFn('en')}>
                English
            </button>
        </div>
    {/if}
</div>