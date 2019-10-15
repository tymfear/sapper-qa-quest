<script>
  import { getPath } from "../../routeHelper";
  export let segment;
</script>

<nav class="text-right">
  <a
    href={getPath(segment ? '/kitty' : '/kitty/admin')}
    class="hover:shadow-gold-50 text-gold border-gold border-1/2 p-2">
    Show {segment ? 'Member' : 'Admin'} Area
  </a>
</nav>
