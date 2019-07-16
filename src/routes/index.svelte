<script>
  import { headerStore } from "../components/stores/store.js";
  import { onMount } from "svelte";
  import { getPath } from "../routeHelper";

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
  #quest-navigator {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  #navigator-links {
    width: 100%;
  }

  #navigator-links a {
    background-color: orange;
    display: block;
    text-align: center;
    text-decoration: none;
    color: white;
    padding: 1rem;
    font-size: 1rem;
  }

  #navigator-links a:hover {
    color: orange;
    background-color: white;
    border: orange 1px solid;
  }
</style>

<div id="quest-navigator">
  <h1>Choose your quest</h1>

  <div id="navigator-links">
    <a href={getPath('/kitty')}>Show me a Kitty!</a>
  </div>
</div>
