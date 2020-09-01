
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
var app = (function () {
    'use strict';

    function noop() { }
    function assign(tar, src) {
        // @ts-ignore
        for (const k in src)
            tar[k] = src[k];
        return tar;
    }
    function add_location(element, file, line, column, char) {
        element.__svelte_meta = {
            loc: { file, line, column, char }
        };
    }
    function run(fn) {
        return fn();
    }
    function blank_object() {
        return Object.create(null);
    }
    function run_all(fns) {
        fns.forEach(run);
    }
    function is_function(thing) {
        return typeof thing === 'function';
    }
    function safe_not_equal(a, b) {
        return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
    }
    function is_empty(obj) {
        return Object.keys(obj).length === 0;
    }
    function create_slot(definition, ctx, $$scope, fn) {
        if (definition) {
            const slot_ctx = get_slot_context(definition, ctx, $$scope, fn);
            return definition[0](slot_ctx);
        }
    }
    function get_slot_context(definition, ctx, $$scope, fn) {
        return definition[1] && fn
            ? assign($$scope.ctx.slice(), definition[1](fn(ctx)))
            : $$scope.ctx;
    }
    function get_slot_changes(definition, $$scope, dirty, fn) {
        if (definition[2] && fn) {
            const lets = definition[2](fn(dirty));
            if ($$scope.dirty === undefined) {
                return lets;
            }
            if (typeof lets === 'object') {
                const merged = [];
                const len = Math.max($$scope.dirty.length, lets.length);
                for (let i = 0; i < len; i += 1) {
                    merged[i] = $$scope.dirty[i] | lets[i];
                }
                return merged;
            }
            return $$scope.dirty | lets;
        }
        return $$scope.dirty;
    }
    function update_slot(slot, slot_definition, ctx, $$scope, dirty, get_slot_changes_fn, get_slot_context_fn) {
        const slot_changes = get_slot_changes(slot_definition, $$scope, dirty, get_slot_changes_fn);
        if (slot_changes) {
            const slot_context = get_slot_context(slot_definition, ctx, $$scope, get_slot_context_fn);
            slot.p(slot_context, slot_changes);
        }
    }
    function insert(target, node, anchor) {
        target.insertBefore(node, anchor || null);
    }
    function detach(node) {
        node.parentNode.removeChild(node);
    }
    function element(name) {
        return document.createElement(name);
    }
    function text(data) {
        return document.createTextNode(data);
    }
    function attr(node, attribute, value) {
        if (value == null)
            node.removeAttribute(attribute);
        else if (node.getAttribute(attribute) !== value)
            node.setAttribute(attribute, value);
    }
    function set_custom_element_data(node, prop, value) {
        if (prop in node) {
            node[prop] = value;
        }
        else {
            attr(node, prop, value);
        }
    }
    function children(element) {
        return Array.from(element.childNodes);
    }
    function custom_event(type, detail) {
        const e = document.createEvent('CustomEvent');
        e.initCustomEvent(type, false, false, detail);
        return e;
    }

    let current_component;
    function set_current_component(component) {
        current_component = component;
    }
    function get_current_component() {
        if (!current_component)
            throw new Error(`Function called outside component initialization`);
        return current_component;
    }
    function onMount(fn) {
        get_current_component().$$.on_mount.push(fn);
    }
    function createEventDispatcher() {
        const component = get_current_component();
        return (type, detail) => {
            const callbacks = component.$$.callbacks[type];
            if (callbacks) {
                // TODO are there situations where events could be dispatched
                // in a server (non-DOM) environment?
                const event = custom_event(type, detail);
                callbacks.slice().forEach(fn => {
                    fn.call(component, event);
                });
            }
        };
    }

    const dirty_components = [];
    const binding_callbacks = [];
    const render_callbacks = [];
    const flush_callbacks = [];
    const resolved_promise = Promise.resolve();
    let update_scheduled = false;
    function schedule_update() {
        if (!update_scheduled) {
            update_scheduled = true;
            resolved_promise.then(flush);
        }
    }
    function add_render_callback(fn) {
        render_callbacks.push(fn);
    }
    let flushing = false;
    const seen_callbacks = new Set();
    function flush() {
        if (flushing)
            return;
        flushing = true;
        do {
            // first, call beforeUpdate functions
            // and update components
            for (let i = 0; i < dirty_components.length; i += 1) {
                const component = dirty_components[i];
                set_current_component(component);
                update(component.$$);
            }
            dirty_components.length = 0;
            while (binding_callbacks.length)
                binding_callbacks.pop()();
            // then, once components are updated, call
            // afterUpdate functions. This may cause
            // subsequent updates...
            for (let i = 0; i < render_callbacks.length; i += 1) {
                const callback = render_callbacks[i];
                if (!seen_callbacks.has(callback)) {
                    // ...so guard against infinite loops
                    seen_callbacks.add(callback);
                    callback();
                }
            }
            render_callbacks.length = 0;
        } while (dirty_components.length);
        while (flush_callbacks.length) {
            flush_callbacks.pop()();
        }
        update_scheduled = false;
        flushing = false;
        seen_callbacks.clear();
    }
    function update($$) {
        if ($$.fragment !== null) {
            $$.update();
            run_all($$.before_update);
            const dirty = $$.dirty;
            $$.dirty = [-1];
            $$.fragment && $$.fragment.p($$.ctx, dirty);
            $$.after_update.forEach(add_render_callback);
        }
    }
    const outroing = new Set();
    let outros;
    function transition_in(block, local) {
        if (block && block.i) {
            outroing.delete(block);
            block.i(local);
        }
    }
    function transition_out(block, local, detach, callback) {
        if (block && block.o) {
            if (outroing.has(block))
                return;
            outroing.add(block);
            outros.c.push(() => {
                outroing.delete(block);
                if (callback) {
                    if (detach)
                        block.d(1);
                    callback();
                }
            });
            block.o(local);
        }
    }
    function create_component(block) {
        block && block.c();
    }
    function mount_component(component, target, anchor) {
        const { fragment, on_mount, on_destroy, after_update } = component.$$;
        fragment && fragment.m(target, anchor);
        // onMount happens before the initial afterUpdate
        add_render_callback(() => {
            const new_on_destroy = on_mount.map(run).filter(is_function);
            if (on_destroy) {
                on_destroy.push(...new_on_destroy);
            }
            else {
                // Edge case - component was destroyed immediately,
                // most likely as a result of a binding initialising
                run_all(new_on_destroy);
            }
            component.$$.on_mount = [];
        });
        after_update.forEach(add_render_callback);
    }
    function destroy_component(component, detaching) {
        const $$ = component.$$;
        if ($$.fragment !== null) {
            run_all($$.on_destroy);
            $$.fragment && $$.fragment.d(detaching);
            // TODO null out other refs, including component.$$ (but need to
            // preserve final state?)
            $$.on_destroy = $$.fragment = null;
            $$.ctx = [];
        }
    }
    function make_dirty(component, i) {
        if (component.$$.dirty[0] === -1) {
            dirty_components.push(component);
            schedule_update();
            component.$$.dirty.fill(0);
        }
        component.$$.dirty[(i / 31) | 0] |= (1 << (i % 31));
    }
    function init(component, options, instance, create_fragment, not_equal, props, dirty = [-1]) {
        const parent_component = current_component;
        set_current_component(component);
        const prop_values = options.props || {};
        const $$ = component.$$ = {
            fragment: null,
            ctx: null,
            // state
            props,
            update: noop,
            not_equal,
            bound: blank_object(),
            // lifecycle
            on_mount: [],
            on_destroy: [],
            before_update: [],
            after_update: [],
            context: new Map(parent_component ? parent_component.$$.context : []),
            // everything else
            callbacks: blank_object(),
            dirty,
            skip_bound: false
        };
        let ready = false;
        $$.ctx = instance
            ? instance(component, prop_values, (i, ret, ...rest) => {
                const value = rest.length ? rest[0] : ret;
                if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
                    if (!$$.skip_bound && $$.bound[i])
                        $$.bound[i](value);
                    if (ready)
                        make_dirty(component, i);
                }
                return ret;
            })
            : [];
        $$.update();
        ready = true;
        run_all($$.before_update);
        // `false` as a special case of no DOM component
        $$.fragment = create_fragment ? create_fragment($$.ctx) : false;
        if (options.target) {
            if (options.hydrate) {
                const nodes = children(options.target);
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                $$.fragment && $$.fragment.l(nodes);
                nodes.forEach(detach);
            }
            else {
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                $$.fragment && $$.fragment.c();
            }
            if (options.intro)
                transition_in(component.$$.fragment);
            mount_component(component, options.target, options.anchor);
            flush();
        }
        set_current_component(parent_component);
    }
    class SvelteComponent {
        $destroy() {
            destroy_component(this, 1);
            this.$destroy = noop;
        }
        $on(type, callback) {
            const callbacks = (this.$$.callbacks[type] || (this.$$.callbacks[type] = []));
            callbacks.push(callback);
            return () => {
                const index = callbacks.indexOf(callback);
                if (index !== -1)
                    callbacks.splice(index, 1);
            };
        }
        $set($$props) {
            if (this.$$set && !is_empty($$props)) {
                this.$$.skip_bound = true;
                this.$$set($$props);
                this.$$.skip_bound = false;
            }
        }
    }

    function dispatch_dev(type, detail) {
        document.dispatchEvent(custom_event(type, Object.assign({ version: '3.24.1' }, detail)));
    }
    function insert_dev(target, node, anchor) {
        dispatch_dev("SvelteDOMInsert", { target, node, anchor });
        insert(target, node, anchor);
    }
    function detach_dev(node) {
        dispatch_dev("SvelteDOMRemove", { node });
        detach(node);
    }
    function validate_slots(name, slot, keys) {
        for (const slot_key of Object.keys(slot)) {
            if (!~keys.indexOf(slot_key)) {
                console.warn(`<${name}> received an unexpected slot "${slot_key}".`);
            }
        }
    }
    class SvelteComponentDev extends SvelteComponent {
        constructor(options) {
            if (!options || (!options.target && !options.$$inline)) {
                throw new Error(`'target' is a required option`);
            }
            super();
        }
        $destroy() {
            super.$destroy();
            this.$destroy = () => {
                console.warn(`Component was already destroyed`); // eslint-disable-line no-console
            };
        }
        $capture_state() { }
        $inject_state() { }
    }

    /* Users/gomah/Projects/Open Source/Bulmil/bulmil/packages/svelte/src/svelte/BmButton.svelte generated by Svelte v3.24.1 */
    const file = "Users/gomah/Projects/Open Source/Bulmil/bulmil/packages/svelte/src/svelte/BmButton.svelte";

    function create_fragment(ctx) {
    	let bm_button;
    	let current;
    	const default_slot_template = /*$$slots*/ ctx[16].default;
    	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[15], null);

    	const block = {
    		c: function create() {
    			bm_button = element("bm-button");
    			if (default_slot) default_slot.c();
    			set_custom_element_data(bm_button, "disabled", /*disabled*/ ctx[0]);
    			set_custom_element_data(bm_button, "color", /*color*/ ctx[1]);
    			set_custom_element_data(bm_button, "size", /*size*/ ctx[2]);
    			set_custom_element_data(bm_button, "is-fullwidth", /*isFullwidth*/ ctx[3]);
    			set_custom_element_data(bm_button, "is-outlined", /*isOutlined*/ ctx[4]);
    			set_custom_element_data(bm_button, "is-light", /*isLight*/ ctx[5]);
    			set_custom_element_data(bm_button, "is-inverted", /*isInverted*/ ctx[6]);
    			set_custom_element_data(bm_button, "is-rounded", /*isRounded*/ ctx[7]);
    			set_custom_element_data(bm_button, "is-hovered", /*isHovered*/ ctx[8]);
    			set_custom_element_data(bm_button, "is-focused", /*isFocused*/ ctx[9]);
    			set_custom_element_data(bm_button, "is-active", /*isActive*/ ctx[10]);
    			set_custom_element_data(bm_button, "is-static", /*isStatic*/ ctx[11]);
    			set_custom_element_data(bm_button, "is-loading", /*isLoading*/ ctx[12]);
    			add_location(bm_button, file, 39, 0, 830);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, bm_button, anchor);

    			if (default_slot) {
    				default_slot.m(bm_button, null);
    			}

    			/*bm_button_binding*/ ctx[17](bm_button);
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			if (default_slot) {
    				if (default_slot.p && dirty & /*$$scope*/ 32768) {
    					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[15], dirty, null, null);
    				}
    			}

    			if (!current || dirty & /*disabled*/ 1) {
    				set_custom_element_data(bm_button, "disabled", /*disabled*/ ctx[0]);
    			}

    			if (!current || dirty & /*color*/ 2) {
    				set_custom_element_data(bm_button, "color", /*color*/ ctx[1]);
    			}

    			if (!current || dirty & /*size*/ 4) {
    				set_custom_element_data(bm_button, "size", /*size*/ ctx[2]);
    			}

    			if (!current || dirty & /*isFullwidth*/ 8) {
    				set_custom_element_data(bm_button, "is-fullwidth", /*isFullwidth*/ ctx[3]);
    			}

    			if (!current || dirty & /*isOutlined*/ 16) {
    				set_custom_element_data(bm_button, "is-outlined", /*isOutlined*/ ctx[4]);
    			}

    			if (!current || dirty & /*isLight*/ 32) {
    				set_custom_element_data(bm_button, "is-light", /*isLight*/ ctx[5]);
    			}

    			if (!current || dirty & /*isInverted*/ 64) {
    				set_custom_element_data(bm_button, "is-inverted", /*isInverted*/ ctx[6]);
    			}

    			if (!current || dirty & /*isRounded*/ 128) {
    				set_custom_element_data(bm_button, "is-rounded", /*isRounded*/ ctx[7]);
    			}

    			if (!current || dirty & /*isHovered*/ 256) {
    				set_custom_element_data(bm_button, "is-hovered", /*isHovered*/ ctx[8]);
    			}

    			if (!current || dirty & /*isFocused*/ 512) {
    				set_custom_element_data(bm_button, "is-focused", /*isFocused*/ ctx[9]);
    			}

    			if (!current || dirty & /*isActive*/ 1024) {
    				set_custom_element_data(bm_button, "is-active", /*isActive*/ ctx[10]);
    			}

    			if (!current || dirty & /*isStatic*/ 2048) {
    				set_custom_element_data(bm_button, "is-static", /*isStatic*/ ctx[11]);
    			}

    			if (!current || dirty & /*isLoading*/ 4096) {
    				set_custom_element_data(bm_button, "is-loading", /*isLoading*/ ctx[12]);
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(default_slot, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(default_slot, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(bm_button);
    			if (default_slot) default_slot.d(detaching);
    			/*bm_button_binding*/ ctx[17](null);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance($$self, $$props, $$invalidate) {
    	let __ref;
    	let __mounted = false;
    	const dispatch = createEventDispatcher();
    	let { disabled = undefined } = $$props;
    	let { color = undefined } = $$props;
    	let { size = undefined } = $$props;
    	let { isFullwidth = undefined } = $$props;
    	let { isOutlined = undefined } = $$props;
    	let { isLight = undefined } = $$props;
    	let { isInverted = undefined } = $$props;
    	let { isRounded = undefined } = $$props;
    	let { isHovered = undefined } = $$props;
    	let { isFocused = undefined } = $$props;
    	let { isActive = undefined } = $$props;
    	let { isStatic = undefined } = $$props;
    	let { isLoading = undefined } = $$props;
    	const getWebComponent = () => __ref;

    	onMount(() => {
    		__mounted = true;
    	});

    	const setProp = (prop, value) => {
    		if (__ref) $$invalidate(13, __ref[prop] = value, __ref);
    	};

    	const onEvent = e => {
    		e.stopPropagation();
    		dispatch(e.type, e.detail);
    	};

    	const writable_props = [
    		"disabled",
    		"color",
    		"size",
    		"isFullwidth",
    		"isOutlined",
    		"isLight",
    		"isInverted",
    		"isRounded",
    		"isHovered",
    		"isFocused",
    		"isActive",
    		"isStatic",
    		"isLoading"
    	];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<BmButton> was created with unknown prop '${key}'`);
    	});

    	let { $$slots = {}, $$scope } = $$props;
    	validate_slots("BmButton", $$slots, ['default']);

    	function bm_button_binding($$value) {
    		binding_callbacks[$$value ? "unshift" : "push"](() => {
    			__ref = $$value;
    			$$invalidate(13, __ref);
    		});
    	}

    	$$self.$$set = $$props => {
    		if ("disabled" in $$props) $$invalidate(0, disabled = $$props.disabled);
    		if ("color" in $$props) $$invalidate(1, color = $$props.color);
    		if ("size" in $$props) $$invalidate(2, size = $$props.size);
    		if ("isFullwidth" in $$props) $$invalidate(3, isFullwidth = $$props.isFullwidth);
    		if ("isOutlined" in $$props) $$invalidate(4, isOutlined = $$props.isOutlined);
    		if ("isLight" in $$props) $$invalidate(5, isLight = $$props.isLight);
    		if ("isInverted" in $$props) $$invalidate(6, isInverted = $$props.isInverted);
    		if ("isRounded" in $$props) $$invalidate(7, isRounded = $$props.isRounded);
    		if ("isHovered" in $$props) $$invalidate(8, isHovered = $$props.isHovered);
    		if ("isFocused" in $$props) $$invalidate(9, isFocused = $$props.isFocused);
    		if ("isActive" in $$props) $$invalidate(10, isActive = $$props.isActive);
    		if ("isStatic" in $$props) $$invalidate(11, isStatic = $$props.isStatic);
    		if ("isLoading" in $$props) $$invalidate(12, isLoading = $$props.isLoading);
    		if ("$$scope" in $$props) $$invalidate(15, $$scope = $$props.$$scope);
    	};

    	$$self.$capture_state = () => ({
    		createEventDispatcher,
    		onMount,
    		__ref,
    		__mounted,
    		dispatch,
    		disabled,
    		color,
    		size,
    		isFullwidth,
    		isOutlined,
    		isLight,
    		isInverted,
    		isRounded,
    		isHovered,
    		isFocused,
    		isActive,
    		isStatic,
    		isLoading,
    		getWebComponent,
    		setProp,
    		onEvent
    	});

    	$$self.$inject_state = $$props => {
    		if ("__ref" in $$props) $$invalidate(13, __ref = $$props.__ref);
    		if ("__mounted" in $$props) __mounted = $$props.__mounted;
    		if ("disabled" in $$props) $$invalidate(0, disabled = $$props.disabled);
    		if ("color" in $$props) $$invalidate(1, color = $$props.color);
    		if ("size" in $$props) $$invalidate(2, size = $$props.size);
    		if ("isFullwidth" in $$props) $$invalidate(3, isFullwidth = $$props.isFullwidth);
    		if ("isOutlined" in $$props) $$invalidate(4, isOutlined = $$props.isOutlined);
    		if ("isLight" in $$props) $$invalidate(5, isLight = $$props.isLight);
    		if ("isInverted" in $$props) $$invalidate(6, isInverted = $$props.isInverted);
    		if ("isRounded" in $$props) $$invalidate(7, isRounded = $$props.isRounded);
    		if ("isHovered" in $$props) $$invalidate(8, isHovered = $$props.isHovered);
    		if ("isFocused" in $$props) $$invalidate(9, isFocused = $$props.isFocused);
    		if ("isActive" in $$props) $$invalidate(10, isActive = $$props.isActive);
    		if ("isStatic" in $$props) $$invalidate(11, isStatic = $$props.isStatic);
    		if ("isLoading" in $$props) $$invalidate(12, isLoading = $$props.isLoading);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [
    		disabled,
    		color,
    		size,
    		isFullwidth,
    		isOutlined,
    		isLight,
    		isInverted,
    		isRounded,
    		isHovered,
    		isFocused,
    		isActive,
    		isStatic,
    		isLoading,
    		__ref,
    		getWebComponent,
    		$$scope,
    		$$slots,
    		bm_button_binding
    	];
    }

    class BmButton extends SvelteComponentDev {
    	constructor(options) {
    		super(options);

    		init(this, options, instance, create_fragment, safe_not_equal, {
    			disabled: 0,
    			color: 1,
    			size: 2,
    			isFullwidth: 3,
    			isOutlined: 4,
    			isLight: 5,
    			isInverted: 6,
    			isRounded: 7,
    			isHovered: 8,
    			isFocused: 9,
    			isActive: 10,
    			isStatic: 11,
    			isLoading: 12,
    			getWebComponent: 14
    		});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "BmButton",
    			options,
    			id: create_fragment.name
    		});
    	}

    	get disabled() {
    		throw new Error("<BmButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set disabled(value) {
    		throw new Error("<BmButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get color() {
    		throw new Error("<BmButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set color(value) {
    		throw new Error("<BmButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get size() {
    		throw new Error("<BmButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set size(value) {
    		throw new Error("<BmButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get isFullwidth() {
    		throw new Error("<BmButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set isFullwidth(value) {
    		throw new Error("<BmButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get isOutlined() {
    		throw new Error("<BmButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set isOutlined(value) {
    		throw new Error("<BmButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get isLight() {
    		throw new Error("<BmButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set isLight(value) {
    		throw new Error("<BmButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get isInverted() {
    		throw new Error("<BmButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set isInverted(value) {
    		throw new Error("<BmButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get isRounded() {
    		throw new Error("<BmButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set isRounded(value) {
    		throw new Error("<BmButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get isHovered() {
    		throw new Error("<BmButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set isHovered(value) {
    		throw new Error("<BmButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get isFocused() {
    		throw new Error("<BmButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set isFocused(value) {
    		throw new Error("<BmButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get isActive() {
    		throw new Error("<BmButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set isActive(value) {
    		throw new Error("<BmButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get isStatic() {
    		throw new Error("<BmButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set isStatic(value) {
    		throw new Error("<BmButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get isLoading() {
    		throw new Error("<BmButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set isLoading(value) {
    		throw new Error("<BmButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get getWebComponent() {
    		return this.$$.ctx[14];
    	}

    	set getWebComponent(value) {
    		throw new Error("<BmButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* Users/gomah/Projects/Open Source/Bulmil/bulmil/packages/svelte/src/svelte/BmContainer.svelte generated by Svelte v3.24.1 */
    const file$1 = "Users/gomah/Projects/Open Source/Bulmil/bulmil/packages/svelte/src/svelte/BmContainer.svelte";

    function create_fragment$1(ctx) {
    	let bm_container;
    	let current;
    	const default_slot_template = /*$$slots*/ ctx[5].default;
    	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[4], null);

    	const block = {
    		c: function create() {
    			bm_container = element("bm-container");
    			if (default_slot) default_slot.c();
    			set_custom_element_data(bm_container, "breakpoint", /*breakpoint*/ ctx[0]);
    			set_custom_element_data(bm_container, "is-fluid", /*isFluid*/ ctx[1]);
    			add_location(bm_container, file$1, 28, 0, 465);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, bm_container, anchor);

    			if (default_slot) {
    				default_slot.m(bm_container, null);
    			}

    			/*bm_container_binding*/ ctx[6](bm_container);
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			if (default_slot) {
    				if (default_slot.p && dirty & /*$$scope*/ 16) {
    					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[4], dirty, null, null);
    				}
    			}

    			if (!current || dirty & /*breakpoint*/ 1) {
    				set_custom_element_data(bm_container, "breakpoint", /*breakpoint*/ ctx[0]);
    			}

    			if (!current || dirty & /*isFluid*/ 2) {
    				set_custom_element_data(bm_container, "is-fluid", /*isFluid*/ ctx[1]);
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(default_slot, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(default_slot, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(bm_container);
    			if (default_slot) default_slot.d(detaching);
    			/*bm_container_binding*/ ctx[6](null);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$1.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$1($$self, $$props, $$invalidate) {
    	let __ref;
    	let __mounted = false;
    	const dispatch = createEventDispatcher();
    	let { breakpoint = undefined } = $$props;
    	let { isFluid = undefined } = $$props;
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

    	const writable_props = ["breakpoint", "isFluid"];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<BmContainer> was created with unknown prop '${key}'`);
    	});

    	let { $$slots = {}, $$scope } = $$props;
    	validate_slots("BmContainer", $$slots, ['default']);

    	function bm_container_binding($$value) {
    		binding_callbacks[$$value ? "unshift" : "push"](() => {
    			__ref = $$value;
    			$$invalidate(2, __ref);
    		});
    	}

    	$$self.$$set = $$props => {
    		if ("breakpoint" in $$props) $$invalidate(0, breakpoint = $$props.breakpoint);
    		if ("isFluid" in $$props) $$invalidate(1, isFluid = $$props.isFluid);
    		if ("$$scope" in $$props) $$invalidate(4, $$scope = $$props.$$scope);
    	};

    	$$self.$capture_state = () => ({
    		createEventDispatcher,
    		onMount,
    		__ref,
    		__mounted,
    		dispatch,
    		breakpoint,
    		isFluid,
    		getWebComponent,
    		setProp,
    		onEvent
    	});

    	$$self.$inject_state = $$props => {
    		if ("__ref" in $$props) $$invalidate(2, __ref = $$props.__ref);
    		if ("__mounted" in $$props) __mounted = $$props.__mounted;
    		if ("breakpoint" in $$props) $$invalidate(0, breakpoint = $$props.breakpoint);
    		if ("isFluid" in $$props) $$invalidate(1, isFluid = $$props.isFluid);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [
    		breakpoint,
    		isFluid,
    		__ref,
    		getWebComponent,
    		$$scope,
    		$$slots,
    		bm_container_binding
    	];
    }

    class BmContainer extends SvelteComponentDev {
    	constructor(options) {
    		super(options);

    		init(this, options, instance$1, create_fragment$1, safe_not_equal, {
    			breakpoint: 0,
    			isFluid: 1,
    			getWebComponent: 3
    		});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "BmContainer",
    			options,
    			id: create_fragment$1.name
    		});
    	}

    	get breakpoint() {
    		throw new Error("<BmContainer>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set breakpoint(value) {
    		throw new Error("<BmContainer>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get isFluid() {
    		throw new Error("<BmContainer>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set isFluid(value) {
    		throw new Error("<BmContainer>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get getWebComponent() {
    		return this.$$.ctx[3];
    	}

    	set getWebComponent(value) {
    		throw new Error("<BmContainer>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* Users/gomah/Projects/Open Source/Bulmil/bulmil/packages/svelte/src/svelte/BmSection.svelte generated by Svelte v3.24.1 */
    const file$2 = "Users/gomah/Projects/Open Source/Bulmil/bulmil/packages/svelte/src/svelte/BmSection.svelte";

    function create_fragment$2(ctx) {
    	let bm_section;
    	let current;
    	const default_slot_template = /*$$slots*/ ctx[4].default;
    	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[3], null);

    	const block = {
    		c: function create() {
    			bm_section = element("bm-section");
    			if (default_slot) default_slot.c();
    			set_custom_element_data(bm_section, "size", /*size*/ ctx[0]);
    			add_location(bm_section, file$2, 27, 0, 427);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, bm_section, anchor);

    			if (default_slot) {
    				default_slot.m(bm_section, null);
    			}

    			/*bm_section_binding*/ ctx[5](bm_section);
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			if (default_slot) {
    				if (default_slot.p && dirty & /*$$scope*/ 8) {
    					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[3], dirty, null, null);
    				}
    			}

    			if (!current || dirty & /*size*/ 1) {
    				set_custom_element_data(bm_section, "size", /*size*/ ctx[0]);
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(default_slot, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(default_slot, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(bm_section);
    			if (default_slot) default_slot.d(detaching);
    			/*bm_section_binding*/ ctx[5](null);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$2.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$2($$self, $$props, $$invalidate) {
    	let __ref;
    	let __mounted = false;
    	const dispatch = createEventDispatcher();
    	let { size = undefined } = $$props;
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

    	const writable_props = ["size"];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<BmSection> was created with unknown prop '${key}'`);
    	});

    	let { $$slots = {}, $$scope } = $$props;
    	validate_slots("BmSection", $$slots, ['default']);

    	function bm_section_binding($$value) {
    		binding_callbacks[$$value ? "unshift" : "push"](() => {
    			__ref = $$value;
    			$$invalidate(1, __ref);
    		});
    	}

    	$$self.$$set = $$props => {
    		if ("size" in $$props) $$invalidate(0, size = $$props.size);
    		if ("$$scope" in $$props) $$invalidate(3, $$scope = $$props.$$scope);
    	};

    	$$self.$capture_state = () => ({
    		createEventDispatcher,
    		onMount,
    		__ref,
    		__mounted,
    		dispatch,
    		size,
    		getWebComponent,
    		setProp,
    		onEvent
    	});

    	$$self.$inject_state = $$props => {
    		if ("__ref" in $$props) $$invalidate(1, __ref = $$props.__ref);
    		if ("__mounted" in $$props) __mounted = $$props.__mounted;
    		if ("size" in $$props) $$invalidate(0, size = $$props.size);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [size, __ref, getWebComponent, $$scope, $$slots, bm_section_binding];
    }

    class BmSection extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$2, create_fragment$2, safe_not_equal, { size: 0, getWebComponent: 2 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "BmSection",
    			options,
    			id: create_fragment$2.name
    		});
    	}

    	get size() {
    		throw new Error("<BmSection>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set size(value) {
    		throw new Error("<BmSection>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get getWebComponent() {
    		return this.$$.ctx[2];
    	}

    	set getWebComponent(value) {
    		throw new Error("<BmSection>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src/App.svelte generated by Svelte v3.24.1 */
    const file$3 = "src/App.svelte";

    // (22:6) <BmButton>
    function create_default_slot_2(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("Hi!");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_2.name,
    		type: "slot",
    		source: "(22:6) <BmButton>",
    		ctx
    	});

    	return block;
    }

    // (21:4) <BmContainer>
    function create_default_slot_1(ctx) {
    	let bmbutton;
    	let current;

    	bmbutton = new BmButton({
    			props: {
    				$$slots: { default: [create_default_slot_2] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(bmbutton.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(bmbutton, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const bmbutton_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				bmbutton_changes.$$scope = { dirty, ctx };
    			}

    			bmbutton.$set(bmbutton_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(bmbutton.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(bmbutton.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(bmbutton, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_1.name,
    		type: "slot",
    		source: "(21:4) <BmContainer>",
    		ctx
    	});

    	return block;
    }

    // (20:2) <BmSection>
    function create_default_slot(ctx) {
    	let bmcontainer;
    	let current;

    	bmcontainer = new BmContainer({
    			props: {
    				$$slots: { default: [create_default_slot_1] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(bmcontainer.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(bmcontainer, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const bmcontainer_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				bmcontainer_changes.$$scope = { dirty, ctx };
    			}

    			bmcontainer.$set(bmcontainer_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(bmcontainer.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(bmcontainer.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(bmcontainer, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot.name,
    		type: "slot",
    		source: "(20:2) <BmSection>",
    		ctx
    	});

    	return block;
    }

    function create_fragment$3(ctx) {
    	let div;
    	let bmsection;
    	let current;

    	bmsection = new BmSection({
    			props: {
    				$$slots: { default: [create_default_slot] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			div = element("div");
    			create_component(bmsection.$$.fragment);
    			add_location(div, file$3, 18, 0, 299);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    			mount_component(bmsection, div, null);
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			const bmsection_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				bmsection_changes.$$scope = { dirty, ctx };
    			}

    			bmsection.$set(bmsection_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(bmsection.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(bmsection.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    			destroy_component(bmsection);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$3.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$3($$self, $$props, $$invalidate) {
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<App> was created with unknown prop '${key}'`);
    	});

    	let { $$slots = {}, $$scope } = $$props;
    	validate_slots("App", $$slots, []);
    	$$self.$capture_state = () => ({ BmSection, BmContainer, BmButton });
    	return [];
    }

    class App extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$3, create_fragment$3, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "App",
    			options,
    			id: create_fragment$3.name
    		});
    	}
    }

    const app = new App({
        target: document.body,
    });

    return app;

}());
//# sourceMappingURL=bundle.js.map
