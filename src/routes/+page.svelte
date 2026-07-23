<script lang="ts">
  import DivideY from "$lib/components/DivideY.svelte";
  import Hello from "$lib/components/tiles/Hello.svelte";
  import Gulpin from "$lib/components/tiles/Gulpin.svelte";
  import Kwordle from "$lib/components/tiles/Kwordle.svelte";
  import Minitimer from "$lib/components/tiles/Minitimer.svelte";
  import CubeScramble from "$lib/components/tiles/CubeScramble.svelte";
  import ChordTrainer from "$lib/components/tiles/ChordTrainer.svelte";
  import PerfectPitch from "$lib/components/tiles/PerfectPitch.svelte";
  import Pokemon from "$lib/components/tiles/Pokemon.svelte";
  import KwordleOld from "$lib/components/tiles/KwordleOld.svelte";
  import Gridlocked from "$lib/components/tiles/Gridlocked.svelte";
  import CubeTrainer from "$lib/components/tiles/CubeTrainer.svelte";
  import Tetris from "$lib/components/tiles/Tetris.svelte";
  import Advent2025 from "$lib/components/tiles/Advent2025.svelte";
  import ToyCompiler from "$lib/components/tiles/ToyCompiler.svelte";
</script>

<div class="flex justify-center">
  <Hello />
</div>

<DivideY />

<div class="flex flex-col gap-12 items-center">
  <h1>
    Main Projects
  </h1>

  <Gridlocked />
  <Kwordle />
  <Tetris />
  <Minitimer />
  <CubeTrainer />
</div>

<DivideY />

<div class="flex flex-col gap-12 items-center">
  <h1>
    Other Past Projects
  </h1>

  <Advent2025 />
  <ToyCompiler />
  <Gulpin />
  <CubeScramble />
  <Pokemon />
  <ChordTrainer />
  <PerfectPitch />
  <KwordleOld />
</div>
