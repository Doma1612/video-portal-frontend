<script>
    import Footer from "../Footer.svelte";
import Navbar from "../Navbar.svelte";

    let username = '';
    let password = '';

    const userdaten = {
        username,
        password
    }
    
    async function registrieren() {

    try {
      const response = await fetch(
        'http://131.173.88.197:8080/SP_Video_Portal_REST-0.0.1-SNAPSHOT/api/users/register',
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify( userdaten ),
        },
      );
      console.log(username + ' '+ password);
      console.log(response);
      if (response.ok) {
        /* wenn Registrierung erfolgreich war */
        const data = await response.text();
        console.log(data);
      //  const JSESSIONID = data.token;
        /* Cookies setzen */
       // Cookies.set("SessionID", JSESSIONID);

        console.log("Registrierung erfolgreich");
      } else {
        console.log("Registrierung fehlgeschlagen");
      }
    } catch (error) {
      console.error("Fehler ist aufgetreten: ", error);
    }
  }

    
</script>
<Navbar />
<!-- Benutzeroberfäche -->
<!-- bei username und passwort muss noch die entsprechende Variable eingesetzt werden und beim Passwort der type evtl zu password geändert werden-->
<body>
    <div class="flex justify-center items-center h-screen bg-blue-200">
        <div class="w-96 p-6 shadow-lg bg-white rounded-md">
            <h1 class="text-3xl block text-center font-semibold">Registrierung</h1>
            <hr class="mt-3">
            <div class="mt-3">
                <label for="username" class="block text-base mb-2">Benutzername</label>
                <input type="text" bind:value={userdaten.username} id="username" class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Benutzername auswählen...">
            </div>
            <div class="mt-3">
                <label for="passwort" class="block text-base mb-2">Passwort</label>
                <input type="text" id="passwort" bind:value={userdaten.password} class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Passwort vergeben...">
            </div>
            <div class="mt-5">
                <button
                type="submit"
                class="border-2 border-indigo-700 bg-blue-500 text-white py-1 w-full rounded-mg hover:bg-transparent hover:text-blue-500 font-semibold"
                on:click={registrieren}
                >Registrieren</button>
            
            </div>
        </div>
    </div>
</body>
<Footer />
<!-- 2 Inputfelder und ein Button, der die Methode aufruft-->
<!-- Quelle: Youtube: How To Make Login Page Using Tailwind | Create Login Form Using Tailwind CSS For Beginners-->
