/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from '@bulmil/core';


interface BmPaginationProps {
  
  /** Pagination size */
  size?: Components.BmPagination["size"]
  
  /** Alignment */
  alignment?: Components.BmPagination["alignment"]
  
  /** Rounded */
  isRounded?: Components.BmPagination["isRounded"]
}

interface BmPaginationEvents {
  
}

interface BmPaginationSlots {
  default: any
}
  
/* generated by Svelte v3.32.0 */
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
	let bm_pagination;
	let current;
	const default_slot_template = /*#slots*/ ctx[6].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[5], null);

	return {
		c() {
			bm_pagination = element("bm-pagination");
			if (default_slot) default_slot.c();
			set_custom_element_data(bm_pagination, "size", /*size*/ ctx[0]);
			set_custom_element_data(bm_pagination, "alignment", /*alignment*/ ctx[1]);
			set_custom_element_data(bm_pagination, "is-rounded", /*isRounded*/ ctx[2]);
		},
		m(target, anchor) {
			insert(target, bm_pagination, anchor);

			if (default_slot) {
				default_slot.m(bm_pagination, null);
			}

			/*bm_pagination_binding*/ ctx[7](bm_pagination);
			current = true;
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 32) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[5], dirty, null, null);
				}
			}

			if (!current || dirty & /*size*/ 1) {
				set_custom_element_data(bm_pagination, "size", /*size*/ ctx[0]);
			}

			if (!current || dirty & /*alignment*/ 2) {
				set_custom_element_data(bm_pagination, "alignment", /*alignment*/ ctx[1]);
			}

			if (!current || dirty & /*isRounded*/ 4) {
				set_custom_element_data(bm_pagination, "is-rounded", /*isRounded*/ ctx[2]);
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
			if (detaching) detach(bm_pagination);
			if (default_slot) default_slot.d(detaching);
			/*bm_pagination_binding*/ ctx[7](null);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let __ref;
	let __mounted = false;
	const dispatch = createEventDispatcher();
	let { size = undefined } = $$props;
	let { alignment = undefined } = $$props;
	let { isRounded = undefined } = $$props;
	const getWebComponent = () => __ref;

	onMount(() => {
		__mounted = true;
	});

	const setProp = (prop, value) => {
		if (__ref) $$invalidate(3, __ref[prop] = value, __ref);
	};

	const onEvent = e => {
		e.stopPropagation();
		dispatch(e.type, e.detail);
	};

	function bm_pagination_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			__ref = $$value;
			$$invalidate(3, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ("size" in $$props) $$invalidate(0, size = $$props.size);
		if ("alignment" in $$props) $$invalidate(1, alignment = $$props.alignment);
		if ("isRounded" in $$props) $$invalidate(2, isRounded = $$props.isRounded);
		if ("$$scope" in $$props) $$invalidate(5, $$scope = $$props.$$scope);
	};

	return [
		size,
		alignment,
		isRounded,
		__ref,
		getWebComponent,
		$$scope,
		slots,
		bm_pagination_binding
	];
}

class BmPagination extends SvelteComponent {
  $$prop_def: BmPaginationProps;
  $$events_def: BmPaginationEvents;
  $$slot_def: BmPaginationSlots;

  $on<K extends keyof BmPaginationEvents>(type: K, callback: (e: BmPaginationEvents[K]) => any): () => void {
	  return super.$on(type, callback);
	}

  $set($$props: Partial<BmPaginationProps>): void {
	  super.$set($$props);
	}

	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			size: 0,
			alignment: 1,
			isRounded: 2,
			getWebComponent: 4
		});
	}

	get size() {
		return this.$$.ctx[0];
	}

	set size(size) {
		this.$set({ size });
		flush();
	}

	get alignment() {
		return this.$$.ctx[1];
	}

	set alignment(alignment) {
		this.$set({ alignment });
		flush();
	}

	get isRounded() {
		return this.$$.ctx[2];
	}

	set isRounded(isRounded) {
		this.$set({ isRounded });
		flush();
	}

	get getWebComponent(): HTMLBmPaginationElement | undefined {
		return this.$$.ctx[4];
	}
}

export default BmPagination;