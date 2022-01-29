/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from '@bulmil/core';


interface BmFileProps {
  
  /** Name */
  name?: Components.BmFile["name"]
  
  /** Placeholder */
  placeholder?: Components.BmFile["placeholder"]
  
  /** Color */
  color?: Components.BmFile["color"]
  
  /** Size */
  size?: Components.BmFile["size"]
  
  /** Alignment */
  alignment?: Components.BmFile["alignment"]
  
  /** Add a placeholder for the selected file name */
  hasName?: Components.BmFile["hasName"]
  
  /** Move the CTA to the right side */
  isRight?: Components.BmFile["isRight"]
  
  /** Expand the name to fill up the space */
  isFullwidth?: Components.BmFile["isFullwidth"]
  
  /** File */
  file?: Components.BmFile["file"]
  
  /** Boxed block */
  isBoxed?: Components.BmFile["isBoxed"]
}

interface BmFileEvents {
  
}

interface BmFileSlots {
  default: any
}
  
/* generated by Svelte v3.46.3 */
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
	let bm_file;
	let current;
	const default_slot_template = /*#slots*/ ctx[14].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[13], null);

	return {
		c() {
			bm_file = element("bm-file");
			if (default_slot) default_slot.c();
			set_custom_element_data(bm_file, "name", /*name*/ ctx[0]);
			set_custom_element_data(bm_file, "placeholder", /*placeholder*/ ctx[1]);
			set_custom_element_data(bm_file, "color", /*color*/ ctx[2]);
			set_custom_element_data(bm_file, "size", /*size*/ ctx[3]);
			set_custom_element_data(bm_file, "alignment", /*alignment*/ ctx[4]);
			set_custom_element_data(bm_file, "has-name", /*hasName*/ ctx[5]);
			set_custom_element_data(bm_file, "is-right", /*isRight*/ ctx[6]);
			set_custom_element_data(bm_file, "is-fullwidth", /*isFullwidth*/ ctx[7]);
			set_custom_element_data(bm_file, "is-boxed", /*isBoxed*/ ctx[8]);
		},
		m(target, anchor) {
			insert(target, bm_file, anchor);

			if (default_slot) {
				default_slot.m(bm_file, null);
			}

			/*bm_file_binding*/ ctx[15](bm_file);
			current = true;
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 8192)) {
					update_slot_base(
						default_slot,
						default_slot_template,
						ctx,
						/*$$scope*/ ctx[13],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[13])
						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[13], dirty, null),
						null
					);
				}
			}

			if (!current || dirty & /*name*/ 1) {
				set_custom_element_data(bm_file, "name", /*name*/ ctx[0]);
			}

			if (!current || dirty & /*placeholder*/ 2) {
				set_custom_element_data(bm_file, "placeholder", /*placeholder*/ ctx[1]);
			}

			if (!current || dirty & /*color*/ 4) {
				set_custom_element_data(bm_file, "color", /*color*/ ctx[2]);
			}

			if (!current || dirty & /*size*/ 8) {
				set_custom_element_data(bm_file, "size", /*size*/ ctx[3]);
			}

			if (!current || dirty & /*alignment*/ 16) {
				set_custom_element_data(bm_file, "alignment", /*alignment*/ ctx[4]);
			}

			if (!current || dirty & /*hasName*/ 32) {
				set_custom_element_data(bm_file, "has-name", /*hasName*/ ctx[5]);
			}

			if (!current || dirty & /*isRight*/ 64) {
				set_custom_element_data(bm_file, "is-right", /*isRight*/ ctx[6]);
			}

			if (!current || dirty & /*isFullwidth*/ 128) {
				set_custom_element_data(bm_file, "is-fullwidth", /*isFullwidth*/ ctx[7]);
			}

			if (!current || dirty & /*isBoxed*/ 256) {
				set_custom_element_data(bm_file, "is-boxed", /*isBoxed*/ ctx[8]);
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
			if (detaching) detach(bm_file);
			if (default_slot) default_slot.d(detaching);
			/*bm_file_binding*/ ctx[15](null);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let __ref;
	let __mounted = false;
	const dispatch = createEventDispatcher();
	let { name = undefined } = $$props;
	let { placeholder = undefined } = $$props;
	let { color = undefined } = $$props;
	let { size = undefined } = $$props;
	let { alignment = undefined } = $$props;
	let { hasName = undefined } = $$props;
	let { isRight = undefined } = $$props;
	let { isFullwidth = undefined } = $$props;
	let { file = undefined } = $$props;
	let { isBoxed = undefined } = $$props;
	const getWebComponent = () => __ref;

	onMount(() => {
		$$invalidate(12, __mounted = true);
	});

	const setProp = (prop, value) => {
		if (__ref) $$invalidate(9, __ref[prop] = value, __ref);
	};

	const onEvent = e => {
		e.stopPropagation();
		dispatch(e.type, e.detail);
	};

	function bm_file_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			__ref = $$value;
			$$invalidate(9, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ('name' in $$props) $$invalidate(0, name = $$props.name);
		if ('placeholder' in $$props) $$invalidate(1, placeholder = $$props.placeholder);
		if ('color' in $$props) $$invalidate(2, color = $$props.color);
		if ('size' in $$props) $$invalidate(3, size = $$props.size);
		if ('alignment' in $$props) $$invalidate(4, alignment = $$props.alignment);
		if ('hasName' in $$props) $$invalidate(5, hasName = $$props.hasName);
		if ('isRight' in $$props) $$invalidate(6, isRight = $$props.isRight);
		if ('isFullwidth' in $$props) $$invalidate(7, isFullwidth = $$props.isFullwidth);
		if ('file' in $$props) $$invalidate(10, file = $$props.file);
		if ('isBoxed' in $$props) $$invalidate(8, isBoxed = $$props.isBoxed);
		if ('$$scope' in $$props) $$invalidate(13, $$scope = $$props.$$scope);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*__mounted, file*/ 5120) {
			$: if (__mounted) setProp('file', file);
		}
	};

	return [
		name,
		placeholder,
		color,
		size,
		alignment,
		hasName,
		isRight,
		isFullwidth,
		isBoxed,
		__ref,
		file,
		getWebComponent,
		__mounted,
		$$scope,
		slots,
		bm_file_binding
	];
}

class BmFile extends SvelteComponent {
  $$prop_def: BmFileProps;
  $$events_def: BmFileEvents;
  $$slot_def: BmFileSlots;

  $on<K extends keyof BmFileEvents>(type: K, callback: (e: BmFileEvents[K]) => any): () => void {
	  return super.$on(type, callback);
	}

  $set($$props: Partial<BmFileProps>): void {
	  super.$set($$props);
	}

	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			name: 0,
			placeholder: 1,
			color: 2,
			size: 3,
			alignment: 4,
			hasName: 5,
			isRight: 6,
			isFullwidth: 7,
			file: 10,
			isBoxed: 8,
			getWebComponent: 11
		});
	}

	get name() {
		return this.$$.ctx[0];
	}

	set name(name) {
		this.$$set({ name });
		flush();
	}

	get placeholder() {
		return this.$$.ctx[1];
	}

	set placeholder(placeholder) {
		this.$$set({ placeholder });
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

	get alignment() {
		return this.$$.ctx[4];
	}

	set alignment(alignment) {
		this.$$set({ alignment });
		flush();
	}

	get hasName() {
		return this.$$.ctx[5];
	}

	set hasName(hasName) {
		this.$$set({ hasName });
		flush();
	}

	get isRight() {
		return this.$$.ctx[6];
	}

	set isRight(isRight) {
		this.$$set({ isRight });
		flush();
	}

	get isFullwidth() {
		return this.$$.ctx[7];
	}

	set isFullwidth(isFullwidth) {
		this.$$set({ isFullwidth });
		flush();
	}

	get file() {
		return this.$$.ctx[10];
	}

	set file(file) {
		this.$$set({ file });
		flush();
	}

	get isBoxed() {
		return this.$$.ctx[8];
	}

	set isBoxed(isBoxed) {
		this.$$set({ isBoxed });
		flush();
	}

	get getWebComponent(): HTMLBmFileElement | undefined {
		return this.$$.ctx[11];
	}
}

export default BmFile;