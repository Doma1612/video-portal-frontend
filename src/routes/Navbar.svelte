<script>
	import logo from '$lib/Logo.svg';

	//import Suchleiste from './Suchleiste.svelte';
</script>

<div>
	<nav class="bg-white-500">
		<div class="max-w-5xl mx-auto flex justify-between items-center">
			<a href="/"> <img src={logo} alt="Logo" class="w-40 h-22" /></a>
			<div class="flex items-center space-x-20">
				<ul class="list-none flex space-x-20">
					<li><a href="/" class="text-black font-bold">Start</a></li>
					<li><a href="/themen" class="text-black font-bold">Videosuche</a></li>
					<li><a href="/VideoUpload" class="text-black font-bold">Video hochladen</a></li>
					<li><a href="/Kategorie" class="text-black font-bold">Kategorien</a></li>
				</ul>
			</div>
			<div>
				<!--Quelle: https://v1.tailwindcss.com/components/buttons-->
				<button
					><a
						href="/registrierung"
						class="bg-gray-100 hover:bg-blue-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
						>Registrieren</a
					></button
				>
			</div>
			<div>
				<!--Quelle: https://v1.tailwindcss.com/components/buttons-->
				<button>
					<a
						href="/login"
						class="bg-gray-100 hover:bg-blue-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
						>Login</a>
				</button>
			</div>
		</div>
	</nav>
</div>
