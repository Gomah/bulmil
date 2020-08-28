
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let color = undefined;
export let size = undefined;
export let isThin = undefined;
export let isRounded = undefined;
export let isOutlined = undefined;
export let disabled = undefined;
export let checked = undefined;



export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<bm-switch 
  color={color}
  size={size}
  is-thin={isThin}
  is-rounded={isRounded}
  is-outlined={isOutlined}
  disabled={disabled}
  checked={checked}
  
  bind:this={__ref}
>
  <slot></slot>
</bm-switch>
  