<script>
	import Navbar from '../Navbar.svelte';

	async function videoHochladen() {
		console.log('Hello');
	}
</script>

<div>
	<Navbar />
</div>

<div class="w-1/2 border border-dotted border-gray-400 bg-gray-100 p-4 rounded-md mx-auto my-40">
	<h1 class="text-3xl font-bold text-gray-600 text-center items-center>Video hochladen">
		Video hochladen
	</h1>
	<input
		type="file"
		accept="video/*"
		class="form-input p-2 my-8 border border-gray-300 rounded-lg hover:border-blue-500 focus:border-blue-500"
	/>

	<button on:click={videoHochladen} class="p-2 bg-blue-500 text-white hover:bg-blue-700 rounded-lg"
		>Video hochladen</button
	>

	<input
		type="file"
		accept="image/*"
		class="form-input p-2 border border-gray-300 rounded-lg hover:border-blue-500 focus:border-blue-500"
	/>

	<button on:click={videoHochladen} class="p-2 bg-blue-500 text-white hover:bg-blue-700 rounded-lg"
		>Thumbnail hochladen</button
	>

	<h3 class="text-1xl font-bold text-gray-600">Titel</h3>
	<input
		type="text"
		placeholder="Titel"
		class="form-input p-2 my-4 border border-gray-300 rounded-lg hover:border-blue-500 focus:border-blue-500"
	/>
	<h3 class="text-1xl font-bold text-gray-600">Beschreibung</h3>
	<input
		type="text"
		placeholder="Beschreibung"
		class="form-input p-2 my-4 border border-gray-300 rounded-lg hover:border-blue-500 focus:border-blue-500"
	/>
	<h3 class="text-1xl font-bold text-gray-600">Stichwörter</h3>
	<input
		type="text"
		placeholder="Stichwörter (durch Kommas getrennt)"
		class="form-input p-2 my-4 border border-gray-300 rounded-lg hover:border-blue-500 focus:border-blue-500 my-auto"
	/>
	<button
		on:click={videoHochladen}
		class="p-2 bg-blue-500 text-white hover:bg-blue-700 rounded-lg float-right">Upload</button
	>
</div>
