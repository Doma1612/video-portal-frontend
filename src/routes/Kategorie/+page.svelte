<script>
	import Navbar from '../Navbar.svelte';
	let newCategoryName = '';
	let kategorieID = 0;
	let kategorie = '';
	let testArrayKategorie = ['Organisatorisches', 'E-Learning', 'Tutorials', 'Onboarding'];

	async function kategorieHinzufuegen() {
		try {
			const response = await fetch(
				`http://localhost:8080/videoPortal/api/kategorieHinzufuegen/${kategorie}`,
				{
					method: 'GET',
					headers: {
						'Content-Type': 'application/json'
					}
				}
			);

			console.log(response);

			if (response.ok) {
				console.log('Kategorie erfolgreich angelegt');
			} else {
				console.log('Fehler beim Anlegen der Kategorie');
			}
		} catch (error) {
			console.error('kategorieHinzufuegen() -Fehler ist aufgetreten: ', error);
		}
	}

	async function kategorieAendern() {
		try {
			const response = await fetch(
				`http://localhost:8080/videoPortal/api/kategorieAendern/${kategorieID}/${newCategoryName}`,
				{
					method: 'GET',
					headers: {
						'Content-Type': 'application/json'
					}
				}
			);

			console.log(response);

			if (response.ok) {
				console.log('Kategorie erfolgreich geändert');
			} else {
				console.log('Fehler beim Ändern der Kategorie');
			}
		} catch (error) {
			console.error('kategorieAendern() -Fehler ist aufgetreten: ', error);
		}
	}

	async function kategorieLoeschen() {
		try {
			const response = await fetch(
				`http://localhost:8080/videoPortal/api/kategorieLoeschen/${kategorieID}`,
				{
					method: 'GET',
					headers: {
						'Content-Type': 'application/json'
					}
				}
			);

			console.log(response);

			if (response.ok) {
				console.log('Kategorie erfolgreich gelöscht');
			} else {
				console.log('Fehler beim Löschen der Kategorie');
			}
		} catch (error) {
			console.error('kategorieLoeschen() - Fehler ist aufgetreten: ', error);
		}
	}
</script>

<Navbar />

<!-- Kategorie anlegen -->
<div
	class="w-full sm:w-1/2 md:w-1/4 lg:w-1/2 xl:w-full border border-dotted border-gray-400 bg-gray-100 p-4 rounded-md mx-auto sm:my-2 lg:my-4 xl:my-40"
>
	<h3 class="text-xl font-bold text-gray-600">Kategorie hinzufügen</h3>
	<input
		class="form-input p-2 border border-gray-300 rounded-lg hover:border-blue-500 focus:border-blue-500"
		bind:value={newCategoryName}
		placeholder="Neue Kategorie eingeben"
	/>
	<button
		class="p-2 bg-blue-500 text-white hover:bg-blue-700 rounded-lg mt-2 sm:mt-4 sm:float-right"
		on:click={kategorieHinzufuegen}>Hinzufügen</button
	>

	<br /><br />

	<!-- Kategorien ändern-->
	<h3 class="text-xl font-bold text-gray-600">Kategorie umbenennen</h3>
	<select
		name="kategorie"
		bind:value={kategorie}
		id="kategorie"
		class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
	>
		<option value="" disabled selected>Wähle eine Kategorie</option>
		{#each testArrayKategorie as Kategorie}
			<option value={Kategorie}>{Kategorie}</option>
		{/each}
	</select>

	<input
		class=" w-1/2 form-input p-2 border border-gray-300 rounded-lg hover:border-blue-500 focus:border-blue-500"
		bind:value={newCategoryName}
		placeholder="Neuen Kategorienamen eingeben"
	/>
	<button
		class="p-2 bg-blue-500 text-white hover:bg-blue-700 rounded-lg mt-2 sm:mt-4 sm:float-right"
		on:click={kategorieAendern}>Umbenennen</button
	>

	<!-- Kategorie löschen -->
	<br /><br />
	<h3 class="text-xl font-bold text-gray-600">Kategorie löschen</h3>
	<select
		name="kategorie"
		bind:value={kategorie}
		id="kategorie"
		class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
	>
		<option value="" disabled selected>Wähle eine Kategorie</option>
		{#each testArrayKategorie as Kategorie}
			<option value={Kategorie}>{Kategorie}</option>
		{/each}
	</select>

	<button
		class="p-2 bg-red-500 text-white hover:bg-blue-700 rounded-lg mt-2 sm:mt-4 sm:float-right"
		on:click={kategorieLoeschen}>Löschen</button
	>
</div>
