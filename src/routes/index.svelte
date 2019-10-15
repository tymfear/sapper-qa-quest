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

<TransitionWrapper>
  <div class="flex flex-col items-center">
    <h1 class="text-4xl">Choose your quest</h1>

    <div class="w-full">
      <a
        rel="prefetch"
        href={getPath('/kitty')}
        class="hover:border hover:border-gold hover:border-solid hover:text-gold
        hover:bg-white bg-gold block text-center text-white p-4">
        Show me a Kitty!
      </a>
    </div>
  </div>
</TransitionWrapper>
