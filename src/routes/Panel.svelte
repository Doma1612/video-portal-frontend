<script>
    export let title = '';
    export let linkTo = '';
    export let beschreibung = '';
	export let videoAction = '';
	export let videoAufrufe = '';


</script>
<a href={linkTo}>
<div class="bg-white p-8 rounded-lg shadow-xl w-80 transition-transform transform hover:scale-105">
    
	<h2 class="text-xl font-semibold mb-4">{title}</h2>
	<p class="text-gray-600">{beschreibung}</p>
	<br>
	<p class="text-gray-600"> {videoAufrufe}</p>
	<p class="text-gray-600 font-bold">{videoAction}</p>
	<div class="mt-4">
	</div>
</div>
</a>