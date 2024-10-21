<script lang="ts">
  import DivideY from "$lib/components/DivideY.svelte";
  import Hello from "$lib/components/tiles/Hello.svelte";
  import Gulpin from "$lib/components/tiles/Gulpin.svelte";
</script>

<div class="p-8 pt-24">
  <Hello />

  <DivideY />

  <div class="flex flex-col gap-4 items-center">
    <h2>
      Webdev
    </h2>

    <Gulpin />
  </div>
</div>
