<script>
	import Footer from '../Footer.svelte';
import Navbar from '../Navbar.svelte';
import { userRole } from '$lib/store';
import LoginComponent from '../LoginComponent.svelte';
import { goto } from '$app/navigation';
	import VideoPlayer from '../VideoPlayer.svelte';
	let titel = '';
	let beschreibung = '';
	let selectedCategoryId = null;
	let successmessage='';
	let stichwoerter = '';
	let kategorie = '';
	let unterkategorie = '';
	let file;
	//let unterkategorien = 'Test';
	let unterkategorien = [];
	let dateiEndung = '';
	/** @type {FileList}*/
	let files;
	let kategorien = [];
	let videoSrc = '';
	let userRolleValue = $userRole;

	async function getAllKategorien() {
		const response = await fetch(
			`http://131.173.88.197:8080/SP_Video_Portal_REST-0.0.1-SNAPSHOT/api/video/ladeAlleThemen`
		);
		const responseData = await response.json();
		kategorien = responseData;
		console.log(kategorien);
	}

	async function dateiEndungHolen(datei) {
		
		return datei.split('.').pop().toLowerCase();
	}

	async function getAllUntrkategorien() {
		const response = await fetch(
			'http://131.173.88.197:8080/SP_Video_Portal_REST-0.0.1-SNAPSHOT/api/video/ladeAlleUnterkategorien'
		);
		const responseData = await response.json();
		unterkategorien = responseData;
		console.log(unterkategorien);
	}
	async function videoUpload() {
		console.log(titel + ' ' + beschreibung + ' ' + kategorie + ' ' + stichwoerter + ' '+ dateiEndung);
        if (!titel || !beschreibung || !kategorie || !stichwoerter) {
      window.alert('Nicht alle Felder wurden ausgefüllt!');
      return;
		}
		if (file) {
			const reader = new FileReader();

			

			reader.onload = async () => {
				const bitarray = reader.result;
				const bitUnit8 = new Uint8Array(bitarray);
				console.log('BIT:  ' + bitUnit8);
				//dateiEndung = dateiEndungHolen(file);
				console.log(dateiEndung)
				window.alert('Video wird hochgeladen...');
				await fetch(
					`http://131.173.88.197:8080/SP_Video_Portal_REST-0.0.1-SNAPSHOT/api/video/videoHinzufuegen/${dateiEndung}/${titel}/${kategorie}/${beschreibung}/${stichwoerter}/${unterkategorie}`,
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
							
							setTimeout(() => {	
                            goto('/');
                            }, 2000);
							window.alert('Video wurde erfolgreich hochgeladen! Möchten Sie die Seite neu laden?');

						} else {
							console.error('Fehler beim VideoUpload');
							window.alert("Fehler beim Uplaod. Versuchen Sie es erneut.")
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

	function updateSelectedCategoryId() {
		const selectedKategorie = kategorien.find((kat) => kat.name === kategorie);

		selectedCategoryId = selectedKategorie && selectedKategorie.id;
		console.log(selectedCategoryId);
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

	async function handleFileChange(event) {
		file = event.target.files[0];

		if (file) {
			const reader = new FileReader();

			reader.onload = () => {
				videoSrc = reader.result;
			};
			reader.readAsDataURL(file);

			dateiEndung = await dateiEndungHolen(file.name);
            console.log('Dateiendung :', dateiEndung);
			//convertedFile = new Uint8Array(event.target.files[0]);
			//console.log(convertedFile);
			//reader.readAsBinaryString(file);
			console.log(videoSrc);
		}
	}
</script>
{#if $userRole == 1}
<div>
	<Navbar />
</div>

<div class="w-full sm:w-5/6 md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto my-4 border border-dotted border-gray-40 rounded-md bg-gray-100">
	<h1 class="text-3xl font-bold text-gray-600 text-center">Video hochladen</h1>
	

	<form id="videoForm" enctype="multipart/form-data" class="my-4">
		<div class="my-4">
			<input
				type="file"
				bind:files
				on:change={handleFileChange}
				id="file"
				accept="video/*"
				class="form-input p-2 border border-gray-300 rounded-lg hover:border-blue-500 focus:border-blue-500"
				required
			/>
			<button class="p-2 bg-blue-500 text-white hover:bg-blue-700 rounded-lg mt-2 w-full sm:w-auto"
				>Video hochladen</button
			>
		</div>

		<h3 class="text-xl font-bold text-gray-600 my-2">Titel</h3>
		<input
			type="text"
			placeholder="Titel"
			bind:value={titel}
			class="form-input w-full p-2 border border-gray-300 rounded-lg hover:border-blue-500 focus:border-blue-500"
		/>
		<h3 class="text-xl font-bold text-gray-600 my-2">Beschreibung</h3>
		<input
			type="text"
			placeholder="Beschreibung"
			bind:value={beschreibung}
			class="form-input w-full p-2 border border-gray-300 rounded-lg hover:border-blue-500 focus:border-blue-500"
		/>

		<h3 class="text-xl font-bold text-gray-600 my-2">Suche eine Kategorie aus:</h3>

		<select
			name="kategorie"
			bind:value={kategorie}
			on:click={() => getAllKategorien()}
			on:change={() => updateSelectedCategoryId()}
			id="kategorie"
			class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
		>
			<option value="" disabled selected>Wähle eine Kategorie</option>
			{#each kategorien as Kategorie}
				<option value={Kategorie.name}>{Kategorie.name}</option>
			{/each}
		</select>

		<h3 class="text-xl font-bold text-gray-600 my-2">Suche eine Unterkategorie aus:</h3>

		<select
			name="unterkategorie"
			bind:value={unterkategorie}
			on:click={() => getAllUntrkategorien()}
			id="kategorie"
			class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
		>
			<option value="" disabled selected>Wähle eine Unterkategorie</option>
			{#each unterkategorien as unterkategorie}
				{#if unterkategorie.thema.id == selectedCategoryId}
					<option value={unterkategorie.name}>{unterkategorie.name}</option>
				{/if}
			{/each}
		</select>
		<h3 class="text-xl font-bold text-gray-600 my-2">Stichwörter</h3>
		<input
			type="text"
			bind:value={stichwoerter}
			placeholder="Stichwörter (durch Kommas getrennt)"
			class="form-input w-full p-2 border border-gray-300 rounded-lg hover:border-blue-500 focus:border-blue-500"
		/>

		<button
			on:click={videoUpload}
			class="w-full p-2 bg-blue-500 text-white hover:bg-blue-700 rounded-lg mt-2 sm:w-auto"
			>Upload</button
		>
	</form>
</div>
<Footer />
{:else}
<LoginComponent benötigteRolle = "Admin-Account notwendig" />
{/if}
