<script>
    /** @type {import('./$types').PageData} */
    export let data;
    import Navbar from "../Navbar.svelte";
    import Footer from '../Footer.svelte';
</script>
<Navbar />


<body>
    <div class="datenschutzerklaerung">
        <h1 class="text-3xl block font-semibold py-5 px-1.5">Datenschutzerklärung</h1>
        <br>
        <p><b>1. Allgemeine Informationen: </b></p>
        <p> WISO Video-Portal nimmt den Schutz Ihrer persönlichen Daten ernst. Diese Datenschutzerklärung informiert Sie darüber, wie wir Ihre personenbezogenen Daten erfassen, verwenden, weitergeben und schützen, wenn Sie unsere Website besuchen und die angebotenen Dienste nutzen.</p>
        <br>
        <p><b>2. Erfassung und Verwendung von personenbezogenen Daten:</b></p>
        <p><b>a. Registrierung und Anmeldung:</b></p>
        <p>Bei der Registrierung und Anmeldung auf unserer Website erfassen wir personenbezogene Daten wie Ihren Namen, Ihre E-Mail-Adresse und Ihr Passwort. Diese Daten werden verwendet, um Ihr Benutzerkonto zu verwalten und Ihnen Zugriff auf bestimmte Funktionen und Dienste zu ermöglichen.</p>
        <p><b>b. Cookies:</b></p>
        <p>Unsere Website verwendet Cookies, um Informationen über Ihren Besuch zu speichern und die Benutzererfahrung zu verbessern. Cookies sind kleine Textdateien, die auf Ihrem Gerät gespeichert werden. Sie können die Verwendung von Cookies in Ihren Browsereinstellungen deaktivieren, aber dies kann die Funktionalität unserer Website beeinträchtigen.</p>
        <p><b>c. Tutorial Videos:</b></p>
        <p>Nach erfolgreichem Login können Sie auf Tutorial-Videos zugreifen. Wir erfassen keine sensiblen Daten im Zusammenhang mit dem Ansehen von Videos.</p>
        <p><b>d. Hochladen von Videos:</b></p>
        <p>Wenn Sie Videos auf unsere Plattform hochladen, erfassen wir die hochgeladenen Inhalte, um den Upload-Vorgang zu verwalten und die Bereitstellung der Dienste zu ermöglichen. Bitte beachten Sie, dass hochgeladene Videos persönliche Informationen oder andere Daten enthalten können, und Sie sollten keine sensiblen persönlichen Daten in Videos hochladen.</p>
        <br>
        <p><b>3. Datensicherheit:</b></p>
        <p>Wir setzen angemessene Sicherheitsmaßnahmen ein, um Ihre personenbezogenen Daten vor unbefugtem Zugriff, Verlust, Missbrauch oder Änderung zu schützen.</p>
        <br>
        <p><b>4. Weitergabe von Daten:</b></p>
        <p>Wir geben Ihre personenbezogenen Daten nicht an Dritte weiter, es sei denn, dies ist gesetzlich vorgeschrieben oder Sie haben uns Ihre Zustimmung erteilt.</p>
        <br>
        <p><b>5. Ihre Rechte:</b></p>
        <p>Sie haben das Recht, auf Ihre personenbezogenen Daten zuzugreifen, sie zu korrigieren, zu löschen oder ihre Verwendung einzuschränken. Bitte kontaktieren Sie uns für weitere Informationen.</p>
        <br>
        <p><b>6.Änderungen an dieser Datenschutzerklärung:</b></p>
        <p>Wir behalten uns das Recht vor, diese Datenschutzerklärung jederzeit zu ändern. Änderungen werden auf unserer Website veröffentlicht und Sie sollten diese regelmäßig überprüfen.</p>
        <br>
        <p><b>7. Kontaktinformationen:</b></p>
        <p>Bei Fragen oder Bedenken zu dieser Datenschutzerklärung kontaktieren Sie uns bitte unter info@wisoweshalbwarum.de oder über unser Kontaktformular.</p>
      </div>
</body>
<Footer />

<style>
    .datenschutzerklaerung {
      padding: 20px; 
      border: 1px solid #ccc; 
      box-sizing: border-box;
        line-height: 36px;
        display: block;
        padding-top: 5rem;
        padding-bottom: 5rem;
        padding-left: 5rem;
        padding-right: 5rem;
    }
  </style>
