import { assert } from 'chai';
import { binding, given, when, then } from 'cucumber-tsflow';
import homePage from '../pages/HomePage';
import loginPage from '../pages/LoginPage';

@binding()
export class LoginSteps {
    @given(/^I access Amazon Website$/)
    public async givenAccessAmazon() {
        homePage.open();
        const msg = homePage.signInNameValue()
        assert.equal(msg, 'Olá, Faça seu login');
    }

    @when(/^I click to the login button$/)
    public whenLoginButtonClick() {
        homePage.signInClick();
    }

    @when(/^I input my "([^"]*)" "([^"]*)"$/)
    public whenInputMy(email, password) {
        loginPage.emailText(email);
        loginPage.continueClick();
        loginPage.passwordText(password);
    }

    @when(/^I click to login$/)
    public whenClickToLogin() {
        loginPage.keepSignedBoxClick();
        loginPage.signInSubmitClick();
        // Digitar manualmente a senha: xxxxx
        // informar o captcha e clicar para logar
        let cond = homePage.isSignInNameVisible();
        let condValidation = loginPage.isValidationMessageVisible();
        if (cond == false && condValidation == false) {
            browser.pause(40000);
        }
    }

    @then(/^I should see the welcome message with my name$/)
    public welcomeMessageName() {
        const msg = homePage.signInNameValue();
        assert.equal(msg, 'Olá, Fernanda');
        homePage.logoffClick();
    }

    // scenario 2

    @then(/^I should see the error message$/)
    public errorMessage() {
        const msg1 = loginPage.validationMessageValue();
        const msg2 = loginPage.errorMessageValue();
        assert.equal(msg1, 'Houve um problema');
        assert.equal(msg2, 'Sua senha está incorreta');
    }
}
