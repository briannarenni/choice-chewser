<script>
  import { ModeWatcher } from 'mode-watcher';
  import MainTabs from '@containers/MainTabs.svelte';
</script>

<ModeWatcher defaultMode={'dark'} />
<header>
  <h1 class="text-xl font-extrabold text-center mt-3">Choice Chewser</h1>
</header>
<main>
  <MainTabs />
</main>
