<script>
  import * as Tabs from '@components/ui/tabs/index.js';
  import CoinTab from '@containers/CoinTab.svelte';
  import MultiTab from '@containers/MultiTab.svelte';
</script>

<main>
  <Tabs.Root value="coinflip" class="w-[400px]">
    <Tabs.List class="grid w-full grid-cols-2">
      <Tabs.Trigger value="coinflip" class="border-b border-transparent data-[state=active]:bg-primary">
        Coin Flip
      </Tabs.Trigger>
      <Tabs.Trigger value="multi" class="border-b border-transparent data-[state=active]:bg-primary">
        Multi-Choice
      </Tabs.Trigger>
    </Tabs.List>
    <CoinTab />
    <MultiTab />
  </Tabs.Root>
</main>
