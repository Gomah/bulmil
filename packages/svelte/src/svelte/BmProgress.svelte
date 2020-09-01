
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let value = undefined;
export let max = undefined;
export let color = undefined;
export let size = undefined;



export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<bm-progress 
  value={value}
  max={max}
  color={color}
  size={size}
  
  bind:this={__ref}
>
  <slot></slot>
</bm-progress>
  