<script lang="ts">
  import ImageBlock from "$lib/components/ImageBlock.svelte";
  import Tag from "../Tag.svelte";
  import Dot from "../Dot.svelte";
</script>

<ImageBlock>
  <div slot="left" class="min-w-fit">
    <!-- <enhanced:img -->
    <!--   src="$lib/images/kepler.jpg" -->
    <!--   alt="Picture of Kepler" -->
    <!--   class="w-96 rounded-3xl" -->
    <!-- /> -->
  </div>

  <h2 slot="heading" class="mb-1">
    Pokémon Type Trainer
  </h2>

  <div slot="subheading" class="flex gap-2 text-base items-center italic mb-3">
    <h4>
      June 2023
    </h4>
    <Dot />
    <a
      href="https://keplerboyce.github.io/pokemon-type-trainer/"
      class="underline text-sky-600 hover:text-sky-500 transition duration-200"
    >
      keplerboyce.github.io/pokemon-type-trainer
    </a>
  </div>

  <p slot="text" class="mb-3">
    A very small and silly website built to help myself remember Pokémon type interactions.
  </p>

  <div slot="after" class="flex gap-1 flex-wrap">
    <Tag text="Next.js" />
    <Tag text="React" />
    <Tag text="Typescript" />
    <Tag text="TailwindCSS" />
  </div>
</ImageBlock>
