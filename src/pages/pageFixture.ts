import HomePage from "./HomePage";
import MovieDetailsPage from "./MovieDetailsPage";
import ChartPage from "./ChartPage";
import { test as base } from "@playwright/test";

type PageObjects = {
	homePage: HomePage;
	movieDetailsPage: MovieDetailsPage;
	chartPage: ChartPage;
};

export const test = base.extend<PageObjects>({
	homePage: async ({ page }, use) => {
		const homePage = new HomePage(page);
		await use(homePage);
	},
	movieDetailsPage: async ({ page }, use) => {
		const movieDetailsPage = new MovieDetailsPage(page);
		await use(movieDetailsPage);
	},
	chartPage: async ({ page }, use) => {
		const chartPage = new ChartPage(page);
		await use(chartPage);
	},
});

export { expect, Page, Locator } from "@playwright/test";
