<script lang="ts">
  import ImageBlock from "$lib/components/ImageBlock.svelte";
  import TagList from "../TagList.svelte";
  import Dot from "../Dot.svelte";
</script>

<ImageBlock>
  <div slot="left" class="min-w-fit">
    <a href="https://minitimer.vercel.app" target="_blank">
      <enhanced:img
        src="$lib/images/minitimer.png"
        alt="Picture of Minitimer website"
        class="img-md border"
      />
    </a>
  </div>

  <h2 slot="heading">
    Speedcubing Timer
  </h2>

  <div slot="subheading" class="dot-list subheading">
    <h4>
      August 2023 – ongoing
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
