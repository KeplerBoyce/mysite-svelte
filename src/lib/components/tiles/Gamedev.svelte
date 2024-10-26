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

  <a slot="heading" href="/gamedev" class="a-heading">
    <h2 class="heading-hover">
      Gamedev Projects
    </h2>
  </a>

  <h4 slot="subheading" class="subheading">
    December 2023 – ongoing
  </h4>

  <p slot="text" class="w-full">
    A few side projects I have worked on using both the Unity and Godot game engines, including a couple of small 3D FPS game I built as test projects and a 2.5D roguelite deck-builder game that I am currently working on and hope to release in the future.
  </p>

  <TagList slot="after" entry="gamedev" />
</ImageBlock>
