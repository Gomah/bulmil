
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let size = undefined;
export let alignment = undefined;
export let isRounded = undefined;



export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<bm-pagination 
  size={size}
  alignment={alignment}
  is-rounded={isRounded}
  
  bind:this={__ref}
>
  <slot></slot>
</bm-pagination>
  