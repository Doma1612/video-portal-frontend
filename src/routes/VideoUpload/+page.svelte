<script>
	import Navbar from '../Navbar.svelte';
	let titel = '';
	let beschreibung = '';
	let stichwoerter = '';
	let kategorie = '';
	let testdaten = [];

	async function sample() {
		const response = await fetch(`https://api.predic8.de/shop/v2/products`);
		const responseData = await response.json();
		testdaten = responseData;
		console.log(testdaten);
	}

	async function videoHochladen() {
		console.log(titel + ' ' + beschreibung + ' ' + stichwoerter);
		const res = await fetch(
			`http://131.173.88.197:8080/videoPortalREST/api/video/videoHochladen/${titel}/${beschreibung}/${kategorie}`,
			{
				method: 'POST',
				//body: formData,
				headers: {
					'Content-Type': 'application/json'
				}
			}
		);
		const json = await res.json();
		console.log(json);
	}

	//const file = fileInput.files[0];
	//const formData = new FormData();
	//formData.append('file', file);
</script>

<div>
	<Navbar />
</div>

<div
	class="w-full sm:w-1/2 md:w-1/4 lg:w-1/2 xl:w-full border border-dotted border-gray-400 bg-gray-100 p-4 rounded-md mx-auto my-4 sm:my-2 lg:my-4 xl:my-40"
>
	<h1 class="text-3xl font-bold text-gray-600 text-center">Video hochladen</h1>
	<form method="post" id="videoForm" enctype="multipart/form-data">
		<div class="my-8 sm:my-4">
			<input
				type="file"
				accept="video/*"
				class="form-input p-2 border border-gray-300 rounded-lg hover:border-blue-500 focus:border-blue-500"
			/>
			<button
				on:click={sample}
				class="p-2 bg-blue-500 text-white hover:bg-blue-700 rounded-lg mt-2 sm:mt-0"
				>Video hochladen</button
			>
		</div>

		<div class="my-8 sm:my-4">
			<input
				type="file"
				accept="image/*"
				class="form-input p-2 border border-gray-300 rounded-lg hover:border-blue-500 focus:border-blue-500"
			/>
			<button
				on:click={videoHochladen}
				class="p-2 bg-blue-500 text-white hover:bg-blue-700 rounded-lg mt-2 sm:mt-0"
				>Thumbnail hochladen</button
			>
		</div>

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
			id="kategorie"
			class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
		>
			<option value="Test1">Volvo</option>
			<option value="Test1">Saab</option>
			<option value="Test1">Mercedes</option>
			<option value="Test1">Audi</option>
		</select>
		<h3 class="text-xl font-bold text-gray-600">Stichwörter</h3>
		<input
			type="text"
			bind:value={stichwoerter}
			placeholder="Stichwörter (durch Kommas getrennt)"
			class="form-input w-full p-2 border border-gray-300 rounded-lg hover:border-blue-500 focus:border-blue-500 my-2 sm:my-4"
		/>
	</form>

	<button
		on:click={sample}
		class="p-2 bg-blue-500 text-white hover:bg-blue-700 rounded-lg mt-2 sm:mt-4 sm:float-right"
		>Upload</button
	>
</div>
