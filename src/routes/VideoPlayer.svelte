<!-- VideoPlayer.svelte -->
<script>
    export let src = '';
    export let poster = '';
  </script>
  
  <div class="video-player">
    <video class="rounded-lg shadow-md border border-gray-200" controls preload="metadata" {src} {poster}></video>
  </div>
  
  <style>
    .video-player {
      max-width: 100%;
    }
  </style>
  