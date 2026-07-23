<script lang="ts">
  import ImageBlock from "$lib/components/ImageBlock.svelte";
  import TagList from "../TagList.svelte";
  import Dot from "../Dot.svelte";
</script>

<ImageBlock>
  <div slot="left" class="min-w-fit">
    <a href="https://github.com/KeplerBoyce/frontend-compiler" target="_blank">
      <enhanced:img
        src="$lib/images/compiler.png"
        alt="Picture of simple custom frontend language example"
        class="img-sm"
      />
    </a>
  </div>

  <h2 slot="heading">
    Frontend Language Compiler
  </h2>

  <div slot="subheading" class="dot-list subheading">
    <h4>
      Dec 2025
    </h4>
    <Dot />
    <a href="https://github.com/KeplerBoyce/frontend-compiler">
      github.com/KeplerBoyce/frontend-compiler
    </a>
  </div>

  <p slot="text" class="w-full">
    A toy compiler which converts a simple reactive frontend language into JavaScript in a style similar to Svelte. Built as a way to play around with OCaml more after Advent of Code, in particular on a problem OCaml is well suited for with its ADTs, pattern matching, and static typing.
  </p>

  <TagList slot="after" entry="toyCompiler" />
</ImageBlock>
