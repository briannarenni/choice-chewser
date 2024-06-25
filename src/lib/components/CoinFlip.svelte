<script>
  import heads from '/src/assets/heads.svg';
  import tails from '/src/assets/tails.svg';
  import { flipCoin } from '@js/logic.js';
  import { Avatar } from '@components/ui/avatar/index.js';
  import { Button } from '@components/ui/button/index.js';
  import * as Card from '@components/ui/card/index.js';

  let btnText = 'Chewse';
  let disabled = false;
  let showHeads = true;
  let isFlipping = false;
  let caption = 'Ready?';

  const flip = () => {
    caption = '...';
    disabled = true;
    btnText = 'Flipping...';
    isFlipping = true;
    showHeads = flipCoin();
    setTimeout(() => {
      isFlipping = false;
    }, 1200);
    outcome();
  };

  const outcome = () => {
    setTimeout(() => {
      caption = showHeads ? 'Heads!' : 'Tails!';
      disabled = false;
      btnText = 'Chewse Again';
    }, 2000);
  };
</script>

<Card.Content class="flex flex-col justify-center items-center pb-2">
  <div class="coin-wrap rounded-full bg-orange-500">
    <div class="coin" class:isFlipping>
      {#if showHeads}
        <img src={heads} alt="heads" />
      {:else}
        <img src={tails} alt="tails" />
      {/if}
    </div>
  </div>
  <div>
    <p class="text-center my-3 roboto-500 text-base">{caption}</p>
  </div>
</Card.Content>
<Card.Footer class="pt-2">
  <Button class="mx-auto font-medium" on:click={flip} {disabled}>
    <span class:italic={disabled}>{btnText}</span>
  </Button>
</Card.Footer>

<style>
  .coin-wrap {
    perspective: 1000px;
    width: 80px;
    height: 80px;
  }

  .coin {
    width: 100%;
    height: 100%;
    transition: transform 1s;
    transform-style: preserve-3d;
    position: relative;
  }

  .coin img {
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    position: absolute;
    top: 0;
  }

  .isFlipping {
    transform: rotateY(180deg);
  }
</style>
