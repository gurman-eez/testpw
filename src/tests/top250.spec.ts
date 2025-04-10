import { test, expect } from "fixtures";

test.describe("IMDb Top 250 Movies @top", (): void => {
	test("should navigate to Top 250, click the first movie and validate details", async ({
		homePage,
		chartPage,
		movieDetailsPage,
	}): Promise<void> => {
		await homePage.open();
		const menu = await homePage.header.openMenu();
		await menu.clickTop250Movies();

		await chartPage.waitForOpen();
		await chartPage.clickFirstMovie();

		await movieDetailsPage.waitForOpen();
		await expect(movieDetailsPage.title).toBeVisible();
		await expect(movieDetailsPage.rating).toBeVisible();
		await expect(movieDetailsPage.releaseYear).toBeVisible();
	});
});
