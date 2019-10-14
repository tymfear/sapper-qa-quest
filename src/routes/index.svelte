<script>
  import { headerStore } from "../components/stores/store.js";
  import { onMount } from "svelte";
  import { getPath } from "../routeHelper";
  import TransitionWrapper from "../components/TransitionWrapper.svelte";
  onMount(() => {
    headerStore.update(store => {
      return {
        ...store,
        questName: "Choose your quest"
      };
    });
  });
</script>

<style>
  a {
    background-color: orange;
    display: block;
    text-align: center;
    text-decoration: none;
    color: white;
    padding: 1rem;
    font-size: 1rem;
  }

  a:hover {
    color: orange;
    background-color: white;
    border: orange 1px solid;
  }
</style>

<TransitionWrapper>
  <div class="flex flex-col items-center">
    <h1 class="text-4xl">Choose your quest</h1>

    <div class="w-full">
      <a rel="prefetch" href={getPath('/kitty')}>Show me a Kitty!</a>
    </div>
  </div>
</TransitionWrapper>
