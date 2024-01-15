<script>
    import Navbar from "../Navbar.svelte";
    import Footer from '../Footer.svelte';

    let name = '';
    let email = '';
    let message = '';
    let successmessage = '';

    async function abschicken() {
      try {

        name = '';
        email = '';
        message ='';
        console.log('Eingabefelder leeren')

        successmessage = 'Nachricht erfolgreich versandt';

        setTimeout(() => {
        successmessage = '';
        }, 3000);
      } catch (error) {
      console.error('Fehler beim Senden der Nachricht:', error);
      }
    }


</script>



<Navbar />
<section class="text-gray-600 body-font relative">
    <div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
      <div class="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
      <iframe width="100%" height="100%" class="absolute inset-0" frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d953.3055572241597!2d8.012272827242978!3d52.28575672158601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b9f971c98eb8df%3A0x5229e8e30f14b3ea!2sCaprivistra%C3%9Fe%2030%2C%2049076%20Osnabr%C3%BCck!5e0!3m2!1sen!2sde!4v1641318274825!5m2!1sen!2sde" style="filter: grayscale(1) contrast(1.2) opacity(0.4);"></iframe>
        <div class="bg-white relative flex flex-wrap py-6 rounded shadow-md pr-8">
          <div class="lg:w-1/2 px-6">
            <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">Adresse</h2>
            <p class="mt-1">Caprivistraße 30<br>49076 Osnabrück<br>Deutschland</p>
          </div>
          <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
            <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">E-Mail</h2>
            <a class="text-indigo-500 leading-relaxed">info@wisoweshalbwarum.de</a>
            <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">Telefonnr.:</h2>
            <p class="leading-relaxed">0541-9690</p>
          </div>
        </div>
      </div>
      <div class="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
        <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">Kontakt</h2>
        <div class="relative mb-4">
          <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
          <input type="text" bind:value={name} id="name" name="name" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
        </div>
        <div class="relative mb-4">
          <label for="email" class="leading-7 text-sm text-gray-600">E-Mail</label>
          <input type="email" bind:value={email} id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
        </div>
        <div class="relative mb-4">
          <label for="message" class="leading-7 text-sm text-gray-600">Nachricht</label>
          <textarea id="message" bind:value={message} name="message" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
        </div>
        <button on:click={abschicken} class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Abschicken</button>
        <p class="text-sm text-gray-500 mt-3">Wir melden uns schnellstmöglich bei Ihnen!</p>
      </div>
      {#if successmessage}
      <div class="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50">
        <div class="bg-indigo-200 p-4 rounded-md border border-gray-300">
          <p>{successmessage}</p>
        </div>
      </div>
    {/if}
    </div>

  </section>
  <Footer />
