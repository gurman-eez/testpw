import { BasePage } from "./BasePage";

export default class ChartPage extends BasePage {
	readonly identifier = this.page.getByTestId("chart-layout-parent");

	readonly firstMovie = this.identifier.getByRole("link", { name: /^1\. / });

	protected getOpenLocator() {
		return this.identifier;
	}

	async clickFirstMovie(): Promise<void> {
		await this.firstMovie.click();
	}
}
