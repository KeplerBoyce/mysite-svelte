<script lang="ts">
  import ImageBlock from "$lib/components/ImageBlock.svelte";
  import TagList from "../TagList.svelte";
  import Dot from "../Dot.svelte";
</script>

<ImageBlock>
  <div slot="left" class="min-w-fit">
    <enhanced:img
      src="$lib/images/gulpin.png"
      alt="Picture of gulpin.games chess game"
      class="img-sm"
    />
  </div>

  <a slot="heading" href="/gulpin" class="a-heading">
    <h2 class="heading-hover underline">
      gulpin.games
    </h2>
  </a>

  <div slot="subheading" class="dot-list subheading">
    <h4>
      June 2023 – ongoing
    </h4>
    <Dot />
    <a href="https://www.gulpin.games">
      gulpin.games
    </a>
  </div>

  <p slot="text" class="w-full">
    A website for playing online 1v1 games with friends, including chess, connect-4, ultimate tic-tac-toe, and more games to come in the future.
  </p>

  <TagList slot="after" entry="gulpin" />
</ImageBlock>
