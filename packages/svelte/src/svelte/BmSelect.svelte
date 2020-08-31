
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let controlClass = undefined;
export let color = undefined;
export let size = undefined;
export let state = undefined;
export let isMultiple = undefined;
export let isLoading = undefined;
export let isRounded = undefined;
export let icon = undefined;



export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<bm-select 
  control-class={controlClass}
  color={color}
  size={size}
  state={state}
  is-multiple={isMultiple}
  is-loading={isLoading}
  is-rounded={isRounded}
  icon={icon}
  
  bind:this={__ref}
>
  <slot></slot>
</bm-select>
  