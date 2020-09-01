/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from '@bulmil/core';


interface BmCheckboxProps {
  
  /** Input classes */
  inputClass?: Components.BmCheckbox["inputClass"]
  
  /** Label classes */
  labelClass?: Components.BmCheckbox["labelClass"]
  
  /** Checked */
  checked?: Components.BmCheckbox["checked"]
  
  /** Disabled */
  disabled?: Components.BmCheckbox["disabled"]
}

interface BmCheckboxEvents {
  
}

interface BmCheckboxSlots {
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
	let bm_checkbox;
	let current;
	const default_slot_template = /*$$slots*/ ctx[7].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[6], null);

	return {
		c() {
			bm_checkbox = element("bm-checkbox");
			if (default_slot) default_slot.c();
			set_custom_element_data(bm_checkbox, "input-class", /*inputClass*/ ctx[0]);
			set_custom_element_data(bm_checkbox, "label-class", /*labelClass*/ ctx[1]);
			set_custom_element_data(bm_checkbox, "checked", /*checked*/ ctx[2]);
			set_custom_element_data(bm_checkbox, "disabled", /*disabled*/ ctx[3]);
		},
		m(target, anchor) {
			insert(target, bm_checkbox, anchor);

			if (default_slot) {
				default_slot.m(bm_checkbox, null);
			}

			/*bm_checkbox_binding*/ ctx[8](bm_checkbox);
			current = true;
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 64) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[6], dirty, null, null);
				}
			}

			if (!current || dirty & /*inputClass*/ 1) {
				set_custom_element_data(bm_checkbox, "input-class", /*inputClass*/ ctx[0]);
			}

			if (!current || dirty & /*labelClass*/ 2) {
				set_custom_element_data(bm_checkbox, "label-class", /*labelClass*/ ctx[1]);
			}

			if (!current || dirty & /*checked*/ 4) {
				set_custom_element_data(bm_checkbox, "checked", /*checked*/ ctx[2]);
			}

			if (!current || dirty & /*disabled*/ 8) {
				set_custom_element_data(bm_checkbox, "disabled", /*disabled*/ ctx[3]);
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
			if (detaching) detach(bm_checkbox);
			if (default_slot) default_slot.d(detaching);
			/*bm_checkbox_binding*/ ctx[8](null);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let __ref;
	let __mounted = false;
	const dispatch = createEventDispatcher();
	let { inputClass = undefined } = $$props;
	let { labelClass = undefined } = $$props;
	let { checked = undefined } = $$props;
	let { disabled = undefined } = $$props;
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

	function bm_checkbox_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			__ref = $$value;
			$$invalidate(4, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ("inputClass" in $$props) $$invalidate(0, inputClass = $$props.inputClass);
		if ("labelClass" in $$props) $$invalidate(1, labelClass = $$props.labelClass);
		if ("checked" in $$props) $$invalidate(2, checked = $$props.checked);
		if ("disabled" in $$props) $$invalidate(3, disabled = $$props.disabled);
		if ("$$scope" in $$props) $$invalidate(6, $$scope = $$props.$$scope);
	};

	return [
		inputClass,
		labelClass,
		checked,
		disabled,
		__ref,
		getWebComponent,
		$$scope,
		$$slots,
		bm_checkbox_binding
	];
}

class BmCheckbox extends SvelteComponent {
  $$prop_def: BmCheckboxProps;
  $$events_def: BmCheckboxEvents;
  $$slot_def: BmCheckboxSlots;

  $on<K extends keyof BmCheckboxEvents>(type: K, callback: (e: BmCheckboxEvents[K]) => any): () => void {
	  return super.$on(type, callback);
	}

  $set($$props: Partial<BmCheckboxProps>): void {
	  super.$set($$props);
	}

	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			inputClass: 0,
			labelClass: 1,
			checked: 2,
			disabled: 3,
			getWebComponent: 5
		});
	}

	get inputClass() {
		return this.$$.ctx[0];
	}

	set inputClass(inputClass) {
		this.$set({ inputClass });
		flush();
	}

	get labelClass() {
		return this.$$.ctx[1];
	}

	set labelClass(labelClass) {
		this.$set({ labelClass });
		flush();
	}

	get checked() {
		return this.$$.ctx[2];
	}

	set checked(checked) {
		this.$set({ checked });
		flush();
	}

	get disabled() {
		return this.$$.ctx[3];
	}

	set disabled(disabled) {
		this.$set({ disabled });
		flush();
	}

	get getWebComponent(): HTMLBmCheckboxElement | undefined {
		return this.$$.ctx[5];
	}
}

export default BmCheckbox;