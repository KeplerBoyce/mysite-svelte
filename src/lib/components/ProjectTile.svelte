<script lang="ts">
  import ImageBlock from "$lib/components/ImageBlock.svelte";
  import TagList from "./TagList.svelte";
  import Dot from "./Dot.svelte";
  import type { Project } from "$lib/data/projects";

  export let project: Project;
</script>

<ImageBlock>
  <div slot="left" class="min-w-fit">
    {#if project.link}
      <a href={project.link} target="_blank">
        <enhanced:img
          src={project.imgSrc}
          alt={project.imgAlt}
          class={project.imgClass}
        />
      </a>
    {:else}
      <enhanced:img
        src={project.imgSrc}
        alt={project.imgAlt}
        class={project.imgClass}
      />
    {/if}
  </div>

  <h2 slot="heading">
    {project.title}
  </h2>

  <div slot="subheading" class="dot-list subheading justify-center md:justify-start">
    <h4>
      {project.date}
    </h4>
    {#if project.link && project.linkText}
      <Dot />
      <a href={project.link}>
        {project.linkText}
      </a>
    {/if}
  </div>

  <p slot="text" class="w-full">
    {project.text}
  </p>

  <TagList slot="after" entry={project.id} />
</ImageBlock>
