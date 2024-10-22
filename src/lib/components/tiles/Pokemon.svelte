<script lang="ts">
  import ImageBlock from "$lib/components/ImageBlock.svelte";
  import Tag from "../Tag.svelte";
  import Dot from "../Dot.svelte";
</script>

<ImageBlock>
  <div slot="left" class="min-w-fit">
    <enhanced:img
      src="$lib/images/pokemon.png"
      alt="Picture of Pokémon type practice website"
      class="img-sm border"
    />
  </div>

  <h2 slot="heading">
    Pokémon Type Trainer
  </h2>

  <div slot="subheading" class="dot-list subheading">
    <h4>
      June 2023
    </h4>
    <Dot />
    <a href="https://keplerboyce.github.io/pokemon-type-trainer/">
      keplerboyce.github.io/pokemon-type-trainer
    </a>
  </div>

  <p slot="text">
    A very small and silly website built to help myself remember Pokémon type interactions.
  </p>

  <div slot="after" class="tags">
    <Tag text="Next.js" />
    <Tag text="React" />
    <Tag text="Typescript" />
    <Tag text="TailwindCSS" />
  </div>
</ImageBlock>
