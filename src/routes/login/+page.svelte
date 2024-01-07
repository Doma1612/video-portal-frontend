<!-- Login Methode -->

<!-- 
<script context="module">
    import { fail, redirect } from '@sveltejs/kit';
    import * as api from '$lib/api.js';
  
    // @ts-ignore
    export async function login(request, cookies, locals) {
      try {
        const data = await request.formData();
  
        const body = await api.postLogin('login', {
          username: data.get('username'),
          password: data.get('password')
        });
  
        const ret = await body;
  
        if (body.token == "") {
          return fail(401, body);
        }
  
        locals.user = data.get('username');
        console.log("data.user=" + data.get('username'));
        console.log("locals.user=" + locals.user);
  
        locals.session = ret.token;
        cookies.set('user', locals.user, { path: '/' });
        cookies.set('session', ret.token, { path: '/' });
  
        throw redirect(303, '/');
      } catch (error) {
        // Fehler
        console.error('Error during login:', error);
        return fail(500, { error: 'Internal Server Error' });
      }
    }
  
    // @ts-ignore
    export async function logout(cookies, locals) {
      locals.session = "";
      locals.user = "";
      cookies.set('user', "", { path: '/' });
      cookies.set('session', "", { path: '/' });
      console.log("logout called");
  
      throw redirect(307, '/');
    }
</script> -->

<!-- <script>

    import { fail, redirect } from '@sveltejs/kit';
    import * as api from '$lib/api.js';

    async function login() {

        try {
            const data = await request.formData();

            /* in '' noch passenden Namen aus dem backend einsetzen */
            const body = await api.postLogin('login', {
            username: data.get('username'),
            password: data.get('password')
            });

            const ret = await body;

            if (body.token == "") {
            return fail(401, body);
            }

            locals.user = data.get('username');
            console.log("data.user=" + data.get('username'));
            console.log("locals.user=" + locals.user);

            locals.session = ret.token;
            // cookies.set('jwt', ret.token, { path: '/' });
            cookies.set('user', locals.user, { path: '/' });
            cookies.set('session', ret.token, { path: '/' });

            throw redirect(303, '/');
        } catch (error) {
            // Fehler
            console.error('Error during login:', error);
            return fail(500, { error: 'Internal Server Error' });
        }

        
    }

</script> -->

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
<!-- Benutzeroberfäche -->
<!-- bei username und passwort muss noch die entsprechende Variable eingesetzt werden und beim Passwort der type evtl zu password geändert werden-->
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
<!-- 2 Inputfelder und ein Button, der die Methode aufruft-->
<!-- Quelle: Youtube: How To Make Login Page Using Tailwind | Create Login Form Using Tailwind CSS For Beginners-->
