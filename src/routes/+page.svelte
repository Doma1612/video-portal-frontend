<script>
	import Navbar from './Navbar.svelte';
	import MainMenu from './MainMenu.svelte';
	import Footer from './Footer.svelte';
	import Suchleiste from './Suchleiste.svelte';

	let istSuchbegriffEingegeben = false;

	function handleSuchbegriffEingegeben(event) {
		istSuchbegriffEingegeben = event.detail;
		console.log(istSuchbegriffEingegeben);
	}

	//import {Player, Video, DefaultUi,usePlayerStore, Embed} from '@vime/svelte';
</script>

<div class="header">
	<Navbar />
	<Suchleiste />
</div>

<div class="mt-10 body">
	<MainMenu on:istSuchbegriffEingegeben={handleSuchbegriffEingegeben} />
	<h1>{istSuchbegriffEingegeben}</h1>
</div>

<div>
	<Footer />
</div>
