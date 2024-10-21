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

  <h2 slot="heading" class="mb-1">
    Minitimer
  </h2>

  <h4 slot="subheading" class="mb-3 text-base italic">
    August 2023 – ongoing
  </h4>

  <p slot="text" class="mb-3">
    A modern, simple timer website and desktop app for speedcubers. Includes standard features such as timing with keyboard, tracking solve times in sessions, and storing personal records and past solves' scrambles.
  </p>

  <div slot="after" class="flex gap-1 flex-wrap">
    <Tag text="Rust" />
    <Tag text="Tauri" />
    <Tag text="Next.js" />
    <Tag text="React" />
    <Tag text="Typescript" />
    <Tag text="TailwindCSS" />
  </div>
</ImageBlock>
