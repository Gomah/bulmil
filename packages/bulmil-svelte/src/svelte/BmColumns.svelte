
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let isCentered = undefined;
export let isMobile = undefined;
export let isDesktop = undefined;
export let isMultiline = undefined;
export let isGapless = undefined;
export let isVcentered = undefined;
export let gaps = undefined;



export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<bm-columns 
  is-centered={isCentered}
  is-mobile={isMobile}
  is-desktop={isDesktop}
  is-multiline={isMultiline}
  is-gapless={isGapless}
  is-vcentered={isVcentered}
  gaps={gaps}
  
  bind:this={__ref}
>
  <slot></slot>
</bm-columns>
  