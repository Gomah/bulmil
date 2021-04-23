/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from '@bulmil/core';


interface BmTabsProps {
  
  /** Pagination size */
  size?: Components.BmTabs["size"]
  
  /** Alignment */
  alignment?: Components.BmTabs["alignment"]
  
  /** Style */
  tabStyle?: Components.BmTabs["tabStyle"]
  
  /** Rounded */
  isRounded?: Components.BmTabs["isRounded"]
  
  /** Full width */
  isFullwidth?: Components.BmTabs["isFullwidth"]
}

interface BmTabsEvents {
  
}

interface BmTabsSlots {
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
	let bm_tabs;
	let current;
	const default_slot_template = /*#slots*/ ctx[8].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[7], null);

	return {
		c() {
			bm_tabs = element("bm-tabs");
			if (default_slot) default_slot.c();
			set_custom_element_data(bm_tabs, "size", /*size*/ ctx[0]);
			set_custom_element_data(bm_tabs, "alignment", /*alignment*/ ctx[1]);
			set_custom_element_data(bm_tabs, "tab-style", /*tabStyle*/ ctx[2]);
			set_custom_element_data(bm_tabs, "is-rounded", /*isRounded*/ ctx[3]);
			set_custom_element_data(bm_tabs, "is-fullwidth", /*isFullwidth*/ ctx[4]);
		},
		m(target, anchor) {
			insert(target, bm_tabs, anchor);

			if (default_slot) {
				default_slot.m(bm_tabs, null);
			}

			/*bm_tabs_binding*/ ctx[9](bm_tabs);
			current = true;
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 128) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[7], dirty, null, null);
				}
			}

			if (!current || dirty & /*size*/ 1) {
				set_custom_element_data(bm_tabs, "size", /*size*/ ctx[0]);
			}

			if (!current || dirty & /*alignment*/ 2) {
				set_custom_element_data(bm_tabs, "alignment", /*alignment*/ ctx[1]);
			}

			if (!current || dirty & /*tabStyle*/ 4) {
				set_custom_element_data(bm_tabs, "tab-style", /*tabStyle*/ ctx[2]);
			}

			if (!current || dirty & /*isRounded*/ 8) {
				set_custom_element_data(bm_tabs, "is-rounded", /*isRounded*/ ctx[3]);
			}

			if (!current || dirty & /*isFullwidth*/ 16) {
				set_custom_element_data(bm_tabs, "is-fullwidth", /*isFullwidth*/ ctx[4]);
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
			if (detaching) detach(bm_tabs);
			if (default_slot) default_slot.d(detaching);
			/*bm_tabs_binding*/ ctx[9](null);
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
	let { tabStyle = undefined } = $$props;
	let { isRounded = undefined } = $$props;
	let { isFullwidth = undefined } = $$props;
	const getWebComponent = () => __ref;

	onMount(() => {
		__mounted = true;
	});

	const setProp = (prop, value) => {
		if (__ref) $$invalidate(5, __ref[prop] = value, __ref);
	};

	const onEvent = e => {
		e.stopPropagation();
		dispatch(e.type, e.detail);
	};

	function bm_tabs_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			__ref = $$value;
			$$invalidate(5, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ("size" in $$props) $$invalidate(0, size = $$props.size);
		if ("alignment" in $$props) $$invalidate(1, alignment = $$props.alignment);
		if ("tabStyle" in $$props) $$invalidate(2, tabStyle = $$props.tabStyle);
		if ("isRounded" in $$props) $$invalidate(3, isRounded = $$props.isRounded);
		if ("isFullwidth" in $$props) $$invalidate(4, isFullwidth = $$props.isFullwidth);
		if ("$$scope" in $$props) $$invalidate(7, $$scope = $$props.$$scope);
	};

	return [
		size,
		alignment,
		tabStyle,
		isRounded,
		isFullwidth,
		__ref,
		getWebComponent,
		$$scope,
		slots,
		bm_tabs_binding
	];
}

class BmTabs extends SvelteComponent {
  $$prop_def: BmTabsProps;
  $$events_def: BmTabsEvents;
  $$slot_def: BmTabsSlots;

  $on<K extends keyof BmTabsEvents>(type: K, callback: (e: BmTabsEvents[K]) => any): () => void {
	  return super.$on(type, callback);
	}

  $set($$props: Partial<BmTabsProps>): void {
	  super.$set($$props);
	}

	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			size: 0,
			alignment: 1,
			tabStyle: 2,
			isRounded: 3,
			isFullwidth: 4,
			getWebComponent: 6
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

	get tabStyle() {
		return this.$$.ctx[2];
	}

	set tabStyle(tabStyle) {
		this.$set({ tabStyle });
		flush();
	}

	get isRounded() {
		return this.$$.ctx[3];
	}

	set isRounded(isRounded) {
		this.$set({ isRounded });
		flush();
	}

	get isFullwidth() {
		return this.$$.ctx[4];
	}

	set isFullwidth(isFullwidth) {
		this.$set({ isFullwidth });
		flush();
	}

	get getWebComponent(): HTMLBmTabsElement | undefined {
		return this.$$.ctx[6];
	}
}

export default BmTabs;