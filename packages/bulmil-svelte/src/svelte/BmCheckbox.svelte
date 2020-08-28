
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let inputClass = undefined;
export let labelClass = undefined;
export let checked = undefined;
export let disabled = undefined;



export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<bm-checkbox 
  input-class={inputClass}
  label-class={labelClass}
  checked={checked}
  disabled={disabled}
  
  bind:this={__ref}
>
  <slot></slot>
</bm-checkbox>
  