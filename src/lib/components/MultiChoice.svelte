<script>
  import { range, outOfTen } from '@js/logic.js';
  import { Button } from '@components/ui/button/index.js';
  import * as Card from '@components/ui/card/index.js';

  let disabled = false;
  let btnText = 'Chewse';
  let buttons = range(1, 10);
  let activeNum = null;

  const highlightBtns = async () => {
    for (let a = 0; a < 2; a++) {
      for (let b = 0; b < buttons.length; b++) {
        activeNum = buttons[b];
        await new Promise((resolve) => setTimeout(resolve, 100));
      }
    }
    activeNum = outOfTen();
  };

  const runNumberPicker = () => {
    disabled = true;
    btnText = 'Running...';
    highlightBtns();
    setTimeout(() => {
      disabled = false;
      btnText = 'Chewse Again';
    }, 2500);
  };
</script>

<Card.Content class="grid grid-cols-5 gap-2">
  {#each buttons as numBtn}
    <Button
      variant="outline"
      size="icon"
      class={`cursor-default hover:bg-transparent ${numBtn === activeNum ? 'bg-primary' : ''}`}>
      {numBtn}
    </Button>
  {/each}
</Card.Content>
<Card.Footer>
  <Button class="mx-auto font-medium" on:click={runNumberPicker} {disabled}>
    <span class:italic={disabled} class:font-light={disabled}>{btnText}</span>
  </Button>
</Card.Footer>
