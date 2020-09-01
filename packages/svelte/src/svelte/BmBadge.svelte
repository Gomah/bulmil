
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let color = undefined;
export let position = undefined;
export let isOutlined = undefined;
export let isLight = undefined;



export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<bm-badge 
  color={color}
  position={position}
  is-outlined={isOutlined}
  is-light={isLight}
  
  bind:this={__ref}
>
  <slot></slot>
</bm-badge>
  