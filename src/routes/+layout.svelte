<!-- Layout component -->
<script>
  import '../app.postcss';
  import P5Background from '$lib/components/P5Background.svelte';
</script>

<!-- Add the P5 background -->
<P5Background />

<!-- Make sure content is above the canvas -->
<div>
  <slot />
</div>

<style>
  /* Force all content above the p5 canvas */
  div {
    position: relative;
    z-index: 1;
  }

  :global(body) {
    background-color: #000;
  }
  
  /* Make canvas stay behind everything */
  :global(canvas.p5Canvas) {
    z-index: -9999 !important;
    position: fixed !important;
  }
  
  /* Add some text shadow to improve visibility */
  :global(h1), :global(h2), :global(h3), :global(p) {
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);

  }
</style>