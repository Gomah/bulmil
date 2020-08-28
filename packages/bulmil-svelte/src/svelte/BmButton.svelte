
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let disabled = undefined;
export let color = undefined;
export let size = undefined;
export let isFullwidth = undefined;
export let isOutlined = undefined;
export let isLight = undefined;
export let isInverted = undefined;
export let isRounded = undefined;
export let isHovered = undefined;
export let isFocused = undefined;
export let isActive = undefined;
export let isStatic = undefined;
export let isLoading = undefined;



export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<bm-button 
  disabled={disabled}
  color={color}
  size={size}
  is-fullwidth={isFullwidth}
  is-outlined={isOutlined}
  is-light={isLight}
  is-inverted={isInverted}
  is-rounded={isRounded}
  is-hovered={isHovered}
  is-focused={isFocused}
  is-active={isActive}
  is-static={isStatic}
  is-loading={isLoading}
  
  bind:this={__ref}
>
  <slot></slot>
</bm-button>
  