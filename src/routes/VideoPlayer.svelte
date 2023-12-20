<!-- VideoPlayer.svelte -->
<script>
	export let src = '';

	//let videoID = 0;
	//	let mehrAnzeigen = false;

	//const mehrAnzeigenClicked = () => {
	//mehrAnzeigen = !mehrAnzeigen;
	//};

	//  const worteZaehlen = (str) => str.split(/\s+/).length;

	async function aufrufeZaehlen() {
		//	const res = await fetch(
		//		`http://131.173.88.197:8080/videoPortalREST/api/video/aufrufeZaehlen/${videoID}`,
		//		{
		//			method: 'GET',
		//			headers: {
		//				'Content-Type': 'application/json'
		//			}
		//		}
		//	);
	}
</script>

<div class="video-player">
	<!-- Hier muss noch Titel, Bescheibung, Aufrufe rein-->
	<!-- {poster} -->
	<h1 class="text-2xl font-bold text-gray-600">Test</h1>
	<!-- svelte-ignore a11y-media-has-caption -->
	<video
		class="rounded-lg shadow-md border border-gray-200"
		controls
		preload="metadata"
		{src}
		on:click={() => aufrufeZaehlen()}
	></video>

	<p>
		Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
		ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
		dolores et ea rebum.
	</p>

	<!--{#if worteZaehlen(p) >=50}
	<p>{p.split(/\s+/).slice(0, 50).join(' ')}...</p>

	{/if} -->

	<h1 class="text-1xl font-bold text-gray-600">Aufrufe: 37</h1>
</div>

<style>
	.video-player {
		max-width: 100%;
	}
</style>
