<script lang="ts">
  import ImageBlock from "$lib/components/ImageBlock.svelte";
  import TagList from "../TagList.svelte";
  import Dot from "../Dot.svelte";
</script>

<ImageBlock>
  <div slot="left" class="min-w-fit">
    <a href="https://github.com/KeplerBoyce/cubescramble" target="_blank">
      <enhanced:img
        src="$lib/images/placeholder.png"
        alt="Picture of placeholder"
        class="img-sm"
      />
    </a>
  </div>

  <h2 slot="heading">
    CubeScramble
  </h2>

  <div slot="subheading" class="dot-list subheading">
    <h4>
      July – Aug 2022
    </h4>
    <Dot />
    <a href="https://github.com/KeplerBoyce/cubescramble">
      github.com/KeplerBoyce/cubescramble
    </a>
  </div>

  <p slot="text" class="w-full">
    A library that generates random-state scrambles for the 3x3 Rubik's Cube. I originally made this to generate the scrambles for my Minitimer speedcubing timer app, and I plan to come back to this project and add support for other official World Cube Association puzzles in the future as I continue working on Minitimer.
  </p>

  <TagList slot="after" entry="cubeScramble" />
</ImageBlock>
