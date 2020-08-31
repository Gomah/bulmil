
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let name = undefined;
export let placeholder = undefined;
export let color = undefined;
export let size = undefined;
export let alignment = undefined;
export let hasName = undefined;
export let isRight = undefined;
export let isFullwidth = undefined;
export let file = undefined;
export let isBoxed = undefined;



export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };

$: if (__mounted) setProp('file', file);

const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<bm-file 
  name={name}
  placeholder={placeholder}
  color={color}
  size={size}
  alignment={alignment}
  has-name={hasName}
  is-right={isRight}
  is-fullwidth={isFullwidth}
  is-boxed={isBoxed}
  
  bind:this={__ref}
>
  <slot></slot>
</bm-file>
  