
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let controlClass = undefined;
export let value = undefined;
export let color = undefined;
export let size = undefined;
export let state = undefined;
export let readonly = undefined;
export let disabled = undefined;
export let isLoading = undefined;
export let hasFixedSize = undefined;
export let rows = undefined;



export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<bm-textarea 
  control-class={controlClass}
  value={value}
  color={color}
  size={size}
  state={state}
  readonly={readonly}
  disabled={disabled}
  is-loading={isLoading}
  has-fixed-size={hasFixedSize}
  rows={rows}
  
  bind:this={__ref}
>
  <slot></slot>
</bm-textarea>
  