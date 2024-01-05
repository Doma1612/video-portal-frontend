<script>
	import Footer from '../Footer.svelte';
import Navbar from '../Navbar.svelte';
	//	import Suchleiste from '../Suchleiste.svelte';
	//let videoID = 0;
	let videoBlob = '';
	let videoURL = '';
	let videoName = '';
	let aufrufAnzahl = '';
	let beschreibung = '';
	let Suchbegriff = '';
	let inputSuchbegriff = '';
	let sucheGestartet = false;
	let gefundeneVideos = [];
	import VideoPlayer from '../VideoPlayer.svelte';
	//import { onMount } from 'svelte';

	export let istSuchbegriffEingegeben = false;

	async function videoNachTitelSuchen() {
		Suchbegriff = inputSuchbegriff;
		istSuchbegriffEingegeben = true;
		sucheGestartet = true;
		console.log(istSuchbegriffEingegeben);

		const response = await fetch(
			`http://131.173.88.197:8080/SP_Video_Portal_REST-0.0.1-SNAPSHOT/api/video/ladeVideosNachSuche/${inputSuchbegriff}`
		);

		
		const responseData = await response.json();
		gefundeneVideos = responseData;
		console.log(gefundeneVideos);

		
	}

	async function getVideoByteStreamById(videoID) {
		const response = await fetch(
			`http://131.173.88.197:8080/SP_Video_Portal_REST-0.0.1-SNAPSHOT/api/video/ladeVideo/${videoID}`
		);

		videoBlob = await response.blob();
		//console.log(videoBlob);
		videoURL = URL.createObjectURL(videoBlob);
	    

		//console.log(videoURL);
		return videoURL;
	}
</script>

<Navbar />
<div
	class=" max-w-5xl mx-auto rounded-full border border-black bg-white-200 p-2 flex hover:bg-gray-200 transition ease-out delay-50 shadow"
>
	<input
		class="w-full rounded-full bg-transparent focus:outline-none"
		type="text"
		placeholder="Suche"
		bind:value={inputSuchbegriff}
	/>
	<button
		on:click={videoNachTitelSuchen}
		class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-2 border border-gray-400 rounded-full shadow"
		>Suchen</button
	>
	<!--Test -->
</div>

{#if istSuchbegriffEingegeben && sucheGestartet}
	<!-- <div class="max-w-5xl mx-auto bg-white-200 p-2 flex transition ease-out delay-50"></div> -->
    
	<h1 class="text-3xl font-bold text-gray-600 text-center">Videos zum Suchbegriff {Suchbegriff}</h1>
    <div class="max-w-2xl mx-auto flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-12">
	{#each gefundeneVideos as video}
	<!-- {(videoName = video.name)} -->
	<!-- {(aufrufAnzahl = video.anzahlAufrufe)} -->
	
		{#await getVideoByteStreamById(video.videoId) then videoURLFromPromise}
			{#if videoURLFromPromise}
				<!-- {(videoURL = videoURLFromPromise)} --><!-- Deswegen Blob!!-->
				<!-- videoName = video. -->
				<VideoPlayer {video} aufrufe= {(aufrufAnzahl = video.anzahlAufrufe)} name={(videoName = video.name)} beschreibung={(beschreibung= video.beschreibung)}  src={videoURL} ></VideoPlayer> <!-- name={videoName} aufrufe={aufrufAnzahl}-->
			{/if}
		{/await}
	{/each}
	</div>
{:else}
	<div></div>
{/if}

{#if istSuchbegriffEingegeben && sucheGestartet}
<Footer />
{/if}

<!-- Suche muss in Main ein Ergebnis ausgeben-->
<!-- Wie ght das? Wir haben die Stichwörter in einer ElementCollection Aufbau "VideoID - Stichwort z.B 1 - Webentwicklung"-->
<!-- Es muss nach einem Stichwort in der Suchleiste gesucht werden, welches dann in der ganzen Element Collection gesucht wird-->
<!-- Die gefundenen Videos sollen dann in der Video Tabelle gesucht werden. Wir brauchen dann den Link bzw. Pfad zum Video sowie Titel, Beschreibung? und Aufrufanzahl-->
<!-- Die Links müssen dann in die Src Variable der Video-Player Komponente übergeben werden sowie der Link zum Thumbnail eventuell-->
<!-- Maximal sollten pro Seite 10 Videos gezeigt werden und am besten mehrer Seiten angelegt werden-->
