/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from '@bulmil/core';


interface BmFieldProps {
  
  /** Label */
  label?: Components.BmField["label"]
  
  /** Help or error message */
  message?: Components.BmField["message"]
  
  /** Has addons */
  hasAddons?: Components.BmField["hasAddons"]
  
  /** Field size */
  size?: Components.BmField["size"]
  
  /** Horizontal field */
  isHorizontal?: Components.BmField["isHorizontal"]
  
  /** Grouped field */
  isGrouped?: Components.BmField["isGrouped"]
  
  /** Grouped, on multiline */
  isGroupedMultiline?: Components.BmField["isGroupedMultiline"]
}

interface BmFieldEvents {
  
}

interface BmFieldSlots {
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
	let bm_field;
	let current;
	const default_slot_template = /*#slots*/ ctx[10].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[9], null);

	return {
		c() {
			bm_field = element("bm-field");
			if (default_slot) default_slot.c();
			set_custom_element_data(bm_field, "label", /*label*/ ctx[0]);
			set_custom_element_data(bm_field, "message", /*message*/ ctx[1]);
			set_custom_element_data(bm_field, "has-addons", /*hasAddons*/ ctx[2]);
			set_custom_element_data(bm_field, "size", /*size*/ ctx[3]);
			set_custom_element_data(bm_field, "is-horizontal", /*isHorizontal*/ ctx[4]);
			set_custom_element_data(bm_field, "is-grouped", /*isGrouped*/ ctx[5]);
			set_custom_element_data(bm_field, "is-grouped-multiline", /*isGroupedMultiline*/ ctx[6]);
		},
		m(target, anchor) {
			insert(target, bm_field, anchor);

			if (default_slot) {
				default_slot.m(bm_field, null);
			}

			/*bm_field_binding*/ ctx[11](bm_field);
			current = true;
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 512) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[9], dirty, null, null);
				}
			}

			if (!current || dirty & /*label*/ 1) {
				set_custom_element_data(bm_field, "label", /*label*/ ctx[0]);
			}

			if (!current || dirty & /*message*/ 2) {
				set_custom_element_data(bm_field, "message", /*message*/ ctx[1]);
			}

			if (!current || dirty & /*hasAddons*/ 4) {
				set_custom_element_data(bm_field, "has-addons", /*hasAddons*/ ctx[2]);
			}

			if (!current || dirty & /*size*/ 8) {
				set_custom_element_data(bm_field, "size", /*size*/ ctx[3]);
			}

			if (!current || dirty & /*isHorizontal*/ 16) {
				set_custom_element_data(bm_field, "is-horizontal", /*isHorizontal*/ ctx[4]);
			}

			if (!current || dirty & /*isGrouped*/ 32) {
				set_custom_element_data(bm_field, "is-grouped", /*isGrouped*/ ctx[5]);
			}

			if (!current || dirty & /*isGroupedMultiline*/ 64) {
				set_custom_element_data(bm_field, "is-grouped-multiline", /*isGroupedMultiline*/ ctx[6]);
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
			if (detaching) detach(bm_field);
			if (default_slot) default_slot.d(detaching);
			/*bm_field_binding*/ ctx[11](null);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let __ref;
	let __mounted = false;
	const dispatch = createEventDispatcher();
	let { label = undefined } = $$props;
	let { message = undefined } = $$props;
	let { hasAddons = undefined } = $$props;
	let { size = undefined } = $$props;
	let { isHorizontal = undefined } = $$props;
	let { isGrouped = undefined } = $$props;
	let { isGroupedMultiline = undefined } = $$props;
	const getWebComponent = () => __ref;

	onMount(() => {
		__mounted = true;
	});

	const setProp = (prop, value) => {
		if (__ref) $$invalidate(7, __ref[prop] = value, __ref);
	};

	const onEvent = e => {
		e.stopPropagation();
		dispatch(e.type, e.detail);
	};

	function bm_field_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			__ref = $$value;
			$$invalidate(7, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ("label" in $$props) $$invalidate(0, label = $$props.label);
		if ("message" in $$props) $$invalidate(1, message = $$props.message);
		if ("hasAddons" in $$props) $$invalidate(2, hasAddons = $$props.hasAddons);
		if ("size" in $$props) $$invalidate(3, size = $$props.size);
		if ("isHorizontal" in $$props) $$invalidate(4, isHorizontal = $$props.isHorizontal);
		if ("isGrouped" in $$props) $$invalidate(5, isGrouped = $$props.isGrouped);
		if ("isGroupedMultiline" in $$props) $$invalidate(6, isGroupedMultiline = $$props.isGroupedMultiline);
		if ("$$scope" in $$props) $$invalidate(9, $$scope = $$props.$$scope);
	};

	return [
		label,
		message,
		hasAddons,
		size,
		isHorizontal,
		isGrouped,
		isGroupedMultiline,
		__ref,
		getWebComponent,
		$$scope,
		slots,
		bm_field_binding
	];
}

class BmField extends SvelteComponent {
  $$prop_def: BmFieldProps;
  $$events_def: BmFieldEvents;
  $$slot_def: BmFieldSlots;

  $on<K extends keyof BmFieldEvents>(type: K, callback: (e: BmFieldEvents[K]) => any): () => void {
	  return super.$on(type, callback);
	}

  $set($$props: Partial<BmFieldProps>): void {
	  super.$set($$props);
	}

	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			label: 0,
			message: 1,
			hasAddons: 2,
			size: 3,
			isHorizontal: 4,
			isGrouped: 5,
			isGroupedMultiline: 6,
			getWebComponent: 8
		});
	}

	get label() {
		return this.$$.ctx[0];
	}

	set label(label) {
		this.$set({ label });
		flush();
	}

	get message() {
		return this.$$.ctx[1];
	}

	set message(message) {
		this.$set({ message });
		flush();
	}

	get hasAddons() {
		return this.$$.ctx[2];
	}

	set hasAddons(hasAddons) {
		this.$set({ hasAddons });
		flush();
	}

	get size() {
		return this.$$.ctx[3];
	}

	set size(size) {
		this.$set({ size });
		flush();
	}

	get isHorizontal() {
		return this.$$.ctx[4];
	}

	set isHorizontal(isHorizontal) {
		this.$set({ isHorizontal });
		flush();
	}

	get isGrouped() {
		return this.$$.ctx[5];
	}

	set isGrouped(isGrouped) {
		this.$set({ isGrouped });
		flush();
	}

	get isGroupedMultiline() {
		return this.$$.ctx[6];
	}

	set isGroupedMultiline(isGroupedMultiline) {
		this.$set({ isGroupedMultiline });
		flush();
	}

	get getWebComponent(): HTMLBmFieldElement | undefined {
		return this.$$.ctx[8];
	}
}

export default BmField;