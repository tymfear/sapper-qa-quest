<script>
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
</script>

<style>
  div {
    position: relative;
  }
</style>

<div in:fade>
  <slot />
</div>
