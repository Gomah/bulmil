/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from '@bulmil/core';


interface BmTagsProps {
  
  /** Size */
  size?: Components.BmTags["size"]
  
  /** Has addons */
  hasAddons?: Components.BmTags["hasAddons"]
}

interface BmTagsEvents {
  
}

interface BmTagsSlots {
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
	let bm_tags;
	let current;
	const default_slot_template = /*#slots*/ ctx[5].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[4], null);

	return {
		c() {
			bm_tags = element("bm-tags");
			if (default_slot) default_slot.c();
			set_custom_element_data(bm_tags, "size", /*size*/ ctx[0]);
			set_custom_element_data(bm_tags, "has-addons", /*hasAddons*/ ctx[1]);
		},
		m(target, anchor) {
			insert(target, bm_tags, anchor);

			if (default_slot) {
				default_slot.m(bm_tags, null);
			}

			/*bm_tags_binding*/ ctx[6](bm_tags);
			current = true;
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 16) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[4], dirty, null, null);
				}
			}

			if (!current || dirty & /*size*/ 1) {
				set_custom_element_data(bm_tags, "size", /*size*/ ctx[0]);
			}

			if (!current || dirty & /*hasAddons*/ 2) {
				set_custom_element_data(bm_tags, "has-addons", /*hasAddons*/ ctx[1]);
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
			if (detaching) detach(bm_tags);
			if (default_slot) default_slot.d(detaching);
			/*bm_tags_binding*/ ctx[6](null);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let __ref;
	let __mounted = false;
	const dispatch = createEventDispatcher();
	let { size = undefined } = $$props;
	let { hasAddons = undefined } = $$props;
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

	function bm_tags_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			__ref = $$value;
			$$invalidate(2, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ("size" in $$props) $$invalidate(0, size = $$props.size);
		if ("hasAddons" in $$props) $$invalidate(1, hasAddons = $$props.hasAddons);
		if ("$$scope" in $$props) $$invalidate(4, $$scope = $$props.$$scope);
	};

	return [size, hasAddons, __ref, getWebComponent, $$scope, slots, bm_tags_binding];
}

class BmTags extends SvelteComponent {
  $$prop_def: BmTagsProps;
  $$events_def: BmTagsEvents;
  $$slot_def: BmTagsSlots;

  $on<K extends keyof BmTagsEvents>(type: K, callback: (e: BmTagsEvents[K]) => any): () => void {
	  return super.$on(type, callback);
	}

  $set($$props: Partial<BmTagsProps>): void {
	  super.$set($$props);
	}

	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			size: 0,
			hasAddons: 1,
			getWebComponent: 3
		});
	}

	get size() {
		return this.$$.ctx[0];
	}

	set size(size) {
		this.$set({ size });
		flush();
	}

	get hasAddons() {
		return this.$$.ctx[1];
	}

	set hasAddons(hasAddons) {
		this.$set({ hasAddons });
		flush();
	}

	get getWebComponent(): HTMLBmTagsElement | undefined {
		return this.$$.ctx[3];
	}
}

export default BmTags;