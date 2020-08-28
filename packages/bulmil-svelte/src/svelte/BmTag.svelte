
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let tag = undefined;
export let color = undefined;
export let size = undefined;
export let modifier = undefined;



export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<bm-tag 
  tag={tag}
  color={color}
  size={size}
  modifier={modifier}
  
  bind:this={__ref}
>
  <slot></slot>
</bm-tag>
  