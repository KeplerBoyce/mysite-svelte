<script lang="ts">
  import ImageBlock from "$lib/components/ImageBlock.svelte";
  import TagList from "../TagList.svelte";
</script>

<ImageBlock>
  <div slot="left" class="min-w-fit">
    <enhanced:img
      src="$lib/images/placeholder.png"
      alt="Picture of placeholder"
      class="img-sm"
    />
  </div>

  <h2 slot="heading">
    CubeScramble
  </h2>

  <h4 slot="subheading" class="subheading">
    August 2023
  </h4>

  <p slot="text" class="w-full">
    A library that generates random-state scrambles for the 3x3 Rubik's Cube. I originally made this to generate the scrambles for my Minitimer speedcubing timer app, and I plan to come back to this project and add support for other official World Cube Association puzzles in the future as I continue working on Minitimer.
  </p>

  <TagList slot="after" entry="cubeScramble" />
</ImageBlock>
