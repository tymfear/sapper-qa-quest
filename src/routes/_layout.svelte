<script>
  import Header from "../components/Header.svelte";
  import Footer from "../components/Footer.svelte";
  import Head from "../components/Head.svelte";

  export let segment;
</script>

<Head appName="" />

<Header {segment} />

<main
  class="container md:my-0 md:mx-auto p-4 w-6/12 flex-1 border-l-2 border-r-2
  h-container">
  <slot />
</main>

<Footer />
