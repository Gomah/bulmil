/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from '@bulmil/core';


interface BmSwitchProps {
  
  /** Color */
  color?: Components.BmSwitch["color"]
  
  /** Size */
  size?: Components.BmSwitch["size"]
  
  /** Thin */
  isThin?: Components.BmSwitch["isThin"]
  
  /** Rounded */
  isRounded?: Components.BmSwitch["isRounded"]
  
  /** Outlined */
  isOutlined?: Components.BmSwitch["isOutlined"]
  
  /** Disabled */
  disabled?: Components.BmSwitch["disabled"]
  
  /** Checked */
  checked?: Components.BmSwitch["checked"]
}

interface BmSwitchEvents {
  
}

interface BmSwitchSlots {
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
	let bm_switch;
	let current;
	const default_slot_template = /*#slots*/ ctx[10].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[9], null);

	return {
		c() {
			bm_switch = element("bm-switch");
			if (default_slot) default_slot.c();
			set_custom_element_data(bm_switch, "color", /*color*/ ctx[0]);
			set_custom_element_data(bm_switch, "size", /*size*/ ctx[1]);
			set_custom_element_data(bm_switch, "is-thin", /*isThin*/ ctx[2]);
			set_custom_element_data(bm_switch, "is-rounded", /*isRounded*/ ctx[3]);
			set_custom_element_data(bm_switch, "is-outlined", /*isOutlined*/ ctx[4]);
			set_custom_element_data(bm_switch, "disabled", /*disabled*/ ctx[5]);
			set_custom_element_data(bm_switch, "checked", /*checked*/ ctx[6]);
		},
		m(target, anchor) {
			insert(target, bm_switch, anchor);

			if (default_slot) {
				default_slot.m(bm_switch, null);
			}

			/*bm_switch_binding*/ ctx[11](bm_switch);
			current = true;
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 512)) {
					update_slot_base(
						default_slot,
						default_slot_template,
						ctx,
						/*$$scope*/ ctx[9],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[9])
						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[9], dirty, null),
						null
					);
				}
			}

			if (!current || dirty & /*color*/ 1) {
				set_custom_element_data(bm_switch, "color", /*color*/ ctx[0]);
			}

			if (!current || dirty & /*size*/ 2) {
				set_custom_element_data(bm_switch, "size", /*size*/ ctx[1]);
			}

			if (!current || dirty & /*isThin*/ 4) {
				set_custom_element_data(bm_switch, "is-thin", /*isThin*/ ctx[2]);
			}

			if (!current || dirty & /*isRounded*/ 8) {
				set_custom_element_data(bm_switch, "is-rounded", /*isRounded*/ ctx[3]);
			}

			if (!current || dirty & /*isOutlined*/ 16) {
				set_custom_element_data(bm_switch, "is-outlined", /*isOutlined*/ ctx[4]);
			}

			if (!current || dirty & /*disabled*/ 32) {
				set_custom_element_data(bm_switch, "disabled", /*disabled*/ ctx[5]);
			}

			if (!current || dirty & /*checked*/ 64) {
				set_custom_element_data(bm_switch, "checked", /*checked*/ ctx[6]);
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
			if (detaching) detach(bm_switch);
			if (default_slot) default_slot.d(detaching);
			/*bm_switch_binding*/ ctx[11](null);
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
	let { isThin = undefined } = $$props;
	let { isRounded = undefined } = $$props;
	let { isOutlined = undefined } = $$props;
	let { disabled = undefined } = $$props;
	let { checked = undefined } = $$props;
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

	function bm_switch_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			__ref = $$value;
			$$invalidate(7, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ('color' in $$props) $$invalidate(0, color = $$props.color);
		if ('size' in $$props) $$invalidate(1, size = $$props.size);
		if ('isThin' in $$props) $$invalidate(2, isThin = $$props.isThin);
		if ('isRounded' in $$props) $$invalidate(3, isRounded = $$props.isRounded);
		if ('isOutlined' in $$props) $$invalidate(4, isOutlined = $$props.isOutlined);
		if ('disabled' in $$props) $$invalidate(5, disabled = $$props.disabled);
		if ('checked' in $$props) $$invalidate(6, checked = $$props.checked);
		if ('$$scope' in $$props) $$invalidate(9, $$scope = $$props.$$scope);
	};

	return [
		color,
		size,
		isThin,
		isRounded,
		isOutlined,
		disabled,
		checked,
		__ref,
		getWebComponent,
		$$scope,
		slots,
		bm_switch_binding
	];
}

class BmSwitch extends SvelteComponent {
  $$prop_def: BmSwitchProps;
  $$events_def: BmSwitchEvents;
  $$slot_def: BmSwitchSlots;

  $on<K extends keyof BmSwitchEvents>(type: K, callback: (e: BmSwitchEvents[K]) => any): () => void {
	  return super.$on(type, callback);
	}

  $set($$props: Partial<BmSwitchProps>): void {
	  super.$set($$props);
	}

	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			color: 0,
			size: 1,
			isThin: 2,
			isRounded: 3,
			isOutlined: 4,
			disabled: 5,
			checked: 6,
			getWebComponent: 8
		});
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

	get isThin() {
		return this.$$.ctx[2];
	}

	set isThin(isThin) {
		this.$$set({ isThin });
		flush();
	}

	get isRounded() {
		return this.$$.ctx[3];
	}

	set isRounded(isRounded) {
		this.$$set({ isRounded });
		flush();
	}

	get isOutlined() {
		return this.$$.ctx[4];
	}

	set isOutlined(isOutlined) {
		this.$$set({ isOutlined });
		flush();
	}

	get disabled() {
		return this.$$.ctx[5];
	}

	set disabled(disabled) {
		this.$$set({ disabled });
		flush();
	}

	get checked() {
		return this.$$.ctx[6];
	}

	set checked(checked) {
		this.$$set({ checked });
		flush();
	}

	get getWebComponent(): HTMLBmSwitchElement | undefined {
		return this.$$.ctx[8];
	}
}

export default BmSwitch;