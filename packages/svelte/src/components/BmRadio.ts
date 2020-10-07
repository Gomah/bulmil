/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from '@bulmil/core';


interface BmRadioProps {
  
  /** Input class */
  inputClass?: Components.BmRadio["inputClass"]
  
  /** Label Classes */
  labelClass?: Components.BmRadio["labelClass"]
  
  /** Name */
  name?: Components.BmRadio["name"]
  
  /** Checked */
  checked?: Components.BmRadio["checked"]
  
  /** Disabled */
  disabled?: Components.BmRadio["disabled"]
}

interface BmRadioEvents {
  
}

interface BmRadioSlots {
  default: any
}
  
/* generated by Svelte v3.29.0 */
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
	let bm_radio;
	let current;
	const default_slot_template = /*#slots*/ ctx[8].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[7], null);

	return {
		c() {
			bm_radio = element("bm-radio");
			if (default_slot) default_slot.c();
			set_custom_element_data(bm_radio, "input-class", /*inputClass*/ ctx[0]);
			set_custom_element_data(bm_radio, "label-class", /*labelClass*/ ctx[1]);
			set_custom_element_data(bm_radio, "name", /*name*/ ctx[2]);
			set_custom_element_data(bm_radio, "checked", /*checked*/ ctx[3]);
			set_custom_element_data(bm_radio, "disabled", /*disabled*/ ctx[4]);
		},
		m(target, anchor) {
			insert(target, bm_radio, anchor);

			if (default_slot) {
				default_slot.m(bm_radio, null);
			}

			/*bm_radio_binding*/ ctx[9](bm_radio);
			current = true;
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 128) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[7], dirty, null, null);
				}
			}

			if (!current || dirty & /*inputClass*/ 1) {
				set_custom_element_data(bm_radio, "input-class", /*inputClass*/ ctx[0]);
			}

			if (!current || dirty & /*labelClass*/ 2) {
				set_custom_element_data(bm_radio, "label-class", /*labelClass*/ ctx[1]);
			}

			if (!current || dirty & /*name*/ 4) {
				set_custom_element_data(bm_radio, "name", /*name*/ ctx[2]);
			}

			if (!current || dirty & /*checked*/ 8) {
				set_custom_element_data(bm_radio, "checked", /*checked*/ ctx[3]);
			}

			if (!current || dirty & /*disabled*/ 16) {
				set_custom_element_data(bm_radio, "disabled", /*disabled*/ ctx[4]);
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
			if (detaching) detach(bm_radio);
			if (default_slot) default_slot.d(detaching);
			/*bm_radio_binding*/ ctx[9](null);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let __ref;
	let __mounted = false;
	const dispatch = createEventDispatcher();
	let { inputClass = undefined } = $$props;
	let { labelClass = undefined } = $$props;
	let { name = undefined } = $$props;
	let { checked = undefined } = $$props;
	let { disabled = undefined } = $$props;
	const getWebComponent = () => __ref;

	onMount(() => {
		__mounted = true;
	});

	const setProp = (prop, value) => {
		if (__ref) $$invalidate(5, __ref[prop] = value, __ref);
	};

	const onEvent = e => {
		e.stopPropagation();
		dispatch(e.type, e.detail);
	};

	function bm_radio_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			__ref = $$value;
			$$invalidate(5, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ("inputClass" in $$props) $$invalidate(0, inputClass = $$props.inputClass);
		if ("labelClass" in $$props) $$invalidate(1, labelClass = $$props.labelClass);
		if ("name" in $$props) $$invalidate(2, name = $$props.name);
		if ("checked" in $$props) $$invalidate(3, checked = $$props.checked);
		if ("disabled" in $$props) $$invalidate(4, disabled = $$props.disabled);
		if ("$$scope" in $$props) $$invalidate(7, $$scope = $$props.$$scope);
	};

	return [
		inputClass,
		labelClass,
		name,
		checked,
		disabled,
		__ref,
		getWebComponent,
		$$scope,
		slots,
		bm_radio_binding
	];
}

class BmRadio extends SvelteComponent {
  $$prop_def: BmRadioProps;
  $$events_def: BmRadioEvents;
  $$slot_def: BmRadioSlots;

  $on<K extends keyof BmRadioEvents>(type: K, callback: (e: BmRadioEvents[K]) => any): () => void {
	  return super.$on(type, callback);
	}

  $set($$props: Partial<BmRadioProps>): void {
	  super.$set($$props);
	}

	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			inputClass: 0,
			labelClass: 1,
			name: 2,
			checked: 3,
			disabled: 4,
			getWebComponent: 6
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

	get name() {
		return this.$$.ctx[2];
	}

	set name(name) {
		this.$set({ name });
		flush();
	}

	get checked() {
		return this.$$.ctx[3];
	}

	set checked(checked) {
		this.$set({ checked });
		flush();
	}

	get disabled() {
		return this.$$.ctx[4];
	}

	set disabled(disabled) {
		this.$set({ disabled });
		flush();
	}

	get getWebComponent(): HTMLBmRadioElement | undefined {
		return this.$$.ctx[6];
	}
}

export default BmRadio;