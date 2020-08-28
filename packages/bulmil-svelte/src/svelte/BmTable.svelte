
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let isBordered = undefined;
export let isStriped = undefined;
export let isScrollable = undefined;
export let isNarrow = undefined;
export let isHoverable = undefined;
export let isFullwidth = undefined;



export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<bm-table 
  is-bordered={isBordered}
  is-striped={isStriped}
  is-scrollable={isScrollable}
  is-narrow={isNarrow}
  is-hoverable={isHoverable}
  is-fullwidth={isFullwidth}
  
  bind:this={__ref}
>
  <slot></slot>
</bm-table>
  