<script>
	let Suchbegriff = '';
	//import { onMount } from 'svelte';

	export let istSuchbegriffEingegeben = false;

	function videoNachTitelSuchen() {
		istSuchbegriffEingegeben = true;
		console.log(istSuchbegriffEingegeben);
		//console.log(Suchbegriff);
		//fetch('API-Endpunkt', {
		//	method: 'GET',

		//	headers: {
		//		'Content-Type': 'application/json',
		//	},
		//	body: JSON.stringify({Suchbegriff}),
		//}).then(response => response.json))}
		//.then(data => {
		//Test
		//}).catch(error =>)
		// Hier muss der Suchbegriff dafür verwendet werden, eine Suche nach einem bestimmten Stichwort zuzulassen.
		// Ein Zugriff auf einen API-Endpunkt der EJB Video muss erfolgen
	}
</script>

<div
	class=" max-w-5xl mx-auto rounded-full border border-black bg-white-200 p-2 flex hover:bg-gray-200 transition ease-out delay-50 shadow"
>
	<input
		class="w-full rounded-full bg-transparent focus:outline-none"
		type="text"
		placeholder="Suche"
		bind:value={Suchbegriff}
	/>
	<button
		on:click={videoNachTitelSuchen}
		class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-2 border border-gray-400 rounded-full shadow"
		>Suchen</button
	>
	<!--Test -->
	<!-- {#if istSuchbegriffEingegeben}
        <h1>Hallo {Suchbegriff}</h1>
        {:else}
        <h1>false nä</h1>
        {/if} -->
</div>
