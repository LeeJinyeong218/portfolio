<script lang="ts">
	import '../app.css';
    import Nav from "$lib/components/feature/layout/Nav.svelte";
</script>

<div class="bg-background flex">
    <main class="flex-1">
        <slot />
    </main>
    <aside class="w-1/4 min-h-screen">
        <Nav />
    </aside>
</div>