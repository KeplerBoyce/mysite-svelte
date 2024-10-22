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
    Sightreading Trainer
  </h2>

  <h4 slot="subheading" class="subheading">
    January 2023
  </h4>

  <p slot="text">
    A website for training sheet music sightreading. Displays notes on a staff with either treble or bass clef, and you play the shown notes either on the on-screen piano or on a phsyical MIDI device that you connect. Built with a team for the GunnHacks 9.0 hackathon.
  </p>

  <div slot="after" class="tags">
    <Tag text="Next.js" />
    <Tag text="React" />
    <Tag text="Typescript" />
    <Tag text="TailwindCSS" />
  </div>
</ImageBlock>
