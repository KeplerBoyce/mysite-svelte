<script lang="ts">
  import ImageBlock from "$lib/components/ImageBlock.svelte";
  import Tag from "../Tag.svelte";
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

  <h2 slot="heading">
    gulpin.games
  </h2>

  <div slot="subheading" class="dot-list subheading">
    <h4>
      June 2023 – ongoing
    </h4>
    <Dot />
    <a href="https://www.gulpin.games">
      gulpin.games
    </a>
  </div>

  <p slot="text">
    A website for playing online 1v1 games with friends, including chess, connect-4, ultimate tic-tac-toe, and more games to come in the future.
  </p>

  <div slot="after" class="tags">
    <Tag text="Next.js" />
    <Tag text="React" />
    <Tag text="Typescript" />
    <Tag text="TailwindCSS" />
    <Tag text="Rust" />
    <Tag text="Actix" />
    <Tag text="PostgreSQL" />
    <Tag text="Redis" />
    <Tag text="Docker" />
    <Tag text="SSE" />
  </div>
</ImageBlock>
