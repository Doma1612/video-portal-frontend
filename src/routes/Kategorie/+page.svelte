<script>
	import Footer from '../Footer.svelte';
    import Navbar from '../Navbar.svelte';
    import { userRole } from '$lib/store';
    import LoginComponent from '../LoginComponent.svelte';
	let name = '';
	let updateName = '';
	let unterkategorienName = '';
	let kategorieID = 0;
	let id = 0;
	let idU = 0;
	let kategorie = '';
	let kategorien = [];
    let userRolleValue = $userRole;

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
				window.alert('Kategorie erfolgreich angelegt!');
				name = '';
			} else {
				console.log('Fehler beim Anlegen der Kategorie');
				window.alert('Fehler beim Anlegen der Kategorie');
			}
		} catch (error) {
			console.error('kategorieHinzufuegen() -Fehler ist aufgetreten: ', error);
			window.alert('Es ist ein Fehler aufgetreten. Versuche es noch einmal.');
		}
	}

	async function kategorieAendern() {
		updateCategory.name = updateName;
		updateCategory.id = id;
		console.log("Die Kategorie wurde zu "+updateName+ " umbenannt");
		if (!updateName || !id ) {
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
				window.alert('Kategorie erfolgreich geändert!');
				updateName = '';
			} else {
				console.log('Fehler beim Ändern der Kategorie');
				window.alert('Fehler beim Ändern der Kategorie');
			}
		} catch (error) {
			console.error('kategorieAendern() -Fehler ist aufgetreten: ', error);
			window.alert('Fehler beim Ändern der Kategorie');
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
				window.alert("Kategorie erfolgreich gelöscht!");
			} else {
				if(response.status === 500) {
					window.alert("Diese Kategorie hat bereits Unterkategorien und kann nicht gelöscht werden!")
				}
				console.log('Fehler beim Löschen der Kategorie');
				window.alert("Fehler beim Löschen der Kategorie!");
			}

			
		} catch (error) {
			console.error('kategorieLoeschen() - Fehler ist aufgetreten: ', error);
			window.alert("Fehler beim Löschen der Kategorie!");
		}
	}

	async function unterkategorieHinzufuegen() {
        
		
		newUnterkategorie.name = unterkategorienName;
		newUnterkategorie.thema.id = idU;
		
		

		if(!idU) {
			window.alert("Wähle zunächst eine Unterkategorie aus!");
		}

		if(!newUnterkategorie.thema.name) {
			window.alert("Gebe einen Unterkategorienamen ein!")
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
				window.alert("Unterkategorie erfolgreich angelegt");
				unterkategorienName = '';
			} else {
				console.log('Fehler beim Anlegen der Unterkategorie');
				window.alert("Fehler beim Anlegen der Unterkategorie");
			}
		} catch (error) {
			console.error('unterkategorieHinzufuegen() -Fehler ist aufgetreten: ', error);
			window.alert("Unterkategorie erfolgreich angelegt");
		}
	}
</script>



<!-- Kategorie anlegen -->


<!-- Kategorie anlegen -->
{#if $userRole == 1}
<Navbar />
<div class="w-full sm:w-full md:w-3/4 lg:w-1/2 xl:w-3/4 mx-auto my-4">
  <div class="bg-gray-100 p-4 rounded-md border border-dotted border-gray-400">
    <h3 class="text-xl font-bold text-gray-600 mb-4">Kategorie hinzufügen</h3>
    <div class="flex items-center">
      <input
        class="flex-grow form-input p-2 border border-gray-300 rounded-lg hover:border-blue-500 focus:border-blue-500 mr-2"
        bind:value={name}
        placeholder="Neue Kategorie eingeben"
      />
      <button
        class="p-2 bg-blue-500 text-white hover:bg-blue-600 rounded-lg "
        on:click={kategorieHinzufuegen}>Hinzufügen
      </button>
    </div>
    <br /><br />

    <!-- Kategorien ändern-->
    <h3 class="text-xl font-bold text-gray-600 mb-4">Kategorie umbenennen</h3>
    <div class="flex items-center">
      <select
        name="kategorie"
        bind:value={id}
        on:click={() => getAllKategorien()}
        on:change={auswahlThema}
        id="kategorie"
        class="flex-grow bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 mr-2"
      >
        <option value="" disabled selected>Wähle eine Kategorie</option>
        {#each kategorien as Kategorie}
          <option value={Kategorie.id}>{Kategorie.name}</option>
        {/each}
      </select>
      <input
        class="flex-grow form-input p-2 border border-gray-300 rounded-lg hover:border-blue-500 focus:border-blue-500 mr-2"
        bind:value={updateName}
        placeholder="Neuen Kategorienamen eingeben"
      />
      <button
        class="p-2 bg-blue-500 text-white hover:bg-blue-600 rounded-lg"
        on:click={kategorieAendern}>Umbenennen
      </button>
    </div>

    <!-- Kategorie löschen -->
    <br /><br />
    <h3 class="text-xl font-bold text-gray-600 mb-4">Kategorie löschen</h3>
    <div class="flex items-center">
      <select
        name="kategorie"
        bind:value={kategorieID}
        on:click={() => getAllKategorien()}
        on:change
        id="kategorie"
        class="flex-grow bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 mr-2"
      >
        <option value="" disabled selected>Wähle eine Kategorie</option>
        {#each kategorien as Kategorie}
          <option value={Kategorie.id}>{Kategorie.name}</option>
        {/each}
      </select>
      <button
        class="p-2 bg-red-500 text-white hover:bg-red-700 rounded-lg"
        on:click={kategorieLoeschen}>Löschen
      </button>
    </div>

    <br /><br />
    <h3 class="text-xl font-bold text-gray-600 mb-4">Unterkategorie anlegen</h3>
    <div class="flex items-center">
      <select
        name="kategorie"
        bind:value={idU}
        on:click={() => getAllKategorien()}
        on:change={auswahlThema}
        id="kategorie"
        class="flex-grow bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 mr-2"
      >
        <option value="" disabled selected>Wähle eine Kategorie</option>
        {#each kategorien as KategorieU}
          <option value={KategorieU.id}>{KategorieU.name}</option>
        {/each}
      </select>
      <input
        class="w-1/2 form-input p-2 border border-gray-300 rounded-lg hover:border-blue-500 focus:border-blue-500 mr-2"
        bind:value={unterkategorienName}
        placeholder="Unterkategorie hinzufügen"
      />
      <button
        class="p-2 bg-green-500 text-white hover:bg-green-700 rounded-lg"
        on:click={unterkategorieHinzufuegen}>Anlegen
      </button>
    </div>
  </div>
</div>
<Footer />
{:else}
<LoginComponent benötigteRolle = "Admin-Account notwendig" />
{/if}

