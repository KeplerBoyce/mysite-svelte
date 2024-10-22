<script lang="ts">
  import DivideY from "$lib/components/DivideY.svelte";
  import Hello from "$lib/components/tiles/Hello.svelte";
  import Gulpin from "$lib/components/tiles/Gulpin.svelte";
  import Kwordle from "$lib/components/tiles/Kwordle.svelte";
  import Minitimer from "$lib/components/tiles/Minitimer.svelte";
  import KwordleOld from "$lib/components/tiles/KwordleOld.svelte";
  import Pokemon from "$lib/components/tiles/Pokemon.svelte";
  import PerfectPitch from "$lib/components/tiles/PerfectPitch.svelte";
  import Gamedev from "$lib/components/tiles/Gamedev.svelte";
  import CubeScramble from "$lib/components/tiles/CubeScramble.svelte";
  import ChordTrainer from "$lib/components/tiles/ChordTrainer.svelte";
  import ThisSite from "$lib/components/tiles/ThisSite.svelte";
</script>

<div class="p-8 pt-24">
  <Hello />

  <DivideY />

  <div class="flex flex-col gap-12 items-center">
    <h1>
      Webdev Projects
    </h1>

    <ThisSite />
    <Gulpin />
    <Kwordle />
    <Minitimer />
    <Pokemon />
    <ChordTrainer />
    <KwordleOld />
  </div>

  <DivideY />

  <div class="flex flex-col gap-12 items-center pb-16">
    <h1>
      Other Programming Projects
    </h1>

    <Gamedev />
    <CubeScramble />
    <PerfectPitch />
  </div>
</div>
