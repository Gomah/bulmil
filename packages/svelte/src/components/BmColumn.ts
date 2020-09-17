/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from '@bulmil/core';


interface BmColumnProps {
  
  /** Sizes */
  sizes?: Components.BmColumn["sizes"]
  
  /** Narrow column */
  isNarrow?: Components.BmColumn["isNarrow"]
}

interface BmColumnEvents {
  
}

interface BmColumnSlots {
  default: any
}
  
/* generated by Svelte v3.25.1 */
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
	let bm_column;
	let current;
	const default_slot_template = /*#slots*/ ctx[5].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[4], null);

	return {
		c() {
			bm_column = element("bm-column");
			if (default_slot) default_slot.c();
			set_custom_element_data(bm_column, "sizes", /*sizes*/ ctx[0]);
			set_custom_element_data(bm_column, "is-narrow", /*isNarrow*/ ctx[1]);
		},
		m(target, anchor) {
			insert(target, bm_column, anchor);

			if (default_slot) {
				default_slot.m(bm_column, null);
			}

			/*bm_column_binding*/ ctx[6](bm_column);
			current = true;
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 16) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[4], dirty, null, null);
				}
			}

			if (!current || dirty & /*sizes*/ 1) {
				set_custom_element_data(bm_column, "sizes", /*sizes*/ ctx[0]);
			}

			if (!current || dirty & /*isNarrow*/ 2) {
				set_custom_element_data(bm_column, "is-narrow", /*isNarrow*/ ctx[1]);
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
			if (detaching) detach(bm_column);
			if (default_slot) default_slot.d(detaching);
			/*bm_column_binding*/ ctx[6](null);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let __ref;
	let __mounted = false;
	const dispatch = createEventDispatcher();
	let { sizes = undefined } = $$props;
	let { isNarrow = undefined } = $$props;
	const getWebComponent = () => __ref;

	onMount(() => {
		__mounted = true;
	});

	const setProp = (prop, value) => {
		if (__ref) $$invalidate(2, __ref[prop] = value, __ref);
	};

	const onEvent = e => {
		e.stopPropagation();
		dispatch(e.type, e.detail);
	};

	function bm_column_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			__ref = $$value;
			$$invalidate(2, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ("sizes" in $$props) $$invalidate(0, sizes = $$props.sizes);
		if ("isNarrow" in $$props) $$invalidate(1, isNarrow = $$props.isNarrow);
		if ("$$scope" in $$props) $$invalidate(4, $$scope = $$props.$$scope);
	};

	return [sizes, isNarrow, __ref, getWebComponent, $$scope, slots, bm_column_binding];
}

class BmColumn extends SvelteComponent {
  $$prop_def: BmColumnProps;
  $$events_def: BmColumnEvents;
  $$slot_def: BmColumnSlots;

  $on<K extends keyof BmColumnEvents>(type: K, callback: (e: BmColumnEvents[K]) => any): () => void {
	  return super.$on(type, callback);
	}

  $set($$props: Partial<BmColumnProps>): void {
	  super.$set($$props);
	}

	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			sizes: 0,
			isNarrow: 1,
			getWebComponent: 3
		});
	}

	get sizes() {
		return this.$$.ctx[0];
	}

	set sizes(sizes) {
		this.$set({ sizes });
		flush();
	}

	get isNarrow() {
		return this.$$.ctx[1];
	}

	set isNarrow(isNarrow) {
		this.$set({ isNarrow });
		flush();
	}

	get getWebComponent(): HTMLBmColumnElement | undefined {
		return this.$$.ctx[3];
	}
}

export default BmColumn;