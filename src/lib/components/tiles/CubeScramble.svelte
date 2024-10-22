<script lang="ts">
  import ImageBlock from "$lib/components/ImageBlock.svelte";
  import Tag from "../Tag.svelte";
</script>

<ImageBlock>
  <div slot="left" class="min-w-fit">
    <!-- <enhanced:img -->
    <!--   src="$lib/images/kepler.jpg" -->
    <!--   alt="Picture of Kepler" -->
    <!--   class="w-96 rounded-3xl" -->
    <!-- /> -->
  </div>

  <h2 slot="heading">
    CubeScramble
  </h2>

  <h4 slot="subheading" class="subheading">
    August 2023
  </h4>

  <p slot="text">
    A library that generates random-state scrambles for the 3x3 Rubik's Cube. I originally made this to generate the scrambles for my Minitimer speedcubing timer app, and I plan to come back to this project and add support for other official World Cube Association puzzles in the future as I continue working on Minitimer.
  </p>

  <div slot="after" class="tags">
    <Tag text="Rust" />
  </div>
</ImageBlock>
