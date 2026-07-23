<script lang="ts">
  import ImageBlock from "$lib/components/ImageBlock.svelte";
  import TagList from "../TagList.svelte";
  import Dot from "../Dot.svelte";
</script>

<ImageBlock>
  <div slot="left" class="min-w-fit">
    <a href="https://github.com/KeplerBoyce/perfect-pitch" target="_blank">
      <enhanced:img
        src="$lib/images/pitchtrainer.png"
        alt="Picture of pitch trainer app"
        class="img-sm border"
      />
    </a>
  </div>

  <h2 slot="heading">
    Perfect Pitch Trainer
  </h2>

  <div slot="subheading" class="dot-list subheading">
    <h4>
      Aug 2023
    </h4>
    <Dot />
    <a href="https://github.com/KeplerBoyce/perfect-pitch">
      github.com/KeplerBoyce/perfect-pitch
    </a>
  </div>

  <p slot="text" class="w-full">
    A simple desktop app that generates pure sine waves for practicing pitch memory (and avoid distinguishing by timbre as I would with recorded piano notes used in other practice tools). I used JavaFX to practice for the CS 1331 advanced standing exam at GT, which included some JavaFX content.
  </p>

  <TagList slot="after" entry="perfectPitch" />
</ImageBlock>
