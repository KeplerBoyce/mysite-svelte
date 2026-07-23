<script lang="ts">
  import ImageBlock from "$lib/components/ImageBlock.svelte";
  import TagList from "../TagList.svelte";
  import Dot from "../Dot.svelte";
</script>

<ImageBlock>
  <div slot="left" class="min-w-fit">
    <a href="https://www.gridlocked.dev" target="_blank">
      <enhanced:img
        src="$lib/images/gridlocked.png"
        alt="Picture of gridlocked.dev crossword puzzle"
        class="img-md"
      />
    </a>
  </div>

  <h2 slot="heading">
    Multiplayer Crossword Platform
  </h2>

  <div slot="subheading" class="dot-list subheading">
    <h4>
      Dec 2025 – ongoing
    </h4>
    <Dot />
    <a href="https://www.gridlocked.dev">
      gridlocked.dev
    </a>
  </div>

  <p slot="text" class="w-full">
    A website for solving crossword puzzles together in real time. I made this to solve the lack of multiplayer support in NYT's games app. Uses a custom .puz file parser supporting circled tiles and rebuses.
  </p>

  <TagList slot="after" entry="gridlocked" />
</ImageBlock>
