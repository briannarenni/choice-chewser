<script>
  import { onMount } from 'svelte';
  import { detectBrowser } from '@js/logic.js';
  import GithubLogo from 'svelte-radix/GithubLogo.svelte';
  import ThemeBtn from '@components/ThemeBtn.svelte';

  let extLink = '';

  onMount(() => (extLink = detectBrowser()));
</script>

<footer class="flex justify-between items-center mb-2 w-3/4">
  <a href="https://github.com/briannarenni/choice-chewser" class="group relative flex items-center" target="_blank">
    <GithubLogo
      class="h-[35px] w-[35px] transition-transform transform group-hover:scale-110 dark:group-hover:scale-110" />
    <span class="sr-only">GitHub Repository</span>
  </a>

  <a href={extLink} target="_blank">Rate extension</a>
  <ThemeBtn />
</footer>
