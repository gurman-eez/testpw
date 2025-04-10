import { BasePage } from "./BasePage";

export default class HomePage extends BasePage {
	readonly identifier = this.page.getByRole("main");
	readonly searchInput = this.identifier.getByRole("textbox", {
		name: /search/i,
	});

	protected getOpenLocator() {
		return this.identifier;
	}

	async open(): Promise<void> {
		await super.open("/");
	}

	async searchMovie(movieTitle: string): Promise<void> {
		await this.header.search.input.fill(movieTitle);
		await this.header.search.result.click();
	}
}
