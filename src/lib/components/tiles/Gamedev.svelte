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

  <h2 slot="heading">
    Godot Projects
  </h2>

  <h4 slot="subheading" class="subheading">
    December 2023 – ongoing
  </h4>

  <p slot="text">
    A few side projects I have worked on using both the Unity and Godot game engines, including a couple of small 3D FPS game I built as test projects and a 2.5D roguelite deck-builder game that I am currently working on and hope to release in the future.
  </p>

  <div slot="after" class="tags">
    <Tag text="Unity" />
    <Tag text="C#" />
    <Tag text="Godot" />
    <Tag text="GDScript" />
    <Tag text="Shaders" />
    <Tag text="Blender" />
  </div>
</ImageBlock>
