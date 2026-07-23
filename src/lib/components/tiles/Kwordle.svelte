<script lang="ts">
  import ImageBlock from "$lib/components/ImageBlock.svelte";
  import TagList from "../TagList.svelte";
  import Dot from "../Dot.svelte";
</script>

<ImageBlock>
  <div slot="left" class="min-w-fit">
    <a href="https://www.kwordle.app" target="_blank">
      <enhanced:img
        src="$lib/images/kwordle2.png"
        alt="Picture of kwordle.app game"
        class="img-md border"
      />
    </a>
  </div>

  <h2 slot="heading">
    Online Head-to-Head Wordle
  </h2>

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
    An online Wordle game that supports lobbies of up to 10 players. I enjoy Wordle and wanted to play with friends, so I built this. Solving in fewer guesses gives drastically more points to discourage memorized opening sequences.
  </p>

  <TagList slot="after" entry="kwordle" />
</ImageBlock>
