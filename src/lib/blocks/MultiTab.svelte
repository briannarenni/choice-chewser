<script>
  import * as Tabs from '@components/ui/tabs/index.js';
  import * as Card from '@components/ui/card/index.js';
  import { Button } from '@lib/components/ui/button/index.js';
</script>

<!-- TODO:Split into Multi-Choice and Outcome -->
<Tabs.Content value="multi">
  <Card.Root>
    <Card.Header>
         <Card.Description class="text-center">Get a random number from 1-10:</Card.Description>
    </Card.Header>
    <Card.Content class="grid grid-cols-5 gap-2">
      {#each Array(10)
        .fill(0)
        .map((_, i) => i + 1) as num}
        <Button variant="outline" size="icon">{num}</Button>
      {/each}
      <!-- TODO: Add Outcome -->
    </Card.Content>
    <Card.Footer>
      <Button class="mx-auto">Chewse!</Button>
    </Card.Footer>
  </Card.Root>
</Tabs.Content>
