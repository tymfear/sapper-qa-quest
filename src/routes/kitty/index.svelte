<script>
  import KittyImage from "./_KittyImage.svelte";
  import KittyToggle from "./_KittyToggle.svelte";
  import { showKitty } from "./stores/store";
  import TransitionWrapper from "../../components/TransitionWrapper.svelte";

  export let segment;
</script>

<TransitionWrapper>
  <h2 class="text-3xl">Member Area</h2>
  <div>
    <KittyToggle />
    {#if $showKitty}
      <KittyImage />
    {/if}
  </div>
</TransitionWrapper>
