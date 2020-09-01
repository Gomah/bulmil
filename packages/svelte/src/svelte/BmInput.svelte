
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let controlClass = undefined;
export let placeholder = undefined;
export let value = undefined;
export let type = undefined;
export let color = undefined;
export let size = undefined;
export let state = undefined;
export let name = undefined;
export let required = undefined;
export let disabled = undefined;
export let readonly = undefined;
export let isRounded = undefined;
export let isLoading = undefined;
export let isStatic = undefined;



export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<bm-input 
  control-class={controlClass}
  placeholder={placeholder}
  value={value}
  type={type}
  color={color}
  size={size}
  state={state}
  name={name}
  required={required}
  disabled={disabled}
  readonly={readonly}
  is-rounded={isRounded}
  is-loading={isLoading}
  is-static={isStatic}
  
  bind:this={__ref}
>
  <slot></slot>
</bm-input>
  