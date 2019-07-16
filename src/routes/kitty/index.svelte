<script>
  import KittyImage from "./_KittyImage.svelte";
  import KittyToggle from "./_KittyToggle.svelte";
  import { showKitty } from "./stores/store";
  import { headerStore } from "../../components/stores/store.js";
  import { onMount } from "svelte";
  export let segment;

  onMount(() => {
    showKitty.update(() => Math.random() < 0.5);

    headerStore.update(store => {
      return {
        ...store,
        showAuthorInfo: true,
        author: "Taras Voloshenko",
        profileLink: "https://www.linkedin.com/in/taras-voloshenko-12a42912",
        questName: "Show me a Kitty!"
      };
    });
  });
</script>

<h2>Member Area</h2>
<div>
  <KittyToggle />
  {#if $showKitty}
    <KittyImage />
  {/if}
</div>
