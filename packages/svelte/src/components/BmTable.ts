/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from '@bulmil/core';


interface BmTableProps {
  
  /** Bordered */
  isBordered?: Components.BmTable["isBordered"]
  
  /** Striped */
  isStriped?: Components.BmTable["isStriped"]
  
  /** Scrollable */
  isScrollable?: Components.BmTable["isScrollable"]
  
  /** Narrow */
  isNarrow?: Components.BmTable["isNarrow"]
  
  /** Hoverable */
  isHoverable?: Components.BmTable["isHoverable"]
  
  /** Fullwidth */
  isFullwidth?: Components.BmTable["isFullwidth"]
}

interface BmTableEvents {
  
}

interface BmTableSlots {
  default: any
}
  
/* generated by Svelte v3.29.4 */
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
	let bm_table;
	let current;
	const default_slot_template = /*#slots*/ ctx[9].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[8], null);

	return {
		c() {
			bm_table = element("bm-table");
			if (default_slot) default_slot.c();
			set_custom_element_data(bm_table, "is-bordered", /*isBordered*/ ctx[0]);
			set_custom_element_data(bm_table, "is-striped", /*isStriped*/ ctx[1]);
			set_custom_element_data(bm_table, "is-scrollable", /*isScrollable*/ ctx[2]);
			set_custom_element_data(bm_table, "is-narrow", /*isNarrow*/ ctx[3]);
			set_custom_element_data(bm_table, "is-hoverable", /*isHoverable*/ ctx[4]);
			set_custom_element_data(bm_table, "is-fullwidth", /*isFullwidth*/ ctx[5]);
		},
		m(target, anchor) {
			insert(target, bm_table, anchor);

			if (default_slot) {
				default_slot.m(bm_table, null);
			}

			/*bm_table_binding*/ ctx[10](bm_table);
			current = true;
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 256) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[8], dirty, null, null);
				}
			}

			if (!current || dirty & /*isBordered*/ 1) {
				set_custom_element_data(bm_table, "is-bordered", /*isBordered*/ ctx[0]);
			}

			if (!current || dirty & /*isStriped*/ 2) {
				set_custom_element_data(bm_table, "is-striped", /*isStriped*/ ctx[1]);
			}

			if (!current || dirty & /*isScrollable*/ 4) {
				set_custom_element_data(bm_table, "is-scrollable", /*isScrollable*/ ctx[2]);
			}

			if (!current || dirty & /*isNarrow*/ 8) {
				set_custom_element_data(bm_table, "is-narrow", /*isNarrow*/ ctx[3]);
			}

			if (!current || dirty & /*isHoverable*/ 16) {
				set_custom_element_data(bm_table, "is-hoverable", /*isHoverable*/ ctx[4]);
			}

			if (!current || dirty & /*isFullwidth*/ 32) {
				set_custom_element_data(bm_table, "is-fullwidth", /*isFullwidth*/ ctx[5]);
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
			if (detaching) detach(bm_table);
			if (default_slot) default_slot.d(detaching);
			/*bm_table_binding*/ ctx[10](null);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let __ref;
	let __mounted = false;
	const dispatch = createEventDispatcher();
	let { isBordered = undefined } = $$props;
	let { isStriped = undefined } = $$props;
	let { isScrollable = undefined } = $$props;
	let { isNarrow = undefined } = $$props;
	let { isHoverable = undefined } = $$props;
	let { isFullwidth = undefined } = $$props;
	const getWebComponent = () => __ref;

	onMount(() => {
		__mounted = true;
	});

	const setProp = (prop, value) => {
		if (__ref) $$invalidate(6, __ref[prop] = value, __ref);
	};

	const onEvent = e => {
		e.stopPropagation();
		dispatch(e.type, e.detail);
	};

	function bm_table_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			__ref = $$value;
			$$invalidate(6, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ("isBordered" in $$props) $$invalidate(0, isBordered = $$props.isBordered);
		if ("isStriped" in $$props) $$invalidate(1, isStriped = $$props.isStriped);
		if ("isScrollable" in $$props) $$invalidate(2, isScrollable = $$props.isScrollable);
		if ("isNarrow" in $$props) $$invalidate(3, isNarrow = $$props.isNarrow);
		if ("isHoverable" in $$props) $$invalidate(4, isHoverable = $$props.isHoverable);
		if ("isFullwidth" in $$props) $$invalidate(5, isFullwidth = $$props.isFullwidth);
		if ("$$scope" in $$props) $$invalidate(8, $$scope = $$props.$$scope);
	};

	return [
		isBordered,
		isStriped,
		isScrollable,
		isNarrow,
		isHoverable,
		isFullwidth,
		__ref,
		getWebComponent,
		$$scope,
		slots,
		bm_table_binding
	];
}

class BmTable extends SvelteComponent {
  $$prop_def: BmTableProps;
  $$events_def: BmTableEvents;
  $$slot_def: BmTableSlots;

  $on<K extends keyof BmTableEvents>(type: K, callback: (e: BmTableEvents[K]) => any): () => void {
	  return super.$on(type, callback);
	}

  $set($$props: Partial<BmTableProps>): void {
	  super.$set($$props);
	}

	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			isBordered: 0,
			isStriped: 1,
			isScrollable: 2,
			isNarrow: 3,
			isHoverable: 4,
			isFullwidth: 5,
			getWebComponent: 7
		});
	}

	get isBordered() {
		return this.$$.ctx[0];
	}

	set isBordered(isBordered) {
		this.$set({ isBordered });
		flush();
	}

	get isStriped() {
		return this.$$.ctx[1];
	}

	set isStriped(isStriped) {
		this.$set({ isStriped });
		flush();
	}

	get isScrollable() {
		return this.$$.ctx[2];
	}

	set isScrollable(isScrollable) {
		this.$set({ isScrollable });
		flush();
	}

	get isNarrow() {
		return this.$$.ctx[3];
	}

	set isNarrow(isNarrow) {
		this.$set({ isNarrow });
		flush();
	}

	get isHoverable() {
		return this.$$.ctx[4];
	}

	set isHoverable(isHoverable) {
		this.$set({ isHoverable });
		flush();
	}

	get isFullwidth() {
		return this.$$.ctx[5];
	}

	set isFullwidth(isFullwidth) {
		this.$set({ isFullwidth });
		flush();
	}

	get getWebComponent(): HTMLBmTableElement | undefined {
		return this.$$.ctx[7];
	}
}

export default BmTable;