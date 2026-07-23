<script lang="ts">
  import ImageBlock from "$lib/components/ImageBlock.svelte";
  import TagList from "../TagList.svelte";
  import Dot from "../Dot.svelte";
</script>

<ImageBlock>
  <div slot="left" class="min-w-fit">
    <a href="https://www.gulpin.games" target="_blank">
      <enhanced:img
        src="$lib/images/gulpin.png"
        alt="Picture of gulpin.games chess game"
        class="img-sm"
      />
    </a>
  </div>

  <h2 slot="heading">
    1v1 Turn-Based Games Platform
  </h2>

  <div slot="subheading" class="dot-list subheading">
    <h4>
      June – Dec 2023
    </h4>
    <Dot />
    <a href="https://www.gulpin.games">
      gulpin.games
    </a>
  </div>

  <p slot="text" class="w-full">
    A website for playing online 1v1 games with friends, including chess, connect-4, ultimate tic-tac-toe, and more. Made in the style of Lichess, but for more kinds of turn-based games.
  </p>

  <TagList slot="after" entry="gulpin" />
</ImageBlock>
