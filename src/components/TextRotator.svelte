<script lang="ts">
  import { onMount } from "svelte";

  interface Props {
    initial: string;
    words: string[];
    suffix: string;
  }

  let { initial, words, suffix }: Props = $props();

  const rate = 0.5;
  let text = $state(initial);

  onMount(() => {
    let current = 0;
    let elapsed = 0;
    let lastTime = 0;

    function update(time) {
      elapsed += (time - lastTime) / 1000;
      if (elapsed > rate) {
        elapsed = 0;
        current = (current + 1) % words.length;
        text = words[current] + suffix;
      }
      lastTime = time;
      requestAnimationFrame(update);
    }

    requestAnimationFrame(update);
  });
</script>

<h1>{text}</h1>
