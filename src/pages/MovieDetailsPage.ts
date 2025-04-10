import { BasePage } from "./BasePage";

export default class MovieDetailsPage extends BasePage {
	readonly identifier = this.page.getByTestId("hero-parent");
	readonly title = this.identifier.getByTestId("hero__pageTitle");
	readonly rating = this.identifier
		.getByTestId("hero-rating-bar__aggregate-rating")
		.first();
	// hard to use location methods
	readonly releaseYear = this.identifier.locator('a[href$="rdat"]').first();

	protected getOpenLocator() {
		return this.identifier;
	}
}
