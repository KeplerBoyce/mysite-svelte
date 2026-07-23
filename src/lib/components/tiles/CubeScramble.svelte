<script lang="ts">
  import ImageBlock from "$lib/components/ImageBlock.svelte";
  import TagList from "../TagList.svelte";
  import Dot from "../Dot.svelte";
</script>

<ImageBlock>
  <div slot="left" class="min-w-fit">
    <a href="https://github.com/KeplerBoyce/cubescramble" target="_blank">
      <enhanced:img
        src="$lib/images/cubescramble.png"
        alt="Picture of cubescramble CLI"
        class="img-sm"
      />
    </a>
  </div>

  <h2 slot="heading">
    Random-State Cube Scrambler
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
    A program that generates random-state scrambles for the 3x3 Rubik's Cube. Made as a way to experiment with Rust and solve a problem that requires some interesting algorithms and optimization tricks.
  </p>

  <TagList slot="after" entry="cubeScramble" />
</ImageBlock>
