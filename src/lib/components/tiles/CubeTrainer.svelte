<script lang="ts">
  import ImageBlock from "$lib/components/ImageBlock.svelte";
  import TagList from "../TagList.svelte";
  import Dot from "../Dot.svelte";
</script>

<ImageBlock>
  <div slot="left" class="min-w-fit">
    <a href="https://speedcubetrainer.vercel.app" target="_blank">
      <enhanced:img
        src="$lib/images/speedcubetrainer.png"
        alt="Picture of algorithm trainer"
        class="img-md border"
      />
    </a>
  </div>

  <h2 slot="heading">
    Speedcubing Algorithm Trainer
  </h2>

  <div slot="subheading" class="dot-list subheading">
    <h4>
      Jan – June 2025
    </h4>
    <Dot />
    <a href="https://speedcubetrainer.vercel.app">
      speedcubetrainer.vercel.app
    </a>
  </div>

  <p slot="text" class="w-full">
    A simple algorithm trainer website for speedcubers. Uses spaced repetition and allows you to select the specific algorithms you want to train, drastically speeding up the learning process.
  </p>

  <TagList slot="after" entry="cubeTrainer" />
</ImageBlock>
