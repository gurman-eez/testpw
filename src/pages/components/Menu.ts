import { BaseComponent } from "./BaseComponent";

export default class Menu extends BaseComponent {
	readonly top250MoviesLink = this.root.getByText("Top 250 Movies");

	async clickTop250Movies(): Promise<void> {
		await this.top250MoviesLink.click();
	}
}
