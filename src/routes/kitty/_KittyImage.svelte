<script>
  import Loader from "./_Loader.svelte";

  let kittyUrl = getKittyUrl();
  async function getKittyUrl() {
    const res = await fetch(
      `https://api.thecatapi.com/v1/images/search?limit=1&size=full`,
      {
        headers: {
          "x-api-key": "4ba6ad98-b2e1-4e4d-976c-6888d3dcf759"
        }
      }
    );

    return (await res.json())[0].url;
  }
</script>

<figure class="flex justify-center">
  {#await kittyUrl}
    <div class="flex justify-center align-center">
      <Loader />
      <p class="text-4xl">Loading your kitty</p>
    </div>
  {:then src}
    <img {src} alt="Kitty Gif" class="object-contain h-48 w-full" />
  {:catch}
    <p>Failed to load kitty image</p>
  {/await}
</figure>
