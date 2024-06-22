<script>
  import { ModeWatcher } from 'mode-watcher';
  import MainTabs from '@containers/MainTabs.svelte';
</script>

<ModeWatcher />
<main>
  <header>
    <h1 class="scroll-m-20 text-xl font-extrabold text-center mt-3 mb-4">Choice Chewser</h1>
  </header>

  <MainTabs />
</main>
