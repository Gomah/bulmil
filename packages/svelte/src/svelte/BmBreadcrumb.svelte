
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let alignment = undefined;
export let size = undefined;
export let separator = undefined;



export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<bm-breadcrumb 
  alignment={alignment}
  size={size}
  separator={separator}
  
  bind:this={__ref}
>
  <slot></slot>
</bm-breadcrumb>
  