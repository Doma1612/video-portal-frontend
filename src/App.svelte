<script>
  import svelteLogo from './assets/svelte.svg'
  import viteLogo from '/vite.svg'
  import Counter from './lib/Counter.svelte'
  import TailwindCss from './lib/TailwindCSS.svelte';
  import VideoPlayer from 'svelte-video-player';


  
  const source = 'http://techslides.com/demos/sample-videos/small.webm';
</script >

<main>

<h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Initialer Commit 610</h1>
<VideoPlayer width="500" height="500"  {source} loop />

  
  

  <p>
    Check out <a href="https://github.com/sveltejs/kit#readme" target="_blank" rel="noreferrer">SvelteKit</a>, the official Svelte app framework powered by Vite!
  </p>

  <p class="read-the-docs">
    Click on the Vite and Svelte logos to learn more
  </p>
</main>


  

