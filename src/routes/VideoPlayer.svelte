<!-- VideoPlayer.svelte -->
<script>
	export let src = '';
	export let aufrufe = '';
	export let name = '';
	export let beschreibung = '';
	export let video = '';


	//let videoID = 0;
	//	let mehrAnzeigen = false;

	//const mehrAnzeigenClicked = () => {
	//mehrAnzeigen = !mehrAnzeigen;
	//};

	//  const worteZaehlen = (str) => str.split(/\s+/).length;

//	async function aufrufeZaehlen() {
		//	const res = await fetch(
		//		`http://131.173.88.197:8080/videoPortalREST/api/video/aufrufeZaehlen/${videoID}`,
		//		{
		//			method: 'GET',
		//			headers: {
		//				'Content-Type': 'application/json'
		//			}
		//		}
		//	);
//	}
</script>

<div class="video-player">
	<!-- Hier muss noch Titel, Bescheibung, Aufrufe rein-->
	<!-- {poster} -->
	 <!--<h1 class="text-2xl font-bold text-gray-600">Titel: {video.name}</h1> -->
	<!-- svelte-ignore a11y-media-has-caption -->
	<video
		class="rounded-lg shadow-md border border-gray-200"
		controls
		preload="metadata"
		{src} 
		
	></video>

<!--	<p>
		Beschreibung: {beschreibung}
	</p> -->

	<!--{#if worteZaehlen(p) >=50}
	<p>{p.split(/\s+/).slice(0, 50).join(' ')}...</p>

	{/if} -->

<!--	<h1 class="text-1xl font-bold text-gray-600">Aufrufe: {aufrufe}</h1> -->
</div>

<style>
	.video-player {
		max-width: 100%;
	}
</style>
