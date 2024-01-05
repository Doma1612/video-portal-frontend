<script>
	import VideoPlayer from './VideoPlayer.svelte';
	import Panel from './Panel.svelte';

	//let anzahlAufrufe = 0;

	//async function aufrufCounter() {
	//	anzahlAufrufe++;

	//Endpunkt/{videoID}

	//const form = document.querySelector('form');

	// const formData = new FormData();
	//const fileField = document.querySelector('input[type="file"]');

	//formData.append("video", fileField.files[0]);
	//}
</script>
<body class="flex justify-center items-center min-h-screen bg-blue-100">

    <div class="p-4 md:p-8 lg:p-12 xl:p-20 mr-24">

        <div class="max-w-2xl mx-auto flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-12">
            <Panel title="Videosuche" linkTo="/themen" beschreibung="Gebe einen Suchbegriff ein und finde alle Videos nach Thema und Beschreibung"></Panel>
            <Panel title="Videoupload" linkTo="/VideoUpload" beschreibung="Lade Videos in sämtlichen Formaten hoch. Hierfür ist ein Adminzugang notwendig"></Panel>
            <Panel title="Kategorien verwalten" linkTo="/Kategorie" beschreibung="Hier kannst du Kategorien anlegen, ändern und löschen sowie Unterkategorien hinzufügen."></Panel>
        </div>
        <br><br>

        <div class="max-w-2xl mx-auto flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-12">
            <Panel title="Kontakt" linkTo="/Kontakt" beschreibung="Gebe einen Suchbegriff ein und finde alle Videos nach Thema und Beschreibung"></Panel>
            <Panel title="Registrieren" linkTo="/registrierung" beschreibung="Lade Videos in sämtlichen Formaten hoch. Hierfür ist ein Adminzugang notwendig"></Panel>
            <Panel title="Login" linkTo="/login" beschreibung="Hier kannst du Kategorien anlegen, ändern und löschen sowie Unterkategorien hinzufügen."></Panel>
        </div>
    </div>

    <div class="p-4 md:p-8 lg:p-12 xl:p-20">
        
    </div>
	</body>


