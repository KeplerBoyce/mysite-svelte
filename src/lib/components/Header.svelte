<script lang="ts">
  import { dark } from "$lib/stores";
  import Switch from "./Switch.svelte";
</script>

<div class="flex-none w-full h-16 flex gap-4 px-2 md:px-8 justify-center items-center border-b-2 border-gray-300 border-util">
  <a href="/" class="no-underline">
    <h1 class="text-left heading-hover whitespace-nowrap text-base xs:text-2xl">
      Kepler Boyce
    </h1>
  </a>
  <div class="grow" />
  <Switch bind:toggled={$dark}>
    <h4 slot="label" class="whitespace-nowrap text-xs xs:text-base">
      Dark mode
    </h4>
  </Switch>
</div>
