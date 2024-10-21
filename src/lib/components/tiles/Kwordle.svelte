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
    kwordle.app v2
  </h2>

  <div slot="subheading" class="flex gap-2 text-base items-center italic mb-3">
    <h4>
    May 2024
    </h4>
    <Dot />
    <a
      href="https://www.kwordle.app"
      class="underline text-sky-600 hover:text-sky-500 transition duration-200"
    >
      kwordle.app
    </a>
  </div>

  <p slot="text" class="mb-3">
    Online Wordle game that supports lobbies of up to 10 players. Updated and modernized version of old kwordle.app hackathon project.
  </p>

  <div slot="after" class="flex gap-1 flex-wrap">
    <Tag text="Next.js" />
    <Tag text="React" />
    <Tag text="Typescript" />
    <Tag text="TailwindCSS" />
    <Tag text="Rust" />
    <Tag text="Actix" />
    <Tag text="Docker" />
    <Tag text="SSE" />
  </div>
</ImageBlock>
