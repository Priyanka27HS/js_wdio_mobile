const LoginPage = require('../pageobjects/loginPage');

describe("Login to the application", () => {
    it("should perform click and input operations successfully", async () => {
        // await LoginPage.login("James Kenny");

        await LoginPage.login("bob@example.com", "10203040")

        await driver.pause(5000);

        // Additional actions or assertions can be added here
    });
});