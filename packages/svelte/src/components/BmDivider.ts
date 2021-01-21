/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from '@bulmil/core';


interface BmDividerProps {
  
  /** Alignment */
  alignment?: Components.BmDivider["alignment"]
  
  /** Color */
  color?: Components.BmDivider["color"]
  
  /** IsLight */
  isLight?: Components.BmDivider["isLight"]
  
  /** IsVertical */
  isVertical?: Components.BmDivider["isVertical"]
}

interface BmDividerEvents {
  
}

interface BmDividerSlots {
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
	let bm_divider;
	let current;
	const default_slot_template = /*#slots*/ ctx[7].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[6], null);

	return {
		c() {
			bm_divider = element("bm-divider");
			if (default_slot) default_slot.c();
			set_custom_element_data(bm_divider, "alignment", /*alignment*/ ctx[0]);
			set_custom_element_data(bm_divider, "color", /*color*/ ctx[1]);
			set_custom_element_data(bm_divider, "is-light", /*isLight*/ ctx[2]);
			set_custom_element_data(bm_divider, "is-vertical", /*isVertical*/ ctx[3]);
		},
		m(target, anchor) {
			insert(target, bm_divider, anchor);

			if (default_slot) {
				default_slot.m(bm_divider, null);
			}

			/*bm_divider_binding*/ ctx[8](bm_divider);
			current = true;
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 64) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[6], dirty, null, null);
				}
			}

			if (!current || dirty & /*alignment*/ 1) {
				set_custom_element_data(bm_divider, "alignment", /*alignment*/ ctx[0]);
			}

			if (!current || dirty & /*color*/ 2) {
				set_custom_element_data(bm_divider, "color", /*color*/ ctx[1]);
			}

			if (!current || dirty & /*isLight*/ 4) {
				set_custom_element_data(bm_divider, "is-light", /*isLight*/ ctx[2]);
			}

			if (!current || dirty & /*isVertical*/ 8) {
				set_custom_element_data(bm_divider, "is-vertical", /*isVertical*/ ctx[3]);
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
			if (detaching) detach(bm_divider);
			if (default_slot) default_slot.d(detaching);
			/*bm_divider_binding*/ ctx[8](null);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let __ref;
	let __mounted = false;
	const dispatch = createEventDispatcher();
	let { alignment = undefined } = $$props;
	let { color = undefined } = $$props;
	let { isLight = undefined } = $$props;
	let { isVertical = undefined } = $$props;
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

	function bm_divider_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			__ref = $$value;
			$$invalidate(4, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ("alignment" in $$props) $$invalidate(0, alignment = $$props.alignment);
		if ("color" in $$props) $$invalidate(1, color = $$props.color);
		if ("isLight" in $$props) $$invalidate(2, isLight = $$props.isLight);
		if ("isVertical" in $$props) $$invalidate(3, isVertical = $$props.isVertical);
		if ("$$scope" in $$props) $$invalidate(6, $$scope = $$props.$$scope);
	};

	return [
		alignment,
		color,
		isLight,
		isVertical,
		__ref,
		getWebComponent,
		$$scope,
		slots,
		bm_divider_binding
	];
}

class BmDivider extends SvelteComponent {
  $$prop_def: BmDividerProps;
  $$events_def: BmDividerEvents;
  $$slot_def: BmDividerSlots;

  $on<K extends keyof BmDividerEvents>(type: K, callback: (e: BmDividerEvents[K]) => any): () => void {
	  return super.$on(type, callback);
	}

  $set($$props: Partial<BmDividerProps>): void {
	  super.$set($$props);
	}

	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			alignment: 0,
			color: 1,
			isLight: 2,
			isVertical: 3,
			getWebComponent: 5
		});
	}

	get alignment() {
		return this.$$.ctx[0];
	}

	set alignment(alignment) {
		this.$set({ alignment });
		flush();
	}

	get color() {
		return this.$$.ctx[1];
	}

	set color(color) {
		this.$set({ color });
		flush();
	}

	get isLight() {
		return this.$$.ctx[2];
	}

	set isLight(isLight) {
		this.$set({ isLight });
		flush();
	}

	get isVertical() {
		return this.$$.ctx[3];
	}

	set isVertical(isVertical) {
		this.$set({ isVertical });
		flush();
	}

	get getWebComponent(): HTMLBmDividerElement | undefined {
		return this.$$.ctx[5];
	}
}

export default BmDivider;