/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from '@bulmil/core';


interface BmBreadcrumbProps {
  
  /** Breadcrumb alignment */
  alignment?: Components.BmBreadcrumb["alignment"]
  
  /** Size */
  size?: Components.BmBreadcrumb["size"]
  
  /** Separator */
  separator?: Components.BmBreadcrumb["separator"]
}

interface BmBreadcrumbEvents {
  
}

interface BmBreadcrumbSlots {
  default: any
}
  
/* generated by Svelte v3.32.1 */
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
	let bm_breadcrumb;
	let current;
	const default_slot_template = /*#slots*/ ctx[6].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[5], null);

	return {
		c() {
			bm_breadcrumb = element("bm-breadcrumb");
			if (default_slot) default_slot.c();
			set_custom_element_data(bm_breadcrumb, "alignment", /*alignment*/ ctx[0]);
			set_custom_element_data(bm_breadcrumb, "size", /*size*/ ctx[1]);
			set_custom_element_data(bm_breadcrumb, "separator", /*separator*/ ctx[2]);
		},
		m(target, anchor) {
			insert(target, bm_breadcrumb, anchor);

			if (default_slot) {
				default_slot.m(bm_breadcrumb, null);
			}

			/*bm_breadcrumb_binding*/ ctx[7](bm_breadcrumb);
			current = true;
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 32) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[5], dirty, null, null);
				}
			}

			if (!current || dirty & /*alignment*/ 1) {
				set_custom_element_data(bm_breadcrumb, "alignment", /*alignment*/ ctx[0]);
			}

			if (!current || dirty & /*size*/ 2) {
				set_custom_element_data(bm_breadcrumb, "size", /*size*/ ctx[1]);
			}

			if (!current || dirty & /*separator*/ 4) {
				set_custom_element_data(bm_breadcrumb, "separator", /*separator*/ ctx[2]);
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
			if (detaching) detach(bm_breadcrumb);
			if (default_slot) default_slot.d(detaching);
			/*bm_breadcrumb_binding*/ ctx[7](null);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let __ref;
	let __mounted = false;
	const dispatch = createEventDispatcher();
	let { alignment = undefined } = $$props;
	let { size = undefined } = $$props;
	let { separator = undefined } = $$props;
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

	function bm_breadcrumb_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			__ref = $$value;
			$$invalidate(3, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ("alignment" in $$props) $$invalidate(0, alignment = $$props.alignment);
		if ("size" in $$props) $$invalidate(1, size = $$props.size);
		if ("separator" in $$props) $$invalidate(2, separator = $$props.separator);
		if ("$$scope" in $$props) $$invalidate(5, $$scope = $$props.$$scope);
	};

	return [
		alignment,
		size,
		separator,
		__ref,
		getWebComponent,
		$$scope,
		slots,
		bm_breadcrumb_binding
	];
}

class BmBreadcrumb extends SvelteComponent {
  $$prop_def: BmBreadcrumbProps;
  $$events_def: BmBreadcrumbEvents;
  $$slot_def: BmBreadcrumbSlots;

  $on<K extends keyof BmBreadcrumbEvents>(type: K, callback: (e: BmBreadcrumbEvents[K]) => any): () => void {
	  return super.$on(type, callback);
	}

  $set($$props: Partial<BmBreadcrumbProps>): void {
	  super.$set($$props);
	}

	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			alignment: 0,
			size: 1,
			separator: 2,
			getWebComponent: 4
		});
	}

	get alignment() {
		return this.$$.ctx[0];
	}

	set alignment(alignment) {
		this.$set({ alignment });
		flush();
	}

	get size() {
		return this.$$.ctx[1];
	}

	set size(size) {
		this.$set({ size });
		flush();
	}

	get separator() {
		return this.$$.ctx[2];
	}

	set separator(separator) {
		this.$set({ separator });
		flush();
	}

	get getWebComponent(): HTMLBmBreadcrumbElement | undefined {
		return this.$$.ctx[4];
	}
}

export default BmBreadcrumb;