<script>
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
</script>

<div in:fade class="relative">
  <slot />
</div>
