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

  <h2 slot="heading" class="text-center md:text-left text-xl ssm:text-3xl">
    {project.title}
  </h2>

  <div slot="subheading" class="dot-list subheading justify-center md:justify-start">
    <h4 class="whitespace-nowrap text-xs ssm:text-base">
      {project.date}
    </h4>
    {#if project.link && project.linkText}
      <Dot />
      <a href={project.link} class="hidden xs:block text-xs ssm:text-base">
        {project.linkText}
      </a>
      <a href={project.link} class="block xs:hidden text-xs ssm:text-base">
        Link
      </a>
    {/if}
  </div>

  <p slot="text" class="w-full text-sm ssm:text-base">
    {project.text}
  </p>

  <TagList slot="after" entry={project.id} />
</ImageBlock>
