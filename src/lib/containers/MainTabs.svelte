<script>
  import * as Tabs from '@components/ui/tabs/index.js';
  import * as Card from '@components/ui/card/index.js';
  import CoinTab from '@blocks/CoinTab.svelte';
  import MultiTab from '@blocks/MultiTab.svelte';
</script>

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
