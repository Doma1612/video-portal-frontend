<script>
	import Navbar from '../Navbar.svelte';
	import VideoPlayer from '../VideoPlayer.svelte';
	let titel = '';
	let beschreibung = '';
	let stichwoerter = '';
	let kategorie = '';
	let file;
	let unterkategorien = 'Test';
	let dateiEndung = 'mp4';
	/** @type {FileList}*/
	let files;
	let kategorien = [];
	let videoSrc = '';

	async function getAllKategorien() {
		const response = await fetch(
			`http://131.173.88.197:8080/SP_Video_Portal_REST-0.0.1-SNAPSHOT/api/video/ladeAlleThemen`
		);
		const responseData = await response.json();
		kategorien = responseData;
		console.log(kategorien);
	}
	async function videoUpload() {
		console.log(titel + ' ' + beschreibung + ' ' + kategorie + ' ' + stichwoerter);

		if (file) {
			const reader = new FileReader();

			reader.onload = async () => {
				const bitarray = reader.result;
				const bitUnit8 = new Uint8Array(bitarray);
				console.log('BIT:  ' + bitUnit8);
				await fetch(
					`http://131.173.88.197:8080/SP_Video_Portal_REST-0.0.1-SNAPSHOT/api/video/videoHinzufuegen/${dateiEndung}/${titel}/${kategorie}/${beschreibung}/${stichwoerter}/${unterkategorien}`,
					{
						method: 'POST',
						headers: {
							'Content-Type': 'application/octet-stream'
						},
						body: bitUnit8
					}
				)
					.then(async (response) => {
						if (response.ok) {
							console.log('Video wurde hochgeladen');
						} else {
							console.error('Fehler beim VideoUpload');
						}
					})
					.catch((error) => {
						if (error) {
							console.error('Fehler');
						}
					});
			};

			reader.readAsArrayBuffer(file);
		}
	}

	/* 
	async function videoHochladen() {
		
		console.log(files);
		// Ausgabe Rest
		console.log(titel + ' ' + beschreibung + ' ' + kategorie + ' ' + stichwoerter);

		const res = await fetch(
			`http://131.173.88.197:8080/SP_Video_Portal_REST-0.0.1-SNAPSHOT/api/video/videoHinzufuegen/${dateiEndung}/${titel}/${kategorie}/${beschreibung}/${stichwoerter}/${unterkategorien}`,
			{
				method: 'POST',
				//body: json,
				headers: {
					'Content-Type': 'application/json'
				}
			}
		);

		//if (res.ok) {
		//	console.log(res.status);
		//}
		//const json = await res.json();
		//console.log(json);
	} */

	function handleFileChange(event) {
		file = event.target.files[0];

		if (file) {
			const reader = new FileReader();

			reader.onload = () => {
				videoSrc = reader.result;
			};
			reader.readAsDataURL(file);
			//convertedFile = new Uint8Array(event.target.files[0]);
			//console.log(convertedFile);
			//reader.readAsBinaryString(file);
			console.log(videoSrc);
		}
	}
</script>

<div>
	<Navbar />
</div>

<div
	class="w-full sm:w-1/2 md:w-1/4 lg:w-1/2 xl:w-full border border-dotted border-gray-400 bg-gray-100 p-4 rounded-md mx-auto my-4 sm:my-2 lg:my-4 xl:my-40"
>
	<h1 class="text-3xl font-bold text-gray-600 text-center">Video hochladen</h1>
	<!-- Formular video/*-->

	<form id="videoForm" enctype="multipart/form-data">
		<div class="my-8 sm:my-4">
			<input
				type="file"
				bind:files
				on:change={handleFileChange}
				id="file"
				accept="video/mp4"
				class="form-input p-2 border border-gray-300 rounded-lg hover:border-blue-500 focus:border-blue-500"
				required
			/>
			<button class="p-2 bg-blue-500 text-white hover:bg-blue-700 rounded-lg mt-2 sm:mt-0"
				>Video hochladen</button
			>
		</div>

		<!-- <div class="my-8 sm:my-4">
			<input
				type="file"
				accept="image/*"
				class="form-input p-2 border border-gray-300 rounded-lg hover:border-blue-500 focus:border-blue-500"
			/>
			
			<button
				
				class="p-2 bg-blue-500 text-white hover:bg-blue-700 rounded-lg mt-2 sm:mt-0"
				>Thumbnail hochladen</button
			>
		</div> -->

		<h3 class="text-xl font-bold text-gray-600 sm:my-2">Titel</h3>
		<input
			type="text"
			placeholder="Titel"
			bind:value={titel}
			class="form-input w-full p-2 border border-gray-300 rounded-lg hover:border-blue-500 focus:border-blue-500"
		/>
		<h3 class="text-xl font-bold text-gray-600">Beschreibung</h3>
		<input
			type="text"
			placeholder="Beschreibung"
			bind:value={beschreibung}
			class="form-input w-full p-2 border border-gray-300 rounded-lg hover:border-blue-500 focus:border-blue-500"
		/>

		<h3 class="text-xl font-bold text-gray-600">Suche eine Kategorie aus:</h3>

		<select
			name="kategorie"
			bind:value={kategorie}
			on:click={() => getAllKategorien()}
			id="kategorie"
			class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
		>
			<option value="" disabled selected>Wähle eine Kategorie</option>
			{#each kategorien as Kategorie}
				<option value={Kategorie.name}>{Kategorie.name}</option>
			{/each}
		</select>
		<h3 class="text-xl font-bold text-gray-600">Stichwörter</h3>
		<input
			type="text"
			bind:value={stichwoerter}
			placeholder="Stichwörter (durch Kommas getrennt)"
			class="form-input w-1/2 p-2 border border-gray-300 rounded-lg hover:border-blue-500 focus:border-blue-500 my-2 sm:my-4"
		/>

		<button
			on:click={videoUpload}
			class="p-2 bg-blue-500 text-white hover:bg-blue-700 rounded-lg mt-2 sm:mt-4 sm:float-right"
			>Upload</button
		>
	</form>
</div>

<VideoPlayer
	src={videoSrc}
	poster="https://storage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"
></VideoPlayer>
