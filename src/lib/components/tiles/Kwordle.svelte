<script lang="ts">
  import ImageBlock from "$lib/components/ImageBlock.svelte";
  import TagList from "../TagList.svelte";
  import Dot from "../Dot.svelte";
</script>

<ImageBlock>
  <div slot="left" class="min-w-fit">
    <enhanced:img
      src="$lib/images/kwordle2.png"
      alt="Picture of kwordle.app game"
      class="img-sm border"
    />
  </div>

  <a slot="heading" href="/kwordle" class="a-heading">
    <h2 class="heading-hover underline">
      kwordle.app v2
    </h2>
  </a>

  <div slot="subheading" class="dot-list subheading">
    <h4>
      May 2024
    </h4>
    <Dot />
    <a href="https://www.kwordle.app">
      kwordle.app
    </a>
  </div>

  <p slot="text" class="w-full">
    Online Wordle game that supports lobbies of up to 10 players. Updated and modernized version of old kwordle.app hackathon project, including many additional features and settings to make it fun for everyone.
  </p>

  <TagList slot="after" entry="kwordle" />
</ImageBlock>
