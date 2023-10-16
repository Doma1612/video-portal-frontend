<script>
  import VideoPlayer from 'svelte-video-player';
</script>

<div>
  <nav class="bg-white-500">
    <div class="max-w-5xl mx-auto flex justify-between items-center">
      <img src="./images/logo_video_portal.png" alt="Logo" class="w-40 h-22" />
      <div class="flex items-center space-x-20">
        <ul class="list-none flex space-x-20">
          <li><a href="/test" class="text-black font-bold">Start</a></li>
          <li><a href="/test" class="text-black font-bold">Themen</a></li>
        </ul>
      </div>
      <div>
        <button
          ><a href="/login" class="text-black mx-auto p-9 font-bold">Login</a
          ></button
        >
      </div>
    </div>
  </nav>
  <div
    class=" max-w-5xl mx-auto rounded-full border border-black bg-white-200 p-2 flex hover:bg-gray-200 transition ease-out delay-50"
  >
    <input
      class="w-full rounded-full bg-transparent focus:outline-none"
      type="text"
      placeholder="Suche"
    />
  </div>
</div>
