
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let size = undefined;
export let alignment = undefined;
export let tabStyle = undefined;
export let isRounded = undefined;
export let isFullwidth = undefined;



export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<bm-tabs 
  size={size}
  alignment={alignment}
  tab-style={tabStyle}
  is-rounded={isRounded}
  is-fullwidth={isFullwidth}
  
  bind:this={__ref}
>
  <slot></slot>
</bm-tabs>
  