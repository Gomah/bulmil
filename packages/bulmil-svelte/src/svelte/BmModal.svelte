
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let isActive = undefined;
export let hasModalCard = undefined;



export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<bm-modal 
  is-active={isActive}
  has-modal-card={hasModalCard}
  
  bind:this={__ref}
>
  <slot></slot>
</bm-modal>
  