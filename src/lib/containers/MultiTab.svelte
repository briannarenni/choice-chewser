<script>
  import * as Tabs from '@components/ui/tabs/index.js';
  import * as Card from '@components/ui/card/index.js';
  import { Button } from '@components/ui/button/index.js';
  import MultiChoice from '@components/MultiChoice.svelte';
</script>

<Tabs.Content value="multi">
  <Card.Root>
    <Card.Header>
      <Card.Description class="text-center font-light">Random number from 1-10:</Card.Description>
    </Card.Header>
    <MultiChoice />
  </Card.Root>
</Tabs.Content>
