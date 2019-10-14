<script>
  import Header from "../components/Header.svelte";
  import Footer from "../components/Footer.svelte";
  import Head from "../components/Head.svelte";

  export let segment;
</script>

<style>
  @media (min-width: 768px) {
    .container {
      margin: 0 auto;
      padding: 16px;
      width: 736px;
      flex: 1;
      border-left: solid;
      border-right: solid;
      height: calc(100vh - 6rem);
      min-height: 500px;
    }
  }
</style>

<Head appName="" />

<Header {segment} />

<main class="container">
  <slot />
</main>

<Footer />
