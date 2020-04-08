/**
 * file: HomePage.ts
 * Author: Fernanda Ferreira
 * Date: 07/04/2020
 */

import Page from './Page';

class HomePage extends Page {
  /**
  * define elements
  */
  get helloSignInNameMenu() { return $('a#nav-link-accountList > span.nav-line-1'); }
  get logoLink() { return $('a[aria-label="Amazon.com.br"]'); }
  get hamburguerButton() { return $('a#nav-hamburger-menu > i'); }
  get searchInput() { return $('input#twotabsearchtextbox'); }
  get goButton() { return $('form[name="site-search"] div.nav-right > div > input'); }
  get nameFirstLink() { return $('div[data-asin="B07XS3ZX16"] > div span[class="a-size-medium a-color-base a-text-normal"]'); }
  get priceFirstLabel() { return $('div[class*="s-result-list"]:nth-child(1) > div:nth-child(1) span[class="a-price-whole"]'); }
  get signoutButton() { return $('a#nav-item-signout > span'); }
  /**
   * define or overwrite page methods
   */
  open() {
    browser.url('/');
  }

  signInNameValue() {
    this.helloSignInNameMenu.waitForDisplayed();
    let nameValue = this.helloSignInNameMenu.getText();
    return nameValue;
  }

  isSignInNameVisible() {
    browser.pause(1500);
    let result = this.helloSignInNameMenu.isDisplayed();
    return result;
  }

  signInClick() {
    this.helloSignInNameMenu.waitForDisplayed();
    this.helloSignInNameMenu.click();
  }

  logoffClick() {
    this.helloSignInNameMenu.waitForDisplayed();
    this.helloSignInNameMenu.moveTo();
    this.signoutButton.waitForDisplayed(10000);
    this.signoutButton.click();
  }

  searchText(item) {
    this.searchInput.waitForDisplayed();
    this.searchInput.setValue(item);
  }

  goClick() {
    this.goButton.click();
  }

  nameFirstResults() {
    this.nameFirstLink.waitForDisplayed();
    let resultNameFirst = this.nameFirstLink.getText();
    return resultNameFirst;
  }

  priceFirstResults() {
    this.priceFirstLabel.waitForDisplayed();
    let resultPriceFirst = this.priceFirstLabel.getText();
    return resultPriceFirst;
  }

  nameFirstClick() {
    this.nameFirstLink.waitForDisplayed();
    this.nameFirstLink.click();
  }
}

export default new HomePage();