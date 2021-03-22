/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from '@bulmil/core';


interface BmProgressProps {
  
  /** Value */
  value?: Components.BmProgress["value"]
  
  /** Maximum value */
  max?: Components.BmProgress["max"]
  
  /** Color */
  color?: Components.BmProgress["color"]
  
  /** Size */
  size?: Components.BmProgress["size"]
}

interface BmProgressEvents {
  
}

interface BmProgressSlots {
  default: any
}
  
/* generated by Svelte v3.35.0 */
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
	let bm_progress;
	let current;
	const default_slot_template = /*#slots*/ ctx[7].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[6], null);

	return {
		c() {
			bm_progress = element("bm-progress");
			if (default_slot) default_slot.c();
			set_custom_element_data(bm_progress, "value", /*value*/ ctx[0]);
			set_custom_element_data(bm_progress, "max", /*max*/ ctx[1]);
			set_custom_element_data(bm_progress, "color", /*color*/ ctx[2]);
			set_custom_element_data(bm_progress, "size", /*size*/ ctx[3]);
		},
		m(target, anchor) {
			insert(target, bm_progress, anchor);

			if (default_slot) {
				default_slot.m(bm_progress, null);
			}

			/*bm_progress_binding*/ ctx[8](bm_progress);
			current = true;
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 64) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[6], dirty, null, null);
				}
			}

			if (!current || dirty & /*value*/ 1) {
				set_custom_element_data(bm_progress, "value", /*value*/ ctx[0]);
			}

			if (!current || dirty & /*max*/ 2) {
				set_custom_element_data(bm_progress, "max", /*max*/ ctx[1]);
			}

			if (!current || dirty & /*color*/ 4) {
				set_custom_element_data(bm_progress, "color", /*color*/ ctx[2]);
			}

			if (!current || dirty & /*size*/ 8) {
				set_custom_element_data(bm_progress, "size", /*size*/ ctx[3]);
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
			if (detaching) detach(bm_progress);
			if (default_slot) default_slot.d(detaching);
			/*bm_progress_binding*/ ctx[8](null);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let __ref;
	let __mounted = false;
	const dispatch = createEventDispatcher();
	let { value = undefined } = $$props;
	let { max = undefined } = $$props;
	let { color = undefined } = $$props;
	let { size = undefined } = $$props;
	const getWebComponent = () => __ref;

	onMount(() => {
		__mounted = true;
	});

	const setProp = (prop, value) => {
		if (__ref) $$invalidate(4, __ref[prop] = value, __ref);
	};

	const onEvent = e => {
		e.stopPropagation();
		dispatch(e.type, e.detail);
	};

	function bm_progress_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			__ref = $$value;
			$$invalidate(4, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ("value" in $$props) $$invalidate(0, value = $$props.value);
		if ("max" in $$props) $$invalidate(1, max = $$props.max);
		if ("color" in $$props) $$invalidate(2, color = $$props.color);
		if ("size" in $$props) $$invalidate(3, size = $$props.size);
		if ("$$scope" in $$props) $$invalidate(6, $$scope = $$props.$$scope);
	};

	return [
		value,
		max,
		color,
		size,
		__ref,
		getWebComponent,
		$$scope,
		slots,
		bm_progress_binding
	];
}

class BmProgress extends SvelteComponent {
  $$prop_def: BmProgressProps;
  $$events_def: BmProgressEvents;
  $$slot_def: BmProgressSlots;

  $on<K extends keyof BmProgressEvents>(type: K, callback: (e: BmProgressEvents[K]) => any): () => void {
	  return super.$on(type, callback);
	}

  $set($$props: Partial<BmProgressProps>): void {
	  super.$set($$props);
	}

	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			value: 0,
			max: 1,
			color: 2,
			size: 3,
			getWebComponent: 5
		});
	}

	get value() {
		return this.$$.ctx[0];
	}

	set value(value) {
		this.$set({ value });
		flush();
	}

	get max() {
		return this.$$.ctx[1];
	}

	set max(max) {
		this.$set({ max });
		flush();
	}

	get color() {
		return this.$$.ctx[2];
	}

	set color(color) {
		this.$set({ color });
		flush();
	}

	get size() {
		return this.$$.ctx[3];
	}

	set size(size) {
		this.$set({ size });
		flush();
	}

	get getWebComponent(): HTMLBmProgressElement | undefined {
		return this.$$.ctx[5];
	}
}

export default BmProgress;