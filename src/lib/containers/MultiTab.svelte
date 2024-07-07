<script>
  import * as Tabs from '@components/ui/tabs/index.js';
  import * as Card from '@components/ui/card/index.js';
  import MultiChoice from '@components/MultiChoice.svelte';
</script>

<Tabs.Content value="multi">
  <Card.Root>
    <Card.Header class="px-6 py-4">
      <Card.Description class="text-center font-light">Random number from 1-10:</Card.Description>
    </Card.Header>
    <MultiChoice />
  </Card.Root>
</Tabs.Content>
