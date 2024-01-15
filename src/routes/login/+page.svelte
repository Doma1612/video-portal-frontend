
<script>
  let username ='';
  let password = '';
  let loggedin = false;
  let errormessage = '';
  let successmessage ='';

  import Cookies from "js-cookie";
    import Navbar from "../Navbar.svelte";
    import Footer from "../Footer.svelte";
    import { goto } from '$app/navigation';

  const userdaten = {
    // @ts-ignore
    username,
    // @ts-ignore
    password,
  };

  // @ts-ignore
  async function login() {
    try {
      const response = await fetch(
        `http://131.173.88.197:8080/SP_Video_Portal_REST-0.0.1-SNAPSHOT/api/users/login`,
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
        /* wenn Login erfolgreich war */
        const data = await response.json(); 
        console.log(data);
  
        /* Cookies setzen */
       Cookies.set("UserRolle", data.rolle);

        loggedin = true; 

        successmessage = 'Login erfolgreich. Weiterleitung zur Startseite...';
        console.log("Login erfolgreich");

        setTimeout(() => {
        successmessage = '';
        goto('/');
        }, 3000);

      } else {
        errormessage = 'Login fehlerhaft. Bitte erneut versuchen';
        setTimeout(() => {
        errormessage = '';
        }, 3000);

        userdaten.username = '';
        userdaten.password = '';

        console.log("Login fehlgeschlagen");
      }
    } catch (error) {
      console.error("Fehler ist aufgetreten: ", error);
    }
  }
</script>

<Navbar />

<body>
  <div class="flex justify-center items-center h-screen bg-blue-100">
    <div class="w-96 p-6 shadow-lg bg-white rounded-md">
      <h1 class="text-3xl block text-center font-semibold">Login</h1>
      <hr class="mt-3" />
      <div class="mt-3">
        <label for="username" class="block text-base mb-2">Benutzername</label>
        <input
          type="text"
          bind:value={userdaten.username}
          id="username"
          class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
          placeholder="Benutzername eingeben..."
        />
      </div>
      <div class="mt-3">
        <label for="passwort" class="block text-base mb-2">Passwort</label>
        <input
          type="text"
          bind:value={userdaten.password}
          id="passwort"
          class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
          placeholder="Passwort eingeben..."
        />
      </div>
      <div class="mt-5">
        <button
          type="submit"
          class="border-2 border-indigo-700 bg-blue-500 text-white py-1 w-full rounded-mg hover:bg-transparent hover:text-blue-500 font-semibold"
          on:click={login}>Login</button
        >
      </div>
    </div>
    {#if errormessage}
      <div class="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50">
        <div class="bg-indigo-200 p-4 rounded-md border border-gray-300">
          <p>{errormessage}</p>
        </div>
      </div>
    {/if}
    {#if successmessage}
      <div class="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50">
        <div class="bg-indigo-200 p-4 rounded-md border border-gray-300">
          <p>{successmessage}</p>
        </div>
      </div>
    {/if}
  </div>
</body>
<Footer />

