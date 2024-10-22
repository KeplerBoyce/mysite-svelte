<script lang="ts">
  import { toTagClass } from "$lib/helpers";

  export let text: string;
  $: tagClass = toTagClass(text);
</script>

<div class={`px-2 py-0.5 rounded-full text-white ${tagClass}`}>
  <p class="text-sm text-inherit">
    {text}
  </p>
</div>
