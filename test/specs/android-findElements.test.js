describe('Android Elements Tests', async () => {

    it('Find element by Accessibility ID', async () => {

        // find element by accessibility ID
        const appOption = await $('~App');

        // click on element
        await appOption.click();

        // assertion
        const actionBar = await $('~Action Bar');
        await expect(actionBar).toBeExisting();
    });

    it('Find element by Class name', async () => {

        // find element by class name
        const className = await $('android.widget.Textview');
        console.log(await className.getText());

        // assert
        await expect(className).toHaveText("API Demos");
    });

    it('Find elements by X-path', async () => {

        // xpath - (//tagname[@attribute=value])
        (await $('//android.widget.Textview[@content-desc="Alert Dialogs"]')).click();
    });

    // find by resourceId
    await $('//android.widget.Button[@resource-id="io.appium.android.apis:id/select_button"]').click();

    // find by text
    (await $('//android.widget.Textview[@text="Command Two"]')).click();

    // find by class - assertion
    const textAssertion = await $('//android.widget.Textview');
    await expect(textAssertion).toHaveText("You selected: 1, Command Two");

    it('Find multiple elements', async () =>{

        // find multiple elements
        

        // loop through them

        // assert the list

    })

});