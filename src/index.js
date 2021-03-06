import { h, render } from "preact";

// import chai, { expect } from "chai";

export class Mount {
	constructor(el) {
		const scratch = document.createElement("div");
		document.body.appendChild(scratch);
		render(el, scratch, scratch.firstChild);
		this.scratch = scratch;
	}

	find(query) {
		return this.scratch.querySelectorAll(query);
	}

	fireEvent(query, type) {
		let e = document.createEvent("Event");
		e.initEvent(type, true, true);
		if (typeof query === "string") {
			const el = this.find(query)[0];
			if (!el) throw new Error(`Cannot find element: ${query}`);

			el.dispatchEvent(e);
		}
		else query.dispatchEvent(e);
	}
}
