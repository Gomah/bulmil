
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let label = undefined;
export let message = undefined;
export let hasAddons = undefined;
export let size = undefined;
export let isHorizontal = undefined;
export let isGrouped = undefined;
export let isGroupedMultiline = undefined;



export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<bm-field 
  label={label}
  message={message}
  has-addons={hasAddons}
  size={size}
  is-horizontal={isHorizontal}
  is-grouped={isGrouped}
  is-grouped-multiline={isGroupedMultiline}
  
  bind:this={__ref}
>
  <slot></slot>
</bm-field>
  