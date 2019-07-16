<script>
  import Navigation from "./_Navigation.svelte";
  import Head from "../../components/Head.svelte";
  export let segment;
</script>

<Head appName="Show me a kitty" />
<Navigation {segment} />

<slot />
