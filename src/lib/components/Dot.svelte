<script lang="ts">
  import { dark } from "$lib/stores";
</script>

<div class={`w-1 h-1 rounded-full transition ${$dark ? "bg-white" : "bg-black"}`} />
