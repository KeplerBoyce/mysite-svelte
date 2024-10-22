<script lang="ts">
  import ImageBlock from "$lib/components/ImageBlock.svelte";
  import Tag from "../Tag.svelte";
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
    Sightreading Trainer
  </h2>

  <h4 slot="subheading" class="subheading">
    January 2023
  </h4>

  <p slot="text" class="w-full">
    A website for training sheet music sightreading, built with a team for the GunnHacks 9.0 hackathon. Displays notes on a staff with either treble or bass clef, and you play the shown notes either using the on-screen piano or on a phsyical MIDI device that you connect.
  </p>

  <div slot="after" class="tags">
    <Tag text="Next.js" />
    <Tag text="React" />
    <Tag text="Typescript" />
    <Tag text="TailwindCSS" />
  </div>
</ImageBlock>
