<script>
	import VideoPlayer from './VideoPlayer.svelte';

	//let anzahlAufrufe = 0;

	//async function aufrufCounter() {
	//	anzahlAufrufe++;

	//Endpunkt/{videoID}

	//}
</script>

<div class="p-4 md:p-8 lg:p-12 xl:p-20">
	<div class="text-center">
		<h1 class="text-3xl font-bold text-gray-600">Beliebte Videos</h1>
	</div>
	<div
		class="max-w-2xl mx-auto flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-12"
	>
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
	<div class="text-center mt-8">
		<h1 class="text-3xl font-bold text-gray-600">Kürzlich hinzugefügt</h1>
	</div>
	<div
		class="max-w-2xl mx-auto flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 items-center lg:space-x-10 xl:space-x-12"
	>
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
