import { test, expect } from "fixtures";

const SEARCH_KEYWORD = "Inception";

test.describe("Search and Validate Movie @smoke", (): void => {
	test('should search for "Inception" and validate the details page', async ({
		homePage,
		movieDetailsPage,
	}): Promise<void> => {
		await homePage.open();
		await homePage.searchMovie(SEARCH_KEYWORD);

		await movieDetailsPage.waitForOpen();
		await expect(movieDetailsPage.title).toHaveText(SEARCH_KEYWORD);
	});
});
