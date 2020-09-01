
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let alignment = undefined;
export let color = undefined;
export let isLight = undefined;
export let isVertical = undefined;



export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<bm-divider 
  alignment={alignment}
  color={color}
  is-light={isLight}
  is-vertical={isVertical}
  
  bind:this={__ref}
>
  <slot></slot>
</bm-divider>
  