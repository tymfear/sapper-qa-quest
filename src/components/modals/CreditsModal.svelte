<script>
  import { headerStore } from "../stores/store.js";
  import Modal from "../ModalCommon.svelte";
  import LinkedinLink from "../icons/LinkedinLink.svelte";
</script>

<Modal on:closeModal>
  <h3 slot="header">Credits</h3>
  <h4>Quest Author</h4>
  <div class="flex justify-between items-center">
    <h1 class="text-3xl">{$headerStore.author}</h1>
    <div class="w-12 h-12 ">
      <LinkedinLink link={$headerStore.profileLink} />
    </div>
  </div>
</Modal>
