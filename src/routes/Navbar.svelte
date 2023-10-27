<script>
	let Suchbegriff = '';

	function videoNachTitelSuchen() {
		console.log(Suchbegriff);
		// Hier muss der Suchbegriff dafür verwendet werden, eine Suche nach einem bestimmten Stichwort zuzulassen.
		// Ein Zugriff auf einen API-Endpunkt der EJB Video muss erfolgen
	}

	import logo from '$lib/logo_video_portal.png';
</script>

<div>
	<nav class="bg-white-500">
		<div class="max-w-5xl mx-auto flex justify-between items-center">
			<a href="/"> <img src={logo} alt="Logo" class="w-40 h-22" /></a>
			<div class="flex items-center space-x-20">
				<ul class="list-none flex space-x-20">
					<li><a href="/" class="text-black font-bold">Start</a></li>
					<li><a href="/themen" class="text-black font-bold">Themen</a></li>
					<li><a href="/VideoUpload" class="text-black font-bold">Video hochladen</a></li>
				</ul>
			</div>
			<div>
				<!--Quelle: https://v1.tailwindcss.com/components/buttons-->
				<button
					><a
						href="/login"
						class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
						>Login</a
					></button
				>
			</div>
		</div>
	</nav>
	<div
		class=" max-w-5xl mx-auto rounded-full border border-black bg-white-200 p-2 flex hover:bg-gray-200 transition ease-out delay-50 shadow"
	>
		<input
			class="w-full rounded-full bg-transparent focus:outline-none"
			type="text"
			placeholder="Suche"
			bind:value={Suchbegriff}
		/>
		<button
			on:click={videoNachTitelSuchen}
			class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-2 border border-gray-400 rounded-full shadow"
			>Suchen</button
		>
	</div>
</div>
