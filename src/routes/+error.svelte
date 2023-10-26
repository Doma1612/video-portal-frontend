<script>
	import { page } from '$app/stores';
	// Quelle: Login Projekt Svelte Prof. Dr Klaus Dallmöller
</script>

<svelte:head>
	<title>{$page.status}</title>
</svelte:head>

<div>
	{#if $page.status === 404}
		<h1>Not found!</h1>
	{:else}
		<h1>Something went wrong {$page.status}</h1>
	{/if}
</div>

<style>
	h1 {
		margin: 4em 0;
		text-align: center;
	}
	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>
