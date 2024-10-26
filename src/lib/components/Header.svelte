<script lang="ts">
  import { dark } from "$lib/stores";
</script>

<div class="w-full h-16 flex gap-4 px-8 justify-center items-center border-b-2 border-gray-300 border-util">
  <a href="/" class="no-underline">
    <h1 class="text-left text-2xl">
      Kepler Boyce
    </h1>
  </a>
  <div class="grow" />
  <button on:click={() => {$dark = !$dark}}>
    <h4 class="">
      Dark mode
    </h4>
  </button>
</div>
