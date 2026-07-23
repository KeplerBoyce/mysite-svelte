<script lang="ts">
  import ImageBlock from "$lib/components/ImageBlock.svelte";
  import TagList from "../TagList.svelte";
  import Dot from "../Dot.svelte";
</script>

<ImageBlock>
  <div slot="left" class="min-w-fit">
    <enhanced:img
      src="$lib/images/tetris.png"
      alt="Picture of Tetris PC trainer"
      class="img-sm"
    />
  </div>

  <h2 slot="heading">
    Tetris Perfect Clear Trainer
  </h2>

  <div slot="subheading" class="dot-list subheading">
    <h4>
      May – July 2025
    </h4>
    <Dot />
    <a href="https://minitimer.vercel.app">
      minitimer.vercel.app
    </a>
  </div>

  <p slot="text" class="w-full">
    A modern, simple timer website and desktop app for speedcubers. Includes standard features such as timing with keyboard, tracking solve times in sessions, and storing personal records and past solves' scrambles.
  </p>

  <TagList slot="after" entry="minitimer" />
</ImageBlock>
