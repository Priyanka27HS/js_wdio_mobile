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

    it('Find multiple elements', async() => {

        const expectedList = [
            'API Demos', "Access'ibility",
            'Accessibility', 'Animation',
            'App', 'Content',
            'Graphics', 'Media',
            'NFC', 'OS',
            'Preference', 'Text',
            'Views'
        ]
        const actualList = []

        // find multiple elements
        const textList = await $$('android.widget.TextView');

        // loop through them
        for(const element of textList) {
            actualList.push(await element.getText());
        }

        // assert the list
        await expect(actualList).toEqual(expectedList);
    })

    it.only('Working with text field', async() => {

        // access the auto complete screen
        (await $('~Views')).click();

        // click on auto complete
        await $('//*[@text="Auto Complete"]').click();

        // select the screen top
        await $('//*[@content-desc="1. Screen Top"]').click();

        // enter the country name
        const textField = await $('//*[@resource-id="io.appium.android.apis:id/edit"]');
        await textField.addValue('Canada');

        // verify the country name
        await expect(textField).toHaveText('Canada');
    })
});