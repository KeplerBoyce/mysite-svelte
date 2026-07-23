<script lang="ts">
  import ImageBlock from "$lib/components/ImageBlock.svelte";
  import TagList from "../TagList.svelte";
  import Dot from "../Dot.svelte";
</script>

<ImageBlock>
  <div slot="left" class="min-w-fit">
    <a href="https://github.com/KeplerBoyce/tetris-tool" target="_blank">
      <enhanced:img
        src="$lib/images/tetris.png"
        alt="Picture of Tetris PC trainer"
        class="img-md"
      />
    </a>
  </div>

  <h2 slot="heading">
    Tetris Perfect Clear Trainer
  </h2>

  <div slot="subheading" class="dot-list subheading">
    <h4>
      May – July 2025
    </h4>
    <Dot />
    <a href="https://github.com/KeplerBoyce/tetris-tool">
      github.com/KeplerBoyce/tetris-tool
    </a>
  </div>

  <p slot="text" class="w-full">
    A simple program to practice perfect clear strategies for modern Tetris games. I always wanted to learn perfect clear openings and loops but couldn't find any good practice tools, so I built this all-in-one learning tool.
  </p>

  <TagList slot="after" entry="minitimer" />
</ImageBlock>
