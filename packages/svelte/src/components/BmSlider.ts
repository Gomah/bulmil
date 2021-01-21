/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from '@bulmil/core';


interface BmSliderProps {
  
  /** Step */
  step?: Components.BmSlider["step"]
  
  /** Min */
  min?: Components.BmSlider["min"]
  
  /** CSS Classes */
  max?: Components.BmSlider["max"]
  
  /** Value */
  value?: Components.BmSlider["value"]
  
  /** Color */
  color?: Components.BmSlider["color"]
  
  /** Size */
  size?: Components.BmSlider["size"]
  
  /** Circle */
  isCircle?: Components.BmSlider["isCircle"]
  
  /** Disabled */
  disabled?: Components.BmSlider["disabled"]
}

interface BmSliderEvents {
  
}

interface BmSliderSlots {
  default: any
}
  
/* generated by Svelte v3.31.2 */
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
	let bm_slider;
	let current;
	const default_slot_template = /*#slots*/ ctx[11].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[10], null);

	return {
		c() {
			bm_slider = element("bm-slider");
			if (default_slot) default_slot.c();
			set_custom_element_data(bm_slider, "step", /*step*/ ctx[0]);
			set_custom_element_data(bm_slider, "min", /*min*/ ctx[1]);
			set_custom_element_data(bm_slider, "max", /*max*/ ctx[2]);
			set_custom_element_data(bm_slider, "value", /*value*/ ctx[3]);
			set_custom_element_data(bm_slider, "color", /*color*/ ctx[4]);
			set_custom_element_data(bm_slider, "size", /*size*/ ctx[5]);
			set_custom_element_data(bm_slider, "is-circle", /*isCircle*/ ctx[6]);
			set_custom_element_data(bm_slider, "disabled", /*disabled*/ ctx[7]);
		},
		m(target, anchor) {
			insert(target, bm_slider, anchor);

			if (default_slot) {
				default_slot.m(bm_slider, null);
			}

			/*bm_slider_binding*/ ctx[12](bm_slider);
			current = true;
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 1024) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[10], dirty, null, null);
				}
			}

			if (!current || dirty & /*step*/ 1) {
				set_custom_element_data(bm_slider, "step", /*step*/ ctx[0]);
			}

			if (!current || dirty & /*min*/ 2) {
				set_custom_element_data(bm_slider, "min", /*min*/ ctx[1]);
			}

			if (!current || dirty & /*max*/ 4) {
				set_custom_element_data(bm_slider, "max", /*max*/ ctx[2]);
			}

			if (!current || dirty & /*value*/ 8) {
				set_custom_element_data(bm_slider, "value", /*value*/ ctx[3]);
			}

			if (!current || dirty & /*color*/ 16) {
				set_custom_element_data(bm_slider, "color", /*color*/ ctx[4]);
			}

			if (!current || dirty & /*size*/ 32) {
				set_custom_element_data(bm_slider, "size", /*size*/ ctx[5]);
			}

			if (!current || dirty & /*isCircle*/ 64) {
				set_custom_element_data(bm_slider, "is-circle", /*isCircle*/ ctx[6]);
			}

			if (!current || dirty & /*disabled*/ 128) {
				set_custom_element_data(bm_slider, "disabled", /*disabled*/ ctx[7]);
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
			if (detaching) detach(bm_slider);
			if (default_slot) default_slot.d(detaching);
			/*bm_slider_binding*/ ctx[12](null);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let __ref;
	let __mounted = false;
	const dispatch = createEventDispatcher();
	let { step = undefined } = $$props;
	let { min = undefined } = $$props;
	let { max = undefined } = $$props;
	let { value = undefined } = $$props;
	let { color = undefined } = $$props;
	let { size = undefined } = $$props;
	let { isCircle = undefined } = $$props;
	let { disabled = undefined } = $$props;
	const getWebComponent = () => __ref;

	onMount(() => {
		__mounted = true;
	});

	const setProp = (prop, value) => {
		if (__ref) $$invalidate(8, __ref[prop] = value, __ref);
	};

	const onEvent = e => {
		e.stopPropagation();
		dispatch(e.type, e.detail);
	};

	function bm_slider_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			__ref = $$value;
			$$invalidate(8, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ("step" in $$props) $$invalidate(0, step = $$props.step);
		if ("min" in $$props) $$invalidate(1, min = $$props.min);
		if ("max" in $$props) $$invalidate(2, max = $$props.max);
		if ("value" in $$props) $$invalidate(3, value = $$props.value);
		if ("color" in $$props) $$invalidate(4, color = $$props.color);
		if ("size" in $$props) $$invalidate(5, size = $$props.size);
		if ("isCircle" in $$props) $$invalidate(6, isCircle = $$props.isCircle);
		if ("disabled" in $$props) $$invalidate(7, disabled = $$props.disabled);
		if ("$$scope" in $$props) $$invalidate(10, $$scope = $$props.$$scope);
	};

	return [
		step,
		min,
		max,
		value,
		color,
		size,
		isCircle,
		disabled,
		__ref,
		getWebComponent,
		$$scope,
		slots,
		bm_slider_binding
	];
}

class BmSlider extends SvelteComponent {
  $$prop_def: BmSliderProps;
  $$events_def: BmSliderEvents;
  $$slot_def: BmSliderSlots;

  $on<K extends keyof BmSliderEvents>(type: K, callback: (e: BmSliderEvents[K]) => any): () => void {
	  return super.$on(type, callback);
	}

  $set($$props: Partial<BmSliderProps>): void {
	  super.$set($$props);
	}

	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			step: 0,
			min: 1,
			max: 2,
			value: 3,
			color: 4,
			size: 5,
			isCircle: 6,
			disabled: 7,
			getWebComponent: 9
		});
	}

	get step() {
		return this.$$.ctx[0];
	}

	set step(step) {
		this.$set({ step });
		flush();
	}

	get min() {
		return this.$$.ctx[1];
	}

	set min(min) {
		this.$set({ min });
		flush();
	}

	get max() {
		return this.$$.ctx[2];
	}

	set max(max) {
		this.$set({ max });
		flush();
	}

	get value() {
		return this.$$.ctx[3];
	}

	set value(value) {
		this.$set({ value });
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

	get isCircle() {
		return this.$$.ctx[6];
	}

	set isCircle(isCircle) {
		this.$set({ isCircle });
		flush();
	}

	get disabled() {
		return this.$$.ctx[7];
	}

	set disabled(disabled) {
		this.$set({ disabled });
		flush();
	}

	get getWebComponent(): HTMLBmSliderElement | undefined {
		return this.$$.ctx[9];
	}
}

export default BmSlider;