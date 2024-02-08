
describe('Android Native Feature Tests', () => {

    it('Access an Activity directly', async() => {

        // copy the current package, appActivity -> current activity and add the current package
        // access activity
        await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.app.AlertDialogSamples");

        await driver.pause(3000);

        // assert the App/Alert Dialogs text
        await expect($('//*[@text="App/Alert Dialogs"]')).toExist();
    })

    it('Working with Dialog Boxes', async() => {

        // access activity
        await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.app.AlertDialogSamples");

        await driver.pause(3000);

        // click on the first dialog box
        (await $('//*[@resource-id="io.appium.android.apis:id/two_buttons"]')).click();

        await driver.pause(3000);

        // accept Alert 
        // await driver.acceptAlert();

        // dismiss Alert 
        // await driver.dismissAlert();

        // get alert box
        console.log('ALERT TEXT -->', await driver.getAlertText());

        // click on the OK button
        (await $('//*[@resource-id="android:id/button1"]')).click();

        // assertion - alert box is no longer visible
        await expect($('//*[@resource-id="android:id/alertTitle"]')).not.toExist();
    })

    it('Vertical scrolling', async() => {

        (await $('~App')).click();
        (await $('~Activity')).click();

        await driver.pause(5000);

        // scroll to the end (not stable if element gets moved)
        // await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1, 5)');

        // scroll until you find that particular text into view
        // if the element is not on the screen, it will keep scrolling until it will find the particular element

        // scrollTextIntoView - more stable
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfaces")').click();
        
        await driver.pause(3000);

        // assertion
        await expect($('~Secure Dialog')).toExist();
    })

    it('Horizontal scrolling', async() => {

        await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.view.Gallery1");

        // Horizontal scrolling
        const scrollHorizFrwd = `android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()`;

        await $(scrollHorizFrwd);

        const scrollHorizBckwd = `android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollBackward()`;

        await $(scrollHorizBckwd);
    })

    // Test Scenario 
    // Access the date widgets, view -> date widget -> dialog 
    // Get the current date
    // Click on change the date 
    // It opens date picker, scroll horizontally to the right to Nov month 
    // Pick the 10th date from the month
    // Click on Ok button
    // Verify the date is updated

    it('Working with a date picker', async()=> {

        // access the date picker
        await driver.startActivity("io.appium.android.apis",
        "io.appium.android.apis.view.DateWidgets1");

        // Get the current date
        const dateElement = await $('//*[@resource-id="io.appium.android.apis:id/dateDisplay"]');
        const currentDate = await dateElement.getText();

        // Click on change the date button
        const changeDateButton = await $('~change the date');
        await changeDateButton.click();

        // scroll right to the next month
        const scrollHorizFrwd = `android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()`;

        await $(scrollHorizFrwd);

        // select the 10th date
        const date10 = await $('//*[@text="10"]');
        await date10.click();

        // Click on Ok button
        const okButton = await $('//*[@resource-id="android:id/button1"]');
        await okButton.click();

        await driver.pause(3000); 

        // Assert the updated date
        const updatedDate = await dateElement.getText();
        expect(updatedDate).not.toEqual(currentDate);
    })
})