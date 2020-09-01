/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from '@bulmil/core';


interface BmDropdownProps {
  
  /** The dropdown visibility */
  isActive?: Components.BmDropdown["isActive"]
  
  /** Align the dropdown to the right */
  isRight?: Components.BmDropdown["isRight"]
  
  /** Dropdown menu that appears above the dropdown button */
  isUp?: Components.BmDropdown["isUp"]
  
  /** The dropdown will show up when hovering the dropdown-trigger */
  isHoverable?: Components.BmDropdown["isHoverable"]
}

interface BmDropdownEvents {
  
}

interface BmDropdownSlots {
  default: any
}
  
/* generated by Svelte v3.24.1 */
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
	let bm_dropdown;
	let current;
	const default_slot_template = /*$$slots*/ ctx[7].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[6], null);

	return {
		c() {
			bm_dropdown = element("bm-dropdown");
			if (default_slot) default_slot.c();
			set_custom_element_data(bm_dropdown, "is-active", /*isActive*/ ctx[0]);
			set_custom_element_data(bm_dropdown, "is-right", /*isRight*/ ctx[1]);
			set_custom_element_data(bm_dropdown, "is-up", /*isUp*/ ctx[2]);
			set_custom_element_data(bm_dropdown, "is-hoverable", /*isHoverable*/ ctx[3]);
		},
		m(target, anchor) {
			insert(target, bm_dropdown, anchor);

			if (default_slot) {
				default_slot.m(bm_dropdown, null);
			}

			/*bm_dropdown_binding*/ ctx[8](bm_dropdown);
			current = true;
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 64) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[6], dirty, null, null);
				}
			}

			if (!current || dirty & /*isActive*/ 1) {
				set_custom_element_data(bm_dropdown, "is-active", /*isActive*/ ctx[0]);
			}

			if (!current || dirty & /*isRight*/ 2) {
				set_custom_element_data(bm_dropdown, "is-right", /*isRight*/ ctx[1]);
			}

			if (!current || dirty & /*isUp*/ 4) {
				set_custom_element_data(bm_dropdown, "is-up", /*isUp*/ ctx[2]);
			}

			if (!current || dirty & /*isHoverable*/ 8) {
				set_custom_element_data(bm_dropdown, "is-hoverable", /*isHoverable*/ ctx[3]);
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
			if (detaching) detach(bm_dropdown);
			if (default_slot) default_slot.d(detaching);
			/*bm_dropdown_binding*/ ctx[8](null);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let __ref;
	let __mounted = false;
	const dispatch = createEventDispatcher();
	let { isActive = undefined } = $$props;
	let { isRight = undefined } = $$props;
	let { isUp = undefined } = $$props;
	let { isHoverable = undefined } = $$props;
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

	let { $$slots = {}, $$scope } = $$props;

	function bm_dropdown_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			__ref = $$value;
			$$invalidate(4, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ("isActive" in $$props) $$invalidate(0, isActive = $$props.isActive);
		if ("isRight" in $$props) $$invalidate(1, isRight = $$props.isRight);
		if ("isUp" in $$props) $$invalidate(2, isUp = $$props.isUp);
		if ("isHoverable" in $$props) $$invalidate(3, isHoverable = $$props.isHoverable);
		if ("$$scope" in $$props) $$invalidate(6, $$scope = $$props.$$scope);
	};

	return [
		isActive,
		isRight,
		isUp,
		isHoverable,
		__ref,
		getWebComponent,
		$$scope,
		$$slots,
		bm_dropdown_binding
	];
}

class BmDropdown extends SvelteComponent {
  $$prop_def: BmDropdownProps;
  $$events_def: BmDropdownEvents;
  $$slot_def: BmDropdownSlots;

  $on<K extends keyof BmDropdownEvents>(type: K, callback: (e: BmDropdownEvents[K]) => any): () => void {
	  return super.$on(type, callback);
	}

  $set($$props: Partial<BmDropdownProps>): void {
	  super.$set($$props);
	}

	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			isActive: 0,
			isRight: 1,
			isUp: 2,
			isHoverable: 3,
			getWebComponent: 5
		});
	}

	get isActive() {
		return this.$$.ctx[0];
	}

	set isActive(isActive) {
		this.$set({ isActive });
		flush();
	}

	get isRight() {
		return this.$$.ctx[1];
	}

	set isRight(isRight) {
		this.$set({ isRight });
		flush();
	}

	get isUp() {
		return this.$$.ctx[2];
	}

	set isUp(isUp) {
		this.$set({ isUp });
		flush();
	}

	get isHoverable() {
		return this.$$.ctx[3];
	}

	set isHoverable(isHoverable) {
		this.$set({ isHoverable });
		flush();
	}

	get getWebComponent(): HTMLBmDropdownElement | undefined {
		return this.$$.ctx[5];
	}
}

export default BmDropdown;