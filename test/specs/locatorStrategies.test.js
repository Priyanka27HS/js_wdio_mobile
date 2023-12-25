describe("Android Locator Strategies with waitForDisplayed", () => {
    it("should identify elements using waitForDisplayed", async () => {
        // Accessibility ID locator strategy
        const burgerIcon = await $("~open menu").waitForDisplayed();
        console.log(`Burger icon - ${burgerIcon}`);

        // Class name locator strategy
        const imageElement = await $("android.widget.ImageView").waitForDisplayed();
        console.log(`Image element - ${imageElement}`);

        // Xpath locator strategy
        const burgerIconWithXpath = await $(
            `//android.view.ViewGroup[@content-desc="open menu"]/android.widget.ImageView`
        ).waitForDisplayed();
        console.log(`Burger icon with xpath - ${burgerIconWithXpath}`);

        // UiAutomator locator strategy
        const productsTitle = await $(
            'android=new UiSelector().text("Products").className("android.widget.TextView")'
        ).waitForDisplayed();
        console.log(`Products title element - ${productsTitle}`);
    });
});