import Menu from "./Menu";
import { BaseComponent } from "./BaseComponent";

export default class Header extends BaseComponent {
	readonly buttons = {
		menu: this.root.getByLabel("Open Navigation Drawer"),
	};
	readonly search = {
		input: this.root.getByTestId("suggestion-search"),
		result: this.root
			.getByTestId("search-result--const")
			.filter({ hasText: "Inception2010" }),
	};

	async openMenu(): Promise<Menu> {
		await this.buttons.menu.click();
		const menu = new Menu(
			this.root.getByTestId("panel-content").filter({ visible: true })
		);
		return menu;
	}
}
