class LoginPage {
    get burgerIcon() {
        return $("~open menu");
    }

    get loginButtonFromSideMenu() {
        return $("~menu item log in");
    }

    get usernameInputField() {
        return $("~Username input field");
    }

    get passwordInputField() {
        return $("~Password input field");
    }

    get loginButton() {
        return $("~Login button")
    }

    async login(username, password) {
        await this.burgerIcon.waitForDisplayed();
        await this.burgerIcon.click();

        await this.loginButtonFromSideMenu.waitForDisplayed();
        await this.loginButtonFromSideMenu.click();

        await this.usernameInputField.waitForDisplayed();
        await this.usernameInputField.setValue(username);

        await this.passwordInputField.waitForDisplayed();
        await this.passwordInputField.click();
        await this.passwordInputField.setValue(password);

        (await this.loginButton).click();
    
    }
}

module.exports = new LoginPage();