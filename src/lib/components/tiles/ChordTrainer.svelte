<script lang="ts">
  import ImageBlock from "$lib/components/ImageBlock.svelte";
  import TagList from "../TagList.svelte";
  import Dot from "../Dot.svelte";
</script>

<ImageBlock>
  <div slot="left" class="min-w-fit">
    <a href="https://github.com/KeplerBoyce/gunnhacks9" target="_blank">
      <enhanced:img
        src="$lib/images/sightreading.png"
        alt="Picture of sightreading practice website"
        class="img-sm"
      />
    </a>
  </div>

  <h2 slot="heading">
    Sight-Reading Trainer
  </h2>

  <div slot="subheading" class="dot-list subheading">
    <h4>
      Jan 2023
    </h4>
    <Dot />
    <a href="https://github.com/KeplerBoyce/gunnhacks9">
      github.com/KeplerBoyce/gunnhacks9
    </a>
  </div>

  <p slot="text" class="w-full">
    A website to practice sight-reading sheet music, built with a team for the GunnHacks 9.0 hackathon. Displays notes on a staff with either treble or bass clef, and you play the shown notes either using the on-screen piano or on a physical MIDI device that you connect.
  </p>

  <TagList slot="after" entry="chordTrainer" />
</ImageBlock>
