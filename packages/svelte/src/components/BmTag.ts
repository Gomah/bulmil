/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from '@bulmil/core';


interface BmTagProps {
  
  /** Tag */
  tag?: Components.BmTag["tag"]
  
  /** Color */
  color?: Components.BmTag["color"]
  
  /** Size */
  size?: Components.BmTag["size"]
  
  /** Modifier */
  modifier?: Components.BmTag["modifier"]
}

interface BmTagEvents {
  
}

interface BmTagSlots {
  default: any
}
  
/* generated by Svelte v3.38.2 */
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
	let bm_tag;
	let current;
	const default_slot_template = /*#slots*/ ctx[7].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[6], null);

	return {
		c() {
			bm_tag = element("bm-tag");
			if (default_slot) default_slot.c();
			set_custom_element_data(bm_tag, "tag", /*tag*/ ctx[0]);
			set_custom_element_data(bm_tag, "color", /*color*/ ctx[1]);
			set_custom_element_data(bm_tag, "size", /*size*/ ctx[2]);
			set_custom_element_data(bm_tag, "modifier", /*modifier*/ ctx[3]);
		},
		m(target, anchor) {
			insert(target, bm_tag, anchor);

			if (default_slot) {
				default_slot.m(bm_tag, null);
			}

			/*bm_tag_binding*/ ctx[8](bm_tag);
			current = true;
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 64)) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[6], dirty, null, null);
				}
			}

			if (!current || dirty & /*tag*/ 1) {
				set_custom_element_data(bm_tag, "tag", /*tag*/ ctx[0]);
			}

			if (!current || dirty & /*color*/ 2) {
				set_custom_element_data(bm_tag, "color", /*color*/ ctx[1]);
			}

			if (!current || dirty & /*size*/ 4) {
				set_custom_element_data(bm_tag, "size", /*size*/ ctx[2]);
			}

			if (!current || dirty & /*modifier*/ 8) {
				set_custom_element_data(bm_tag, "modifier", /*modifier*/ ctx[3]);
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
			if (detaching) detach(bm_tag);
			if (default_slot) default_slot.d(detaching);
			/*bm_tag_binding*/ ctx[8](null);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let __ref;
	let __mounted = false;
	const dispatch = createEventDispatcher();
	let { tag = undefined } = $$props;
	let { color = undefined } = $$props;
	let { size = undefined } = $$props;
	let { modifier = undefined } = $$props;
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

	function bm_tag_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			__ref = $$value;
			$$invalidate(4, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ("tag" in $$props) $$invalidate(0, tag = $$props.tag);
		if ("color" in $$props) $$invalidate(1, color = $$props.color);
		if ("size" in $$props) $$invalidate(2, size = $$props.size);
		if ("modifier" in $$props) $$invalidate(3, modifier = $$props.modifier);
		if ("$$scope" in $$props) $$invalidate(6, $$scope = $$props.$$scope);
	};

	return [
		tag,
		color,
		size,
		modifier,
		__ref,
		getWebComponent,
		$$scope,
		slots,
		bm_tag_binding
	];
}

class BmTag extends SvelteComponent {
  $$prop_def: BmTagProps;
  $$events_def: BmTagEvents;
  $$slot_def: BmTagSlots;

  $on<K extends keyof BmTagEvents>(type: K, callback: (e: BmTagEvents[K]) => any): () => void {
	  return super.$on(type, callback);
	}

  $set($$props: Partial<BmTagProps>): void {
	  super.$set($$props);
	}

	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			tag: 0,
			color: 1,
			size: 2,
			modifier: 3,
			getWebComponent: 5
		});
	}

	get tag() {
		return this.$$.ctx[0];
	}

	set tag(tag) {
		this.$set({ tag });
		flush();
	}

	get color() {
		return this.$$.ctx[1];
	}

	set color(color) {
		this.$set({ color });
		flush();
	}

	get size() {
		return this.$$.ctx[2];
	}

	set size(size) {
		this.$set({ size });
		flush();
	}

	get modifier() {
		return this.$$.ctx[3];
	}

	set modifier(modifier) {
		this.$set({ modifier });
		flush();
	}

	get getWebComponent(): HTMLBmTagElement | undefined {
		return this.$$.ctx[5];
	}
}

export default BmTag;