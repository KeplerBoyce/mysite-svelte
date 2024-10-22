<script lang="ts">
  import ImageBlock from "$lib/components/ImageBlock.svelte";
  import TagList from "../TagList.svelte";
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
    Minitimer
  </h2>

  <h4 slot="subheading" class="subheading">
    August 2023 – ongoing
  </h4>

  <p slot="text" class="w-full">
    A modern, simple timer website and desktop app for speedcubers. Includes standard features such as timing with keyboard, tracking solve times in sessions, and storing personal records and past solves' scrambles.
  </p>

  <TagList slot="after" entry="minitimer" />
</ImageBlock>
