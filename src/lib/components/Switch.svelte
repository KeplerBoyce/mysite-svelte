<script lang="ts">
  export let toggled: boolean;
</script>

<button on:click={() => {toggled = !toggled}} class="flex gap-3 items-center">
  <div class={`relative w-12 h-6 rounded-full transition ${toggled ? "bg-sky-500" : "bg-slate-300"}`}>
    <div class={`absolute left-0 w-5 h-5 m-0.5 rounded-full transition
        ${toggled ? "translate-x-6 bg-white" : "bg-slate-500"}`} />
  </div>
  <slot name="label" />
</button>
