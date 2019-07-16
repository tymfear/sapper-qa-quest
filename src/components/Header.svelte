<script>
  import CreditsModal from "./modals/CreditsModal.svelte";
  import { headerStore } from "./stores/store";
  import { getPath } from "../routeHelper.js";

  export let segment;

  let showModal = false;
</script>

<style>
  header {
    background-color: black;
    color: orange;
    padding: 0 1rem;
    display: flex;
    align-content: space-between;
  }
  .quest-name {
    flex-grow: 1;
    text-align: center;
    font-size: 1.5rem;
    line-height: 0;
  }
  .logo,
  .credits {
    width: 20%;
    padding: 0 1rem;
  }
  .credits {
    text-align: right;
    cursor: pointer;
  }
  .logo a {
    text-decoration: none;
    color: orange;
  }
</style>

<header>
  <p class="logo">
    <a href={getPath()}>QA Quest</a>
  </p>
  <p class="quest-name">{$headerStore.questName}</p>
  <div class="credits">
    {#if segment}
      <p on:click={() => (showModal = true)}>Credits</p>
    {/if}
  </div>
</header>
{#if showModal}
  <CreditsModal on:closeModal={() => (showModal = false)} />
{/if}
