<script lang="ts">
  import ImageBlock from "$lib/components/ImageBlock.svelte";
  import TagList from "../TagList.svelte";
  import Dot from "../Dot.svelte";
</script>

<ImageBlock>
  <div slot="left" class="min-w-fit">
    <a href="https://github.com/KeplerBoyce/advent2025" target="_blank">
      <enhanced:img
        src="$lib/images/advent2025.png"
        alt="Picture of completed Advent of Code 2025 screen"
        class="img-sm"
      />
    </a>
  </div>

  <h2 slot="heading">
    Advent of Code 2025 in OCaml
  </h2>

  <div slot="subheading" class="dot-list subheading">
    <h4>
      Dec 2025
    </h4>
    <Dot />
    <a href="https://github.com/KeplerBoyce/advent2025">
      github.com/KeplerBoyce/advent2025
    </a>
  </div>

  <p slot="text" class="w-full">
    OCaml solutions to the first 12 days of Advent of Code 2025, written mostly in pure functional style. I wanted to learn a functional language and figured this would be the perfect opportunity. OCaml was appealing as many of my favorite Rust features were borrowed from OCaml (Option enum, pattern matching, block expressions, etc.).
  </p>

  <TagList slot="after" entry="advent2025" />
</ImageBlock>
