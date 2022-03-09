/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from '@bulmil/core';


interface BmTextareaProps {
  
  /** Control class */
  controlClass?: Components.BmTextarea["controlClass"]
  
  /** Value */
  value?: Components.BmTextarea["value"]
  
  /** Color */
  color?: Components.BmTextarea["color"]
  
  /** Size */
  size?: Components.BmTextarea["size"]
  
  /** State */
  state?: Components.BmTextarea["state"]
  
  /** Readonly state */
  readonly?: Components.BmTextarea["readonly"]
  
  /** Disabled state */
  disabled?: Components.BmTextarea["disabled"]
  
  /** Loading state */
  isLoading?: Components.BmTextarea["isLoading"]
  
  /** Fixed size */
  hasFixedSize?: Components.BmTextarea["hasFixedSize"]
  
  /** Rows */
  rows?: Components.BmTextarea["rows"]
}

interface BmTextareaEvents {
  
}

interface BmTextareaSlots {
  default: any
}
  
/* generated by Svelte v3.46.4 */
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
	let bm_textarea;
	let current;
	const default_slot_template = /*#slots*/ ctx[13].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[12], null);

	return {
		c() {
			bm_textarea = element("bm-textarea");
			if (default_slot) default_slot.c();
			set_custom_element_data(bm_textarea, "control-class", /*controlClass*/ ctx[0]);
			set_custom_element_data(bm_textarea, "value", /*value*/ ctx[1]);
			set_custom_element_data(bm_textarea, "color", /*color*/ ctx[2]);
			set_custom_element_data(bm_textarea, "size", /*size*/ ctx[3]);
			set_custom_element_data(bm_textarea, "state", /*state*/ ctx[4]);
			set_custom_element_data(bm_textarea, "readonly", /*readonly*/ ctx[5]);
			set_custom_element_data(bm_textarea, "disabled", /*disabled*/ ctx[6]);
			set_custom_element_data(bm_textarea, "is-loading", /*isLoading*/ ctx[7]);
			set_custom_element_data(bm_textarea, "has-fixed-size", /*hasFixedSize*/ ctx[8]);
			set_custom_element_data(bm_textarea, "rows", /*rows*/ ctx[9]);
		},
		m(target, anchor) {
			insert(target, bm_textarea, anchor);

			if (default_slot) {
				default_slot.m(bm_textarea, null);
			}

			/*bm_textarea_binding*/ ctx[14](bm_textarea);
			current = true;
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 4096)) {
					update_slot_base(
						default_slot,
						default_slot_template,
						ctx,
						/*$$scope*/ ctx[12],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[12])
						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[12], dirty, null),
						null
					);
				}
			}

			if (!current || dirty & /*controlClass*/ 1) {
				set_custom_element_data(bm_textarea, "control-class", /*controlClass*/ ctx[0]);
			}

			if (!current || dirty & /*value*/ 2) {
				set_custom_element_data(bm_textarea, "value", /*value*/ ctx[1]);
			}

			if (!current || dirty & /*color*/ 4) {
				set_custom_element_data(bm_textarea, "color", /*color*/ ctx[2]);
			}

			if (!current || dirty & /*size*/ 8) {
				set_custom_element_data(bm_textarea, "size", /*size*/ ctx[3]);
			}

			if (!current || dirty & /*state*/ 16) {
				set_custom_element_data(bm_textarea, "state", /*state*/ ctx[4]);
			}

			if (!current || dirty & /*readonly*/ 32) {
				set_custom_element_data(bm_textarea, "readonly", /*readonly*/ ctx[5]);
			}

			if (!current || dirty & /*disabled*/ 64) {
				set_custom_element_data(bm_textarea, "disabled", /*disabled*/ ctx[6]);
			}

			if (!current || dirty & /*isLoading*/ 128) {
				set_custom_element_data(bm_textarea, "is-loading", /*isLoading*/ ctx[7]);
			}

			if (!current || dirty & /*hasFixedSize*/ 256) {
				set_custom_element_data(bm_textarea, "has-fixed-size", /*hasFixedSize*/ ctx[8]);
			}

			if (!current || dirty & /*rows*/ 512) {
				set_custom_element_data(bm_textarea, "rows", /*rows*/ ctx[9]);
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
			if (detaching) detach(bm_textarea);
			if (default_slot) default_slot.d(detaching);
			/*bm_textarea_binding*/ ctx[14](null);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let __ref;
	let __mounted = false;
	const dispatch = createEventDispatcher();
	let { controlClass = undefined } = $$props;
	let { value = undefined } = $$props;
	let { color = undefined } = $$props;
	let { size = undefined } = $$props;
	let { state = undefined } = $$props;
	let { readonly = undefined } = $$props;
	let { disabled = undefined } = $$props;
	let { isLoading = undefined } = $$props;
	let { hasFixedSize = undefined } = $$props;
	let { rows = undefined } = $$props;
	const getWebComponent = () => __ref;

	onMount(() => {
		__mounted = true;
	});

	const setProp = (prop, value) => {
		if (__ref) $$invalidate(10, __ref[prop] = value, __ref);
	};

	const onEvent = e => {
		e.stopPropagation();
		dispatch(e.type, e.detail);
	};

	function bm_textarea_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			__ref = $$value;
			$$invalidate(10, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ('controlClass' in $$props) $$invalidate(0, controlClass = $$props.controlClass);
		if ('value' in $$props) $$invalidate(1, value = $$props.value);
		if ('color' in $$props) $$invalidate(2, color = $$props.color);
		if ('size' in $$props) $$invalidate(3, size = $$props.size);
		if ('state' in $$props) $$invalidate(4, state = $$props.state);
		if ('readonly' in $$props) $$invalidate(5, readonly = $$props.readonly);
		if ('disabled' in $$props) $$invalidate(6, disabled = $$props.disabled);
		if ('isLoading' in $$props) $$invalidate(7, isLoading = $$props.isLoading);
		if ('hasFixedSize' in $$props) $$invalidate(8, hasFixedSize = $$props.hasFixedSize);
		if ('rows' in $$props) $$invalidate(9, rows = $$props.rows);
		if ('$$scope' in $$props) $$invalidate(12, $$scope = $$props.$$scope);
	};

	return [
		controlClass,
		value,
		color,
		size,
		state,
		readonly,
		disabled,
		isLoading,
		hasFixedSize,
		rows,
		__ref,
		getWebComponent,
		$$scope,
		slots,
		bm_textarea_binding
	];
}

class BmTextarea extends SvelteComponent {
  $$prop_def: BmTextareaProps;
  $$events_def: BmTextareaEvents;
  $$slot_def: BmTextareaSlots;

  $on<K extends keyof BmTextareaEvents>(type: K, callback: (e: BmTextareaEvents[K]) => any): () => void {
	  return super.$on(type, callback);
	}

  $set($$props: Partial<BmTextareaProps>): void {
	  super.$set($$props);
	}

	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			controlClass: 0,
			value: 1,
			color: 2,
			size: 3,
			state: 4,
			readonly: 5,
			disabled: 6,
			isLoading: 7,
			hasFixedSize: 8,
			rows: 9,
			getWebComponent: 11
		});
	}

	get controlClass() {
		return this.$$.ctx[0];
	}

	set controlClass(controlClass) {
		this.$$set({ controlClass });
		flush();
	}

	get value() {
		return this.$$.ctx[1];
	}

	set value(value) {
		this.$$set({ value });
		flush();
	}

	get color() {
		return this.$$.ctx[2];
	}

	set color(color) {
		this.$$set({ color });
		flush();
	}

	get size() {
		return this.$$.ctx[3];
	}

	set size(size) {
		this.$$set({ size });
		flush();
	}

	get state() {
		return this.$$.ctx[4];
	}

	set state(state) {
		this.$$set({ state });
		flush();
	}

	get readonly() {
		return this.$$.ctx[5];
	}

	set readonly(readonly) {
		this.$$set({ readonly });
		flush();
	}

	get disabled() {
		return this.$$.ctx[6];
	}

	set disabled(disabled) {
		this.$$set({ disabled });
		flush();
	}

	get isLoading() {
		return this.$$.ctx[7];
	}

	set isLoading(isLoading) {
		this.$$set({ isLoading });
		flush();
	}

	get hasFixedSize() {
		return this.$$.ctx[8];
	}

	set hasFixedSize(hasFixedSize) {
		this.$$set({ hasFixedSize });
		flush();
	}

	get rows() {
		return this.$$.ctx[9];
	}

	set rows(rows) {
		this.$$set({ rows });
		flush();
	}

	get getWebComponent(): HTMLBmTextareaElement | undefined {
		return this.$$.ctx[11];
	}
}

export default BmTextarea;