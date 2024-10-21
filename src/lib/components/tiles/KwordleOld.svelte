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
    kwordle.app (old)
  </h2>

  <h4 slot="subheading" class="mb-3 text-base italic">
    February 2022
  </h4>

  <p slot="text" class="mb-3">
    A real-time 1v1 Wordle game made for the GunnHacks 8.0 hackathon. This was my first experience with web development.
  </p>

  <div slot="after" class="flex gap-1 flex-wrap">
    <Tag text="Express" />
    <Tag text="WebSocket" />
    <Tag text="Javascript" />
    <Tag text="HTML" />
    <Tag text="CSS" />
  </div>
</ImageBlock>
