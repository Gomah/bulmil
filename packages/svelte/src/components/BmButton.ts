/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from '@bulmil/core';


interface BmButtonProps {
  
  /** Is disabled? */
  disabled?: Components.BmButton["disabled"]
  
  /** Color */
  color?: Components.BmButton["color"]
  
  /** Size */
  size?: Components.BmButton["size"]
  
  /** Display the button in full-width */
  isFullwidth?: Components.BmButton["isFullwidth"]
  
  /** Is outlined */
  isOutlined?: Components.BmButton["isOutlined"]
  
  /** Is light */
  isLight?: Components.BmButton["isLight"]
  
  /** Is inverted */
  isInverted?: Components.BmButton["isInverted"]
  
  /** Rounded button */
  isRounded?: Components.BmButton["isRounded"]
  
  /** Hovered state */
  isHovered?: Components.BmButton["isHovered"]
  
  /** Focused state */
  isFocused?: Components.BmButton["isFocused"]
  
  /** Active state */
  isActive?: Components.BmButton["isActive"]
  
  /** Static */
  isStatic?: Components.BmButton["isStatic"]
  
  /** Loading state */
  isLoading?: Components.BmButton["isLoading"]
}

interface BmButtonEvents {
  
}

interface BmButtonSlots {
  default: any
}
  
/* generated by Svelte v3.38.2 */
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
	let bm_button;
	let current;
	const default_slot_template = /*#slots*/ ctx[16].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[15], null);

	return {
		c() {
			bm_button = element("bm-button");
			if (default_slot) default_slot.c();
			set_custom_element_data(bm_button, "disabled", /*disabled*/ ctx[0]);
			set_custom_element_data(bm_button, "color", /*color*/ ctx[1]);
			set_custom_element_data(bm_button, "size", /*size*/ ctx[2]);
			set_custom_element_data(bm_button, "is-fullwidth", /*isFullwidth*/ ctx[3]);
			set_custom_element_data(bm_button, "is-outlined", /*isOutlined*/ ctx[4]);
			set_custom_element_data(bm_button, "is-light", /*isLight*/ ctx[5]);
			set_custom_element_data(bm_button, "is-inverted", /*isInverted*/ ctx[6]);
			set_custom_element_data(bm_button, "is-rounded", /*isRounded*/ ctx[7]);
			set_custom_element_data(bm_button, "is-hovered", /*isHovered*/ ctx[8]);
			set_custom_element_data(bm_button, "is-focused", /*isFocused*/ ctx[9]);
			set_custom_element_data(bm_button, "is-active", /*isActive*/ ctx[10]);
			set_custom_element_data(bm_button, "is-static", /*isStatic*/ ctx[11]);
			set_custom_element_data(bm_button, "is-loading", /*isLoading*/ ctx[12]);
		},
		m(target, anchor) {
			insert(target, bm_button, anchor);

			if (default_slot) {
				default_slot.m(bm_button, null);
			}

			/*bm_button_binding*/ ctx[17](bm_button);
			current = true;
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 32768)) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[15], dirty, null, null);
				}
			}

			if (!current || dirty & /*disabled*/ 1) {
				set_custom_element_data(bm_button, "disabled", /*disabled*/ ctx[0]);
			}

			if (!current || dirty & /*color*/ 2) {
				set_custom_element_data(bm_button, "color", /*color*/ ctx[1]);
			}

			if (!current || dirty & /*size*/ 4) {
				set_custom_element_data(bm_button, "size", /*size*/ ctx[2]);
			}

			if (!current || dirty & /*isFullwidth*/ 8) {
				set_custom_element_data(bm_button, "is-fullwidth", /*isFullwidth*/ ctx[3]);
			}

			if (!current || dirty & /*isOutlined*/ 16) {
				set_custom_element_data(bm_button, "is-outlined", /*isOutlined*/ ctx[4]);
			}

			if (!current || dirty & /*isLight*/ 32) {
				set_custom_element_data(bm_button, "is-light", /*isLight*/ ctx[5]);
			}

			if (!current || dirty & /*isInverted*/ 64) {
				set_custom_element_data(bm_button, "is-inverted", /*isInverted*/ ctx[6]);
			}

			if (!current || dirty & /*isRounded*/ 128) {
				set_custom_element_data(bm_button, "is-rounded", /*isRounded*/ ctx[7]);
			}

			if (!current || dirty & /*isHovered*/ 256) {
				set_custom_element_data(bm_button, "is-hovered", /*isHovered*/ ctx[8]);
			}

			if (!current || dirty & /*isFocused*/ 512) {
				set_custom_element_data(bm_button, "is-focused", /*isFocused*/ ctx[9]);
			}

			if (!current || dirty & /*isActive*/ 1024) {
				set_custom_element_data(bm_button, "is-active", /*isActive*/ ctx[10]);
			}

			if (!current || dirty & /*isStatic*/ 2048) {
				set_custom_element_data(bm_button, "is-static", /*isStatic*/ ctx[11]);
			}

			if (!current || dirty & /*isLoading*/ 4096) {
				set_custom_element_data(bm_button, "is-loading", /*isLoading*/ ctx[12]);
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
			if (detaching) detach(bm_button);
			if (default_slot) default_slot.d(detaching);
			/*bm_button_binding*/ ctx[17](null);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let __ref;
	let __mounted = false;
	const dispatch = createEventDispatcher();
	let { disabled = undefined } = $$props;
	let { color = undefined } = $$props;
	let { size = undefined } = $$props;
	let { isFullwidth = undefined } = $$props;
	let { isOutlined = undefined } = $$props;
	let { isLight = undefined } = $$props;
	let { isInverted = undefined } = $$props;
	let { isRounded = undefined } = $$props;
	let { isHovered = undefined } = $$props;
	let { isFocused = undefined } = $$props;
	let { isActive = undefined } = $$props;
	let { isStatic = undefined } = $$props;
	let { isLoading = undefined } = $$props;
	const getWebComponent = () => __ref;

	onMount(() => {
		__mounted = true;
	});

	const setProp = (prop, value) => {
		if (__ref) $$invalidate(13, __ref[prop] = value, __ref);
	};

	const onEvent = e => {
		e.stopPropagation();
		dispatch(e.type, e.detail);
	};

	function bm_button_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			__ref = $$value;
			$$invalidate(13, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ("disabled" in $$props) $$invalidate(0, disabled = $$props.disabled);
		if ("color" in $$props) $$invalidate(1, color = $$props.color);
		if ("size" in $$props) $$invalidate(2, size = $$props.size);
		if ("isFullwidth" in $$props) $$invalidate(3, isFullwidth = $$props.isFullwidth);
		if ("isOutlined" in $$props) $$invalidate(4, isOutlined = $$props.isOutlined);
		if ("isLight" in $$props) $$invalidate(5, isLight = $$props.isLight);
		if ("isInverted" in $$props) $$invalidate(6, isInverted = $$props.isInverted);
		if ("isRounded" in $$props) $$invalidate(7, isRounded = $$props.isRounded);
		if ("isHovered" in $$props) $$invalidate(8, isHovered = $$props.isHovered);
		if ("isFocused" in $$props) $$invalidate(9, isFocused = $$props.isFocused);
		if ("isActive" in $$props) $$invalidate(10, isActive = $$props.isActive);
		if ("isStatic" in $$props) $$invalidate(11, isStatic = $$props.isStatic);
		if ("isLoading" in $$props) $$invalidate(12, isLoading = $$props.isLoading);
		if ("$$scope" in $$props) $$invalidate(15, $$scope = $$props.$$scope);
	};

	return [
		disabled,
		color,
		size,
		isFullwidth,
		isOutlined,
		isLight,
		isInverted,
		isRounded,
		isHovered,
		isFocused,
		isActive,
		isStatic,
		isLoading,
		__ref,
		getWebComponent,
		$$scope,
		slots,
		bm_button_binding
	];
}

class BmButton extends SvelteComponent {
  $$prop_def: BmButtonProps;
  $$events_def: BmButtonEvents;
  $$slot_def: BmButtonSlots;

  $on<K extends keyof BmButtonEvents>(type: K, callback: (e: BmButtonEvents[K]) => any): () => void {
	  return super.$on(type, callback);
	}

  $set($$props: Partial<BmButtonProps>): void {
	  super.$set($$props);
	}

	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			disabled: 0,
			color: 1,
			size: 2,
			isFullwidth: 3,
			isOutlined: 4,
			isLight: 5,
			isInverted: 6,
			isRounded: 7,
			isHovered: 8,
			isFocused: 9,
			isActive: 10,
			isStatic: 11,
			isLoading: 12,
			getWebComponent: 14
		});
	}

	get disabled() {
		return this.$$.ctx[0];
	}

	set disabled(disabled) {
		this.$set({ disabled });
		flush();
	}

	get color() {
		return this.$$.ctx[1];
	}

	set color(color) {
		this.$set({ color });
		flush();
	}

	get size() {
		return this.$$.ctx[2];
	}

	set size(size) {
		this.$set({ size });
		flush();
	}

	get isFullwidth() {
		return this.$$.ctx[3];
	}

	set isFullwidth(isFullwidth) {
		this.$set({ isFullwidth });
		flush();
	}

	get isOutlined() {
		return this.$$.ctx[4];
	}

	set isOutlined(isOutlined) {
		this.$set({ isOutlined });
		flush();
	}

	get isLight() {
		return this.$$.ctx[5];
	}

	set isLight(isLight) {
		this.$set({ isLight });
		flush();
	}

	get isInverted() {
		return this.$$.ctx[6];
	}

	set isInverted(isInverted) {
		this.$set({ isInverted });
		flush();
	}

	get isRounded() {
		return this.$$.ctx[7];
	}

	set isRounded(isRounded) {
		this.$set({ isRounded });
		flush();
	}

	get isHovered() {
		return this.$$.ctx[8];
	}

	set isHovered(isHovered) {
		this.$set({ isHovered });
		flush();
	}

	get isFocused() {
		return this.$$.ctx[9];
	}

	set isFocused(isFocused) {
		this.$set({ isFocused });
		flush();
	}

	get isActive() {
		return this.$$.ctx[10];
	}

	set isActive(isActive) {
		this.$set({ isActive });
		flush();
	}

	get isStatic() {
		return this.$$.ctx[11];
	}

	set isStatic(isStatic) {
		this.$set({ isStatic });
		flush();
	}

	get isLoading() {
		return this.$$.ctx[12];
	}

	set isLoading(isLoading) {
		this.$set({ isLoading });
		flush();
	}

	get getWebComponent(): HTMLBmButtonElement | undefined {
		return this.$$.ctx[14];
	}
}

export default BmButton;