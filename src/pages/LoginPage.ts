/**
 * File: LoginPage.ts
 * Author: Fernanda Ferreira
 * Date: 07/04/2020
 */

import Page from './Page';

class LoginPage extends Page {
    /**
    * define elements
    */
    get emailImput() { return $('input#ap_email'); }
    get continueButton() { return $('input#continue'); }
    get passwordImput() { return $('input#ap_password'); }
    get signInSubmit() { return $('input#signInSubmit'); }
    get keepSignedBox() { return $('form[name="signIn"] label > span'); }
    get validationMessage() { return $('div#auth-error-message-box h4'); }
    get errorMessage() { return $('div#auth-error-message-box span'); }
    /**
     * define or overwrite page methods
     */
    open() {
        browser.url('/ap/signin');
    }

    emailText(email) {
        this.emailImput.waitForDisplayed();
        this.emailImput.setValue(email);
    }

    continueClick() {
        this.continueButton.waitForDisplayed();
        this.continueButton.click();
    }

    passwordText(password) {
        this.passwordImput.waitForDisplayed();
        this.passwordImput.setValue(password);
    }

    keepSignedBoxClick() {
        this.keepSignedBox.waitForDisplayed();
        this.keepSignedBox.click();
    }

    signInSubmitClick() {
        this.signInSubmit.waitForDisplayed();
        this.signInSubmit.click();
    }

    validationMessageValue() {
        this.validationMessage.waitForDisplayed();
        let validateMsg = this.validationMessage.getText();
        return validateMsg;
    }

    isValidationMessageVisible() {
        browser.pause(1500);
        let result = this.validationMessage.isDisplayed();
        return result;
    }

    errorMessageValue() {
        this.errorMessage.waitForDisplayed();
        let errorMsg = this.errorMessage.getText();
        return errorMsg;
    }
}

export default new LoginPage();