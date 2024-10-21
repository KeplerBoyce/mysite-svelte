<script lang="ts">
  import DivideY from "$lib/components/DivideY.svelte";
  import Hello from "$lib/components/tiles/Hello.svelte";
  import Gulpin from "$lib/components/tiles/Gulpin.svelte";
  import Kwordle from "$lib/components/tiles/Kwordle.svelte";
  import Minitimer from "$lib/components/tiles/Minitimer.svelte";
  import KwordleOld from "$lib/components/tiles/KwordleOld.svelte";
    import Pokemon from "$lib/components/tiles/Pokemon.svelte";
</script>

<div class="p-8 pt-24">
  <Hello />

  <DivideY />

  <div class="flex flex-col gap-4 items-center">
    <h1>
      Webdev
    </h1>

    <Gulpin />
    <Kwordle />
    <Minitimer />
    <Pokemon />
    <KwordleOld />
  </div>
</div>
