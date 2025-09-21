<script lang="ts">
    import PortfolioLayout from "$lib/components/feature/layout/PortfolioLayout.svelte";
    import { page } from '$app/state';
</script>

<PortfolioLayout slug={page.params.slug || ''} />