<script>
  import { createEventDispatcher } from "svelte";
  import { fade } from "svelte/transition";
  const dispatch = createEventDispatcher();
  const dispatchClose = () => dispatch("closeModal");
</script>

<style>
  .modal-background {
    background: rgba(0, 0, 0, 0.3);
  }

  .modal {
    position: absolute;
    left: 50%;
    top: 50%;
    width: calc(100vw - 4em);
    max-width: 32em;
    max-height: calc(100vh - 4em);
    overflow: auto;
    transform: translate(-50%, -50%);
    padding: 1em;
    border-radius: 0.2em;
    background: white;
    z-index: 10;
  }

  footer {
    text-align: right;
    border-top: #e2dada solid 1px;
    padding-top: 1rem;
  }
  footer .close {
    text-decoration: none;
    color: orange;
    border: solid orange 0.5px;
    padding: 5px;
    outline: none;
  }

  footer .close:hover {
    box-shadow: 0 0 10px rgba(255, 165, 0, 0.5);
  }
  #header {
    text-align: center;
    border-bottom: #e2dada solid 1px;
  }
</style>

<div
  class="modal-background fixed top-0 left-0 w-full h-full z-10"
  on:click={dispatchClose} />
<div transition:fade={{ duration: 20 }}>

  <div class="modal">
    <header id="header">
      <slot name="header" />
    </header>

    <slot />
    <footer>
      <button class="close" on:click={dispatchClose}>Close</button>
    </footer>
  </div>
</div>
