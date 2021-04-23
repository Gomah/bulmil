/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from '@bulmil/core';


interface BmNavbarProps {
  
  /** Transparent */
  isTransparent?: Components.BmNavbar["isTransparent"]
  
  /** Color */
  color?: Components.BmNavbar["color"]
  
  /** Fixed position */
  fixedPosition?: Components.BmNavbar["fixedPosition"]
  
  /** Spaced */
  isSpaced?: Components.BmNavbar["isSpaced"]
}

interface BmNavbarEvents {
  
}

interface BmNavbarSlots {
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
	let bm_navbar;
	let current;
	const default_slot_template = /*#slots*/ ctx[7].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[6], null);

	return {
		c() {
			bm_navbar = element("bm-navbar");
			if (default_slot) default_slot.c();
			set_custom_element_data(bm_navbar, "is-transparent", /*isTransparent*/ ctx[0]);
			set_custom_element_data(bm_navbar, "color", /*color*/ ctx[1]);
			set_custom_element_data(bm_navbar, "fixed-position", /*fixedPosition*/ ctx[2]);
			set_custom_element_data(bm_navbar, "is-spaced", /*isSpaced*/ ctx[3]);
		},
		m(target, anchor) {
			insert(target, bm_navbar, anchor);

			if (default_slot) {
				default_slot.m(bm_navbar, null);
			}

			/*bm_navbar_binding*/ ctx[8](bm_navbar);
			current = true;
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 64) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[6], dirty, null, null);
				}
			}

			if (!current || dirty & /*isTransparent*/ 1) {
				set_custom_element_data(bm_navbar, "is-transparent", /*isTransparent*/ ctx[0]);
			}

			if (!current || dirty & /*color*/ 2) {
				set_custom_element_data(bm_navbar, "color", /*color*/ ctx[1]);
			}

			if (!current || dirty & /*fixedPosition*/ 4) {
				set_custom_element_data(bm_navbar, "fixed-position", /*fixedPosition*/ ctx[2]);
			}

			if (!current || dirty & /*isSpaced*/ 8) {
				set_custom_element_data(bm_navbar, "is-spaced", /*isSpaced*/ ctx[3]);
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
			if (detaching) detach(bm_navbar);
			if (default_slot) default_slot.d(detaching);
			/*bm_navbar_binding*/ ctx[8](null);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let __ref;
	let __mounted = false;
	const dispatch = createEventDispatcher();
	let { isTransparent = undefined } = $$props;
	let { color = undefined } = $$props;
	let { fixedPosition = undefined } = $$props;
	let { isSpaced = undefined } = $$props;
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

	function bm_navbar_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			__ref = $$value;
			$$invalidate(4, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ("isTransparent" in $$props) $$invalidate(0, isTransparent = $$props.isTransparent);
		if ("color" in $$props) $$invalidate(1, color = $$props.color);
		if ("fixedPosition" in $$props) $$invalidate(2, fixedPosition = $$props.fixedPosition);
		if ("isSpaced" in $$props) $$invalidate(3, isSpaced = $$props.isSpaced);
		if ("$$scope" in $$props) $$invalidate(6, $$scope = $$props.$$scope);
	};

	return [
		isTransparent,
		color,
		fixedPosition,
		isSpaced,
		__ref,
		getWebComponent,
		$$scope,
		slots,
		bm_navbar_binding
	];
}

class BmNavbar extends SvelteComponent {
  $$prop_def: BmNavbarProps;
  $$events_def: BmNavbarEvents;
  $$slot_def: BmNavbarSlots;

  $on<K extends keyof BmNavbarEvents>(type: K, callback: (e: BmNavbarEvents[K]) => any): () => void {
	  return super.$on(type, callback);
	}

  $set($$props: Partial<BmNavbarProps>): void {
	  super.$set($$props);
	}

	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			isTransparent: 0,
			color: 1,
			fixedPosition: 2,
			isSpaced: 3,
			getWebComponent: 5
		});
	}

	get isTransparent() {
		return this.$$.ctx[0];
	}

	set isTransparent(isTransparent) {
		this.$set({ isTransparent });
		flush();
	}

	get color() {
		return this.$$.ctx[1];
	}

	set color(color) {
		this.$set({ color });
		flush();
	}

	get fixedPosition() {
		return this.$$.ctx[2];
	}

	set fixedPosition(fixedPosition) {
		this.$set({ fixedPosition });
		flush();
	}

	get isSpaced() {
		return this.$$.ctx[3];
	}

	set isSpaced(isSpaced) {
		this.$set({ isSpaced });
		flush();
	}

	get getWebComponent(): HTMLBmNavbarElement | undefined {
		return this.$$.ctx[5];
	}
}

export default BmNavbar;