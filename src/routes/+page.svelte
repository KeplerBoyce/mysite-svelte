<script lang="ts">
  import DivideY from "$lib/components/DivideY.svelte";
  import Hello from "$lib/components/Hello.svelte";
  import ProjectTile from "$lib/components/ProjectTile.svelte";
  import { MAIN_PROJECTS, OTHER_PROJECTS } from "$lib/data/projects";
</script>

<div class="flex justify-center">
  <Hello />
</div>

<DivideY />

<div class="flex flex-col gap-16 md:gap-12 items-center">
  <h1 class="text-center">
    Main Projects
  </h1>

  {#each MAIN_PROJECTS as project (project.id)}
    <ProjectTile {project} />
  {/each}
</div>

<DivideY />

<div class="flex flex-col gap-16 md:gap-12 items-center">
  <h1 class="text-center">
    Other Past Projects
  </h1>

  {#each OTHER_PROJECTS as project (project.id)}
    <ProjectTile {project} />
  {/each}
</div>
