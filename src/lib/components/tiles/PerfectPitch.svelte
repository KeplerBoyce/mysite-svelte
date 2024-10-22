<script lang="ts">
  import ImageBlock from "$lib/components/ImageBlock.svelte";
  import Tag from "../Tag.svelte";
</script>

<ImageBlock>
  <div slot="left" class="min-w-fit">
    <enhanced:img
      src="$lib/images/pitchtrainer.png"
      alt="Picture of pitch trainer app"
      class="img-sm border"
    />
  </div>

  <h2 slot="heading">
    Pitch Memory Trainer
  </h2>

  <h4 slot="subheading" class="subheading">
    August 2023
  </h4>

  <p slot="text">
    A simple desktop app that generates pure sine waves for practicing pitch memory. I built this as a way to practice JavaFX prior to the CS 1331 advanced standing exam at GT, which included JavaFX content.
  </p>

  <div slot="after" class="tags">
    <Tag text="Java" />
    <Tag text="JavaFX" />
  </div>
</ImageBlock>
