<script lang="ts">
  import "../app.css";
  import "$lib/css/base.css";
  import "$lib/css/tags.css";
  import "$lib/css/util.css";

  import "@fontsource/inter/500.css";
  import "@fontsource/roboto-slab";

  import Header from "$lib/components/Header.svelte";
</script>

<Header />
<div class="p-8 pt-24 pb-16 flex flex-col items-center">
  <slot />
</div>
