<script>
  import * as Tabs from '@components/ui/tabs/index.js';
  import * as Card from '@components/ui/card/index.js';
  import { Button } from '@lib/components/ui/button/index.js';
  import CoinFlip from '@blocks/CoinFlip.svelte';
</script>

<Tabs.Content value="coinflip">
  <Card.Root>
    <Card.Header>
      <Card.Description class="text-center">For those classic 2 choice dilemmas:</Card.Description>
    </Card.Header>

    <CoinFlip />
    <!-- TODO: Add Outcome -->
  </Card.Root>
</Tabs.Content>
