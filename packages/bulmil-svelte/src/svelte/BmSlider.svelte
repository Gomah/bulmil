
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let step = undefined;
export let min = undefined;
export let max = undefined;
export let value = undefined;
export let color = undefined;
export let size = undefined;
export let isCircle = undefined;
export let disabled = undefined;



export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<bm-slider 
  step={step}
  min={min}
  max={max}
  value={value}
  color={color}
  size={size}
  is-circle={isCircle}
  disabled={disabled}
  
  bind:this={__ref}
>
  <slot></slot>
</bm-slider>
  