
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let isActive = undefined;
export let isRight = undefined;
export let isUp = undefined;
export let isHoverable = undefined;



export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<bm-dropdown 
  is-active={isActive}
  is-right={isRight}
  is-up={isUp}
  is-hoverable={isHoverable}
  
  bind:this={__ref}
>
  <slot></slot>
</bm-dropdown>
  