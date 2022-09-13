/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from '@bulmil/core';


interface BmMessageProps {
  
  /** Color */
  color?: Components.BmMessage["color"]
  
  /** Size */
  size?: Components.BmMessage["size"]
}

interface BmMessageEvents {
  
}

interface BmMessageSlots {
  default: any
}
  
/* generated by Svelte v3.50.1 */
import {
	SvelteComponent,
	binding_callbacks,
	create_slot,
	detach,
	element,
	flush,
	get_all_dirty_from_scope,
	get_slot_changes,
	init,
	insert,
	safe_not_equal,
	set_custom_element_data,
	transition_in,
	transition_out,
	update_slot_base
} from "svelte/internal";

import { createEventDispatcher, onMount } from 'svelte';

function create_fragment(ctx) {
	let bm_message;
	let current;
	const default_slot_template = /*#slots*/ ctx[5].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[4], null);

	return {
		c() {
			bm_message = element("bm-message");
			if (default_slot) default_slot.c();
			set_custom_element_data(bm_message, "color", /*color*/ ctx[0]);
			set_custom_element_data(bm_message, "size", /*size*/ ctx[1]);
		},
		m(target, anchor) {
			insert(target, bm_message, anchor);

			if (default_slot) {
				default_slot.m(bm_message, null);
			}

			/*bm_message_binding*/ ctx[6](bm_message);
			current = true;
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 16)) {
					update_slot_base(
						default_slot,
						default_slot_template,
						ctx,
						/*$$scope*/ ctx[4],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[4])
						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[4], dirty, null),
						null
					);
				}
			}

			if (!current || dirty & /*color*/ 1) {
				set_custom_element_data(bm_message, "color", /*color*/ ctx[0]);
			}

			if (!current || dirty & /*size*/ 2) {
				set_custom_element_data(bm_message, "size", /*size*/ ctx[1]);
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
			if (detaching) detach(bm_message);
			if (default_slot) default_slot.d(detaching);
			/*bm_message_binding*/ ctx[6](null);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let __ref;
	let __mounted = false;
	const dispatch = createEventDispatcher();
	let { color = undefined } = $$props;
	let { size = undefined } = $$props;
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

	function bm_message_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			__ref = $$value;
			$$invalidate(2, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ('color' in $$props) $$invalidate(0, color = $$props.color);
		if ('size' in $$props) $$invalidate(1, size = $$props.size);
		if ('$$scope' in $$props) $$invalidate(4, $$scope = $$props.$$scope);
	};

	return [color, size, __ref, getWebComponent, $$scope, slots, bm_message_binding];
}

class BmMessage extends SvelteComponent {
  $$prop_def: BmMessageProps;
  $$events_def: BmMessageEvents;
  $$slot_def: BmMessageSlots;

  $on<K extends keyof BmMessageEvents>(type: K, callback: (e: BmMessageEvents[K]) => any): () => void {
	  return super.$on(type, callback);
	}

  $set($$props: Partial<BmMessageProps>): void {
	  super.$set($$props);
	}

	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { color: 0, size: 1, getWebComponent: 3 });
	}

	get color() {
		return this.$$.ctx[0];
	}

	set color(color) {
		this.$$set({ color });
		flush();
	}

	get size() {
		return this.$$.ctx[1];
	}

	set size(size) {
		this.$$set({ size });
		flush();
	}

	get getWebComponent(): HTMLBmMessageElement | undefined {
		return this.$$.ctx[3];
	}
}

export default BmMessage;