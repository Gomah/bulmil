/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from '@bulmil/core';


interface BmInputProps {
  
  /** Control Classes */
  controlClass?: Components.BmInput["controlClass"]
  
  /** Placeholder */
  placeholder?: Components.BmInput["placeholder"]
  
  /** Value */
  value?: Components.BmInput["value"]
  
  /** Type */
  type?: Components.BmInput["type"]
  
  /** Color */
  color?: Components.BmInput["color"]
  
  /** Size */
  size?: Components.BmInput["size"]
  
  /** State */
  state?: Components.BmInput["state"]
  
  /** Name */
  name?: Components.BmInput["name"]
  
  /** Required */
  required?: Components.BmInput["required"]
  
  /** Disabled state */
  disabled?: Components.BmInput["disabled"]
  
  /** The input will look similar to a normal one, but is not editable and has no shadow */
  readonly?: Components.BmInput["readonly"]
  
  /** Rounded */
  isRounded?: Components.BmInput["isRounded"]
  
  /** Loading state */
  isLoading?: Components.BmInput["isLoading"]
  
  /** Removes the background, border, shadow, and horizontal padding */
  isStatic?: Components.BmInput["isStatic"]
}

interface BmInputEvents {
  
}

interface BmInputSlots {
  default: any
}
  
/* generated by Svelte v3.37.0 */
import {
	SvelteComponent,
	binding_callbacks,
	create_slot,
	detach,
	element,
	flush,
	init,
	insert,
	safe_not_equal,
	set_custom_element_data,
	transition_in,
	transition_out,
	update_slot
} from "svelte/internal";

import { createEventDispatcher, onMount } from "svelte";

function create_fragment(ctx) {
	let bm_input;
	let current;
	const default_slot_template = /*#slots*/ ctx[17].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[16], null);

	return {
		c() {
			bm_input = element("bm-input");
			if (default_slot) default_slot.c();
			set_custom_element_data(bm_input, "control-class", /*controlClass*/ ctx[0]);
			set_custom_element_data(bm_input, "placeholder", /*placeholder*/ ctx[1]);
			set_custom_element_data(bm_input, "value", /*value*/ ctx[2]);
			set_custom_element_data(bm_input, "type", /*type*/ ctx[3]);
			set_custom_element_data(bm_input, "color", /*color*/ ctx[4]);
			set_custom_element_data(bm_input, "size", /*size*/ ctx[5]);
			set_custom_element_data(bm_input, "state", /*state*/ ctx[6]);
			set_custom_element_data(bm_input, "name", /*name*/ ctx[7]);
			set_custom_element_data(bm_input, "required", /*required*/ ctx[8]);
			set_custom_element_data(bm_input, "disabled", /*disabled*/ ctx[9]);
			set_custom_element_data(bm_input, "readonly", /*readonly*/ ctx[10]);
			set_custom_element_data(bm_input, "is-rounded", /*isRounded*/ ctx[11]);
			set_custom_element_data(bm_input, "is-loading", /*isLoading*/ ctx[12]);
			set_custom_element_data(bm_input, "is-static", /*isStatic*/ ctx[13]);
		},
		m(target, anchor) {
			insert(target, bm_input, anchor);

			if (default_slot) {
				default_slot.m(bm_input, null);
			}

			/*bm_input_binding*/ ctx[18](bm_input);
			current = true;
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 65536) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[16], dirty, null, null);
				}
			}

			if (!current || dirty & /*controlClass*/ 1) {
				set_custom_element_data(bm_input, "control-class", /*controlClass*/ ctx[0]);
			}

			if (!current || dirty & /*placeholder*/ 2) {
				set_custom_element_data(bm_input, "placeholder", /*placeholder*/ ctx[1]);
			}

			if (!current || dirty & /*value*/ 4) {
				set_custom_element_data(bm_input, "value", /*value*/ ctx[2]);
			}

			if (!current || dirty & /*type*/ 8) {
				set_custom_element_data(bm_input, "type", /*type*/ ctx[3]);
			}

			if (!current || dirty & /*color*/ 16) {
				set_custom_element_data(bm_input, "color", /*color*/ ctx[4]);
			}

			if (!current || dirty & /*size*/ 32) {
				set_custom_element_data(bm_input, "size", /*size*/ ctx[5]);
			}

			if (!current || dirty & /*state*/ 64) {
				set_custom_element_data(bm_input, "state", /*state*/ ctx[6]);
			}

			if (!current || dirty & /*name*/ 128) {
				set_custom_element_data(bm_input, "name", /*name*/ ctx[7]);
			}

			if (!current || dirty & /*required*/ 256) {
				set_custom_element_data(bm_input, "required", /*required*/ ctx[8]);
			}

			if (!current || dirty & /*disabled*/ 512) {
				set_custom_element_data(bm_input, "disabled", /*disabled*/ ctx[9]);
			}

			if (!current || dirty & /*readonly*/ 1024) {
				set_custom_element_data(bm_input, "readonly", /*readonly*/ ctx[10]);
			}

			if (!current || dirty & /*isRounded*/ 2048) {
				set_custom_element_data(bm_input, "is-rounded", /*isRounded*/ ctx[11]);
			}

			if (!current || dirty & /*isLoading*/ 4096) {
				set_custom_element_data(bm_input, "is-loading", /*isLoading*/ ctx[12]);
			}

			if (!current || dirty & /*isStatic*/ 8192) {
				set_custom_element_data(bm_input, "is-static", /*isStatic*/ ctx[13]);
			}
		},
		i(local) {
			if (current) return;
			transition_in(default_slot, local);
			current = true;
		},
		o(local) {
			transition_out(default_slot, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(bm_input);
			if (default_slot) default_slot.d(detaching);
			/*bm_input_binding*/ ctx[18](null);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let __ref;
	let __mounted = false;
	const dispatch = createEventDispatcher();
	let { controlClass = undefined } = $$props;
	let { placeholder = undefined } = $$props;
	let { value = undefined } = $$props;
	let { type = undefined } = $$props;
	let { color = undefined } = $$props;
	let { size = undefined } = $$props;
	let { state = undefined } = $$props;
	let { name = undefined } = $$props;
	let { required = undefined } = $$props;
	let { disabled = undefined } = $$props;
	let { readonly = undefined } = $$props;
	let { isRounded = undefined } = $$props;
	let { isLoading = undefined } = $$props;
	let { isStatic = undefined } = $$props;
	const getWebComponent = () => __ref;

	onMount(() => {
		__mounted = true;
	});

	const setProp = (prop, value) => {
		if (__ref) $$invalidate(14, __ref[prop] = value, __ref);
	};

	const onEvent = e => {
		e.stopPropagation();
		dispatch(e.type, e.detail);
	};

	function bm_input_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			__ref = $$value;
			$$invalidate(14, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ("controlClass" in $$props) $$invalidate(0, controlClass = $$props.controlClass);
		if ("placeholder" in $$props) $$invalidate(1, placeholder = $$props.placeholder);
		if ("value" in $$props) $$invalidate(2, value = $$props.value);
		if ("type" in $$props) $$invalidate(3, type = $$props.type);
		if ("color" in $$props) $$invalidate(4, color = $$props.color);
		if ("size" in $$props) $$invalidate(5, size = $$props.size);
		if ("state" in $$props) $$invalidate(6, state = $$props.state);
		if ("name" in $$props) $$invalidate(7, name = $$props.name);
		if ("required" in $$props) $$invalidate(8, required = $$props.required);
		if ("disabled" in $$props) $$invalidate(9, disabled = $$props.disabled);
		if ("readonly" in $$props) $$invalidate(10, readonly = $$props.readonly);
		if ("isRounded" in $$props) $$invalidate(11, isRounded = $$props.isRounded);
		if ("isLoading" in $$props) $$invalidate(12, isLoading = $$props.isLoading);
		if ("isStatic" in $$props) $$invalidate(13, isStatic = $$props.isStatic);
		if ("$$scope" in $$props) $$invalidate(16, $$scope = $$props.$$scope);
	};

	return [
		controlClass,
		placeholder,
		value,
		type,
		color,
		size,
		state,
		name,
		required,
		disabled,
		readonly,
		isRounded,
		isLoading,
		isStatic,
		__ref,
		getWebComponent,
		$$scope,
		slots,
		bm_input_binding
	];
}

class BmInput extends SvelteComponent {
  $$prop_def: BmInputProps;
  $$events_def: BmInputEvents;
  $$slot_def: BmInputSlots;

  $on<K extends keyof BmInputEvents>(type: K, callback: (e: BmInputEvents[K]) => any): () => void {
	  return super.$on(type, callback);
	}

  $set($$props: Partial<BmInputProps>): void {
	  super.$set($$props);
	}

	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			controlClass: 0,
			placeholder: 1,
			value: 2,
			type: 3,
			color: 4,
			size: 5,
			state: 6,
			name: 7,
			required: 8,
			disabled: 9,
			readonly: 10,
			isRounded: 11,
			isLoading: 12,
			isStatic: 13,
			getWebComponent: 15
		});
	}

	get controlClass() {
		return this.$$.ctx[0];
	}

	set controlClass(controlClass) {
		this.$set({ controlClass });
		flush();
	}

	get placeholder() {
		return this.$$.ctx[1];
	}

	set placeholder(placeholder) {
		this.$set({ placeholder });
		flush();
	}

	get value() {
		return this.$$.ctx[2];
	}

	set value(value) {
		this.$set({ value });
		flush();
	}

	get type() {
		return this.$$.ctx[3];
	}

	set type(type) {
		this.$set({ type });
		flush();
	}

	get color() {
		return this.$$.ctx[4];
	}

	set color(color) {
		this.$set({ color });
		flush();
	}

	get size() {
		return this.$$.ctx[5];
	}

	set size(size) {
		this.$set({ size });
		flush();
	}

	get state() {
		return this.$$.ctx[6];
	}

	set state(state) {
		this.$set({ state });
		flush();
	}

	get name() {
		return this.$$.ctx[7];
	}

	set name(name) {
		this.$set({ name });
		flush();
	}

	get required() {
		return this.$$.ctx[8];
	}

	set required(required) {
		this.$set({ required });
		flush();
	}

	get disabled() {
		return this.$$.ctx[9];
	}

	set disabled(disabled) {
		this.$set({ disabled });
		flush();
	}

	get readonly() {
		return this.$$.ctx[10];
	}

	set readonly(readonly) {
		this.$set({ readonly });
		flush();
	}

	get isRounded() {
		return this.$$.ctx[11];
	}

	set isRounded(isRounded) {
		this.$set({ isRounded });
		flush();
	}

	get isLoading() {
		return this.$$.ctx[12];
	}

	set isLoading(isLoading) {
		this.$set({ isLoading });
		flush();
	}

	get isStatic() {
		return this.$$.ctx[13];
	}

	set isStatic(isStatic) {
		this.$set({ isStatic });
		flush();
	}

	get getWebComponent(): HTMLBmInputElement | undefined {
		return this.$$.ctx[15];
	}
}

export default BmInput;