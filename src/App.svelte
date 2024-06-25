<script>
  import { ModeWatcher } from 'mode-watcher';
  import { Separator } from '@components/ui/separator/index.js';

  import MainTabs from '@containers/MainTabs.svelte';
  import Footer from '@containers/Footer.svelte';
</script>

<ModeWatcher defaultMode={'dark'} />
<header class="mt-2">
  <h1 class="text-xl font-extrabold text-center">Choice Chewser</h1>
</header>

<Separator />
<MainTabs />
<Footer />
