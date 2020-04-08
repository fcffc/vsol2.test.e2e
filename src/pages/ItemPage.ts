/**
 * File: ItemPage.ts
 * Author: Fernanda Ferreira
 * Date: 07/04/2020
 */

import Page from './Page';

class ItemPage extends Page {
    /**
    * define elements
    */
    get returnResultLink() { return $('a#breadcrumb-back-link'); }
    get productTitleLabel() { return $('span#productTitle'); }
    get priceBoxLabel() { return $('span#price_inside_buybox'); }
    get colorFirstButton() { return $('button#a-autoid-9-announce img'); }
    get colorSecondButton() { return $('button#a-autoid-10-announce img'); }
    get colorThirdButton() { return $('button#a-autoid-11-announce img'); }
    get addToCartButton() { return $('input#add-to-cart-button'); }
    get buyNowButton() { return $('input#buy-now-button'); }
    /**
     * define or overwrite page methods
     */
    returnResultClick() {
        this.returnResultLink.waitForDisplayed();
        this.returnResultLink.click();
    }

    isReturnResult() {
        this.returnResultLink.waitForDisplayed();
        let result = this.returnResultLink.isDisplayed();
        return result;
    }

    productTitleValue() {
        this.productTitleLabel.waitForDisplayed();
        let productTitle = this.productTitleLabel.getText();
        return productTitle;
    }

    priceBoxValue() {
        this.priceBoxLabel.waitForDisplayed();
        let priceBox = this.priceBoxLabel.getText();
        return priceBox;
    }

    colorFirstClick() {
        this.colorFirstButton.waitForDisplayed();
        this.colorFirstButton.click();
    }

    colorSecondClick() {
        this.colorSecondButton.waitForDisplayed();
        this.colorSecondButton.click();
    }

    colorThirdClick() {
        this.colorThirdButton.waitForDisplayed();
        this.colorThirdButton.click();
    }

    addToCartClick() {
        this.addToCartButton.waitForDisplayed();
        this.addToCartButton.click();
    }

    buyNowClick() {
        this.buyNowButton.waitForDisplayed();
        this.buyNowButton.click();
    }
}

export default new ItemPage();