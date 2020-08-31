
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let isTransparent = undefined;
export let color = undefined;
export let fixedPosition = undefined;
export let isSpaced = undefined;



export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<bm-navbar 
  is-transparent={isTransparent}
  color={color}
  fixed-position={fixedPosition}
  is-spaced={isSpaced}
  
  bind:this={__ref}
>
  <slot></slot>
</bm-navbar>
  