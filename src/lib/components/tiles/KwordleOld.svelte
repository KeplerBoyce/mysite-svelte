<script lang="ts">
  import ImageBlock from "$lib/components/ImageBlock.svelte";
  import Tag from "../Tag.svelte";
</script>

<ImageBlock>
  <div slot="left" class="min-w-fit">
    <enhanced:img
      src="$lib/images/placeholder.png"
      alt="Picture of placeholder"
      class="img-sm"
    />
  </div>

  <h2 slot="heading">
    kwordle.app (old)
  </h2>

  <h4 slot="subheading" class="subheading">
    February 2022
  </h4>

  <p slot="text">
    A real-time 1v1 Wordle game made for the GunnHacks 8.0 hackathon. This was my first experience with web development.
  </p>

  <div slot="after" class="tags">
    <Tag text="Express" />
    <Tag text="WebSocket" />
    <Tag text="Javascript" />
    <Tag text="HTML" />
    <Tag text="CSS" />
  </div>
</ImageBlock>
