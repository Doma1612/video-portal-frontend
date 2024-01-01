<script>
	import Footer from '../Footer.svelte';
import Navbar from '../Navbar.svelte';
	let name = '';
	let kategorieID = 0;
	let id = 0;
	let kategorie = '';
	let kategorien = [];

	const newCategory = {
		name: '',
		unterkategorien: []
	};

	const newUnterkategorie = {
		name,
		thema: {
			id,
			name,
			unterkategorien: []
		}
	};

	const updateCategory = {
		id,
		name,
		unterkategorien: []
	};

	function auswahlThema() {
		const selectedCategoryId = id;
		const selectedKategorie = kategorien.find((k) => k.id === selectedCategoryId);

		if (selectedKategorie) {
			newUnterkategorie.thema.id = selectedKategorie.id;
			newUnterkategorie.thema.name = selectedKategorie.name;
		}
	}
	async function getAllKategorien() {
		const response = await fetch(
			`http://131.173.88.197:8080/SP_Video_Portal_REST-0.0.1-SNAPSHOT/api/video/ladeAlleThemen`
		);
		const responseData = await response.json();
		kategorien = responseData;
		console.log(kategorien);
	}

	async function kategorieHinzufuegen() {
		newCategory.name = name;
		console.log(newCategory);

		if (!name) {
      window.alert('Bitte gebe einen Kategorienamne ein!');
      return;
		}

		try {
			const response = await fetch(
				`http://131.173.88.197:8080/SP_Video_Portal_REST-0.0.1-SNAPSHOT/api/video/themaAnlegen`,
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(newCategory)
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
		updateCategory.name = name;
		updateCategory.id = id;
		console.log(updateCategory.name + updateCategory.id);
		if (!name || !id ) {
      window.alert('Wähle eine Katgeorie und einen neuen Namen aus!');
      return;
		}
		try {
			const response = await fetch(
				`http://131.173.88.197:8080/SP_Video_Portal_REST-0.0.1-SNAPSHOT/api/video/themaUpdate`,
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(updateCategory)
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
		console.log(kategorie);

		if(!kategorieID) {
			window.alert("Wähle zunächst eine Kategorie aus!")
		}
		try {
			const response = await fetch(
				`http://131.173.88.197:8080/SP_Video_Portal_REST-0.0.1-SNAPSHOT/api/video/themaLoeschen/${kategorieID}`,
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

	async function unterkategorieHinzufuegen() {
		newUnterkategorie.name = name;
		newUnterkategorie.thema.id = id;
		console.log('Name ' + newUnterkategorie.name);
		console.log('ThemaID: ' + newUnterkategorie.thema.id);
		console.log('Name Thema: ' + newUnterkategorie.thema.name);
		console.log('unterkat: ' + newUnterkategorie.thema.unterkategorien);

		if(!id) {
			window.alert("Wähle zunächst eine Unterkategorie aus!");
		}

		if(!newUnterkategorie.name) {
			window.alert("Gebe eine Unterkategorie ein!")
		}
		try {
			const response = await fetch(
				`http://131.173.88.197:8080/SP_Video_Portal_REST-0.0.1-SNAPSHOT/api/video/uKategorieAnlegen`,
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(newUnterkategorie)
				}
			);

			console.log(response);

			if (response.ok) {
				console.log('Unterkategorie erfolgreich angelegt');
			} else {
				console.log('Fehler beim Anlegen der Unterkategorie');
			}
		} catch (error) {
			console.error('unterkategorieHinzufuegen() -Fehler ist aufgetreten: ', error);
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
		bind:value={name}
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
		bind:value={id}
		on:click={() => getAllKategorien()}
		on:change={auswahlThema}
		id="kategorie"
		class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
	>
		<option value="" disabled selected>Wähle eine Kategorie</option>
		{#each kategorien as Kategorie}
			<option value={Kategorie.id}>{Kategorie.name}</option>
		{/each}
	</select>

	<input
		class=" w-1/2 form-input p-2 border border-gray-300 rounded-lg hover:border-blue-500 focus:border-blue-500"
		bind:value={name}
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
		bind:value={kategorieID}
		on:click={() => getAllKategorien()}
		on:change
		id="kategorie"
		class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
	>
		<option value="" disabled selected>Wähle eine Kategorie</option>
		{#each kategorien as Kategorie}
			<option value={Kategorie.id}>{Kategorie.name}</option>
		{/each}
	</select>

	<button
		class="p-2 bg-red-500 text-white hover:bg-blue-700 rounded-lg mt-2 sm:mt-4 sm:float-right"
		on:click={kategorieLoeschen}>Löschen</button
	>

	<br /><br />
	<h3 class="text-xl font-bold text-gray-600">Unterkategorie anlegen</h3>
	<select
		name="kategorie"
		bind:value={id}
		on:click={() => getAllKategorien()}
		on:change={auswahlThema}
		id="kategorie"
		class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
	>
		<option value="" disabled selected>Wähle eine Kategorie</option>

		{#each kategorien as Kategorie}
			<option value={Kategorie.id}>{Kategorie.name}</option>
		{/each}
	</select>

	<input
		class=" w-1/2 form-input p-2 border border-gray-300 rounded-lg hover:border-blue-500 focus:border-blue-500"
		bind:value={newUnterkategorie.name}
		placeholder="Unterkategorie hinzufügen"
	/>

	<button
		class="p-2 bg-green-500 text-white hover:bg-blue-700 rounded-lg mt-2 sm:mt-4 sm:float-right"
		on:click={unterkategorieHinzufuegen}>Anlegen</button
	>
</div>
<Footer />
