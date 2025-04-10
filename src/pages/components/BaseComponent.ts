import type { Locator } from "fixtures";

export abstract class BaseComponent {
	constructor(readonly root: Locator) {}
}
