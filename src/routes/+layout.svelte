<script>
	//import { enhance } from '$app/forms'
	import { page } from '$app/stores';
	import '../styles/app.css';
</script>

<!-- Quelle: Login Projekt Svelte Prof. Dr Klaus Dallmöller -->
<svelte:head>
	<title>DLJP Video Portal</title>
</svelte:head>

<nav>
	{#if $page.data.user}
		<a href="/kunden">Test</a>
		<a href="/konten">Test</a>
	{/if}
</nav>

<main>
	<slot />
</main>
