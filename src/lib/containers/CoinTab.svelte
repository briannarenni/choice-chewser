<script>
  import * as Tabs from '@components/ui/tabs/index.js';
  import * as Card from '@components/ui/card/index.js';
  import { Button } from '@components/ui/button/index.js';
  import CoinFlip from '@components/CoinFlip.svelte';
</script>

<Tabs.Content value="coinflip">
  <Card.Root>
    <Card.Header class="px-6 py-4">
      <Card.Description class="text-center font-light">For those classic 2 choice dilemmas.</Card.Description>
    </Card.Header>
    <CoinFlip />
  </Card.Root>
</Tabs.Content>
