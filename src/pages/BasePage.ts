import { Page, Locator } from "fixtures";
import Header from "./components/Header";

export abstract class BasePage {
	constructor(readonly page: Page) {}
	// hard to use location methods
	public header = new Header(this.page.locator("#imdbHeader"));

	protected abstract getOpenLocator(): Locator;

	async waitForOpen(): Promise<void> {
		await this.getOpenLocator().waitFor({ state: "visible" });
	}

	async open(path: string): Promise<void> {
		await this.page.goto(path);
	}
}
