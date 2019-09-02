<script>
  import CreditsModal from "./modals/CreditsModal.svelte";
  import { headerStore } from "./stores/store";
  import { getPath } from "../routeHelper.js";

  export let segment;

  let showModal = false;
</script>

<header class="flex text-gold bg-black px-6">
  <div class="w-1/3 h-12 text-left flex justify-center flex-col">
    <span>
      <a href={getPath()}>QA Quest</a>
    </span>
  </div>
  <div class="w-1/3 h-12 text-center flex justify-center flex-col">
    {$headerStore.questName}
  </div>
  <div class="w-1/3 h-12 text-right flex justify-center flex-col">
    {#if segment}
      <div>
        <span on:click={() => (showModal = true)} class="cursor-pointer inline">
          Credits
        </span>
      </div>
    {/if}
  </div>
</header>
{#if showModal}
  <CreditsModal on:closeModal={() => (showModal = false)} />
{/if}
