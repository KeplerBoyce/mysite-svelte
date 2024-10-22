<script lang="ts">
  import Tag from "./Tag.svelte";
  import { TAGS } from "$lib/types";

  export let entry: string;
</script>

<div class="tags">
  {#each TAGS[entry] as tag}
    <Tag text={tag} />
  {/each}
</div>
