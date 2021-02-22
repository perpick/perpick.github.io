import './CloseButton.svelte.css';
/* src/components/Commons/Modal/CloseButton.svelte generated by Svelte v3.32.3 */
import {
	SvelteComponent,
	attr,
	detach,
	element,
	init,
	insert,
	is_function,
	listen,
	noop,
	safe_not_equal
} from "../../../../_snowpack/pkg/svelte/internal.js";

function create_fragment(ctx) {
	let button;
	let mounted;
	let dispose;

	return {
		c() {
			button = element("button");
			button.textContent = "Custom Close Button";
			attr(button, "class", "svelte-1hp57tn");
		},
		m(target, anchor) {
			insert(target, button, anchor);

			if (!mounted) {
				dispose = listen(button, "click", function () {
					if (is_function(/*onClose*/ ctx[0])) /*onClose*/ ctx[0].apply(this, arguments);
				});

				mounted = true;
			}
		},
		p(new_ctx, [dirty]) {
			ctx = new_ctx;
		},
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(button);
			mounted = false;
			dispose();
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { onClose } = $$props;

	$$self.$$set = $$props => {
		if ("onClose" in $$props) $$invalidate(0, onClose = $$props.onClose);
	};

	return [onClose];
}

class CloseButton extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { onClose: 0 });
	}
}

export default CloseButton;