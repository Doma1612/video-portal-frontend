<script>
	import VideoPlayer from './VideoPlayer.svelte';
</script>

<!-- Hier würde es sich eignen, eine randomisierte Auswahl an Videos je nach Kategorie aufzuzigen-->
<div class="p-20">
	<div>
		<h1 class="text-3xl font-bold text-gray-600 text-center items-center">Beliebte Videos</h1>
	</div>
	<div class="max-w-3xl p-10 flex space-x-12">
		<VideoPlayer
			src="http://videos-cdn.mozilla.net/serv/flux/playdoh/playdoh-overview.webm"
			poster="https://storage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"
		></VideoPlayer>
		<VideoPlayer
			src="https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
			poster="https://i.ytimg.com/vi/rt-Zx-JHSyg/hqdefault.jpg"
		></VideoPlayer>
		<VideoPlayer
			src="https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
			poster="https://storage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"
		></VideoPlayer>
	</div>
	<div>
		<h1 class="text-3xl font-bold text-gray-600 text-center">Kürzlich hinzugefügt</h1>
	</div>
	<div class="max-w-3xl p-10 flex space-x-10 items-center">
		<VideoPlayer
			src="https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
			poster="https://i.ytimg.com/vi/rt-Zx-JHSyg/hqdefault.jpg"
		></VideoPlayer>
		<VideoPlayer
			src="https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
			poster="https://storage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"
		></VideoPlayer>
		<VideoPlayer
			src="https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
			poster="https://i.ytimg.com/vi/rt-Zx-JHSyg/hqdefault.jpg"
		></VideoPlayer>
	</div>
</div>
