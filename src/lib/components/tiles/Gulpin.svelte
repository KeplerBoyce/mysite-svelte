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

  <h1 slot="heading">
    gulpin.games
  </h1>

  <p slot="text">
    A website for playing online 1v1 games with friends, including chess, connect-4, ultimate tic-tac-toe, and more games to come in the future.
  </p>

  <div slot="after" class="flex gap-2">
    <Tag text="Test" />
  </div>
</ImageBlock>
