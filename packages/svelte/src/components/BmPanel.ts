/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from '@bulmil/core';


interface BmPanelProps {
  
  /** Panel color */
  color?: Components.BmPanel["color"]
}

interface BmPanelEvents {
  
}

interface BmPanelSlots {
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
	let bm_panel;
	let current;
	const default_slot_template = /*#slots*/ ctx[4].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[3], null);

	return {
		c() {
			bm_panel = element("bm-panel");
			if (default_slot) default_slot.c();
			set_custom_element_data(bm_panel, "color", /*color*/ ctx[0]);
		},
		m(target, anchor) {
			insert(target, bm_panel, anchor);

			if (default_slot) {
				default_slot.m(bm_panel, null);
			}

			/*bm_panel_binding*/ ctx[5](bm_panel);
			current = true;
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 8)) {
					update_slot_base(
						default_slot,
						default_slot_template,
						ctx,
						/*$$scope*/ ctx[3],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[3])
						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[3], dirty, null),
						null
					);
				}
			}

			if (!current || dirty & /*color*/ 1) {
				set_custom_element_data(bm_panel, "color", /*color*/ ctx[0]);
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
			if (detaching) detach(bm_panel);
			if (default_slot) default_slot.d(detaching);
			/*bm_panel_binding*/ ctx[5](null);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let __ref;
	let __mounted = false;
	const dispatch = createEventDispatcher();
	let { color = undefined } = $$props;
	const getWebComponent = () => __ref;

	onMount(() => {
		__mounted = true;
	});

	const setProp = (prop, value) => {
		if (__ref) $$invalidate(1, __ref[prop] = value, __ref);
	};

	const onEvent = e => {
		e.stopPropagation();
		dispatch(e.type, e.detail);
	};

	function bm_panel_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			__ref = $$value;
			$$invalidate(1, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ('color' in $$props) $$invalidate(0, color = $$props.color);
		if ('$$scope' in $$props) $$invalidate(3, $$scope = $$props.$$scope);
	};

	return [color, __ref, getWebComponent, $$scope, slots, bm_panel_binding];
}

class BmPanel extends SvelteComponent {
  $$prop_def: BmPanelProps;
  $$events_def: BmPanelEvents;
  $$slot_def: BmPanelSlots;

  $on<K extends keyof BmPanelEvents>(type: K, callback: (e: BmPanelEvents[K]) => any): () => void {
	  return super.$on(type, callback);
	}

  $set($$props: Partial<BmPanelProps>): void {
	  super.$set($$props);
	}

	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { color: 0, getWebComponent: 2 });
	}

	get color() {
		return this.$$.ctx[0];
	}

	set color(color) {
		this.$$set({ color });
		flush();
	}

	get getWebComponent(): HTMLBmPanelElement | undefined {
		return this.$$.ctx[2];
	}
}

export default BmPanel;