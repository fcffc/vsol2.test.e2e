/**
 * File: ShoppingCartPage.ts
 * Author: Fernanda Ferreira
 * Date: 07/04/2020
 */

import Page from './Page';

class ShoppingCartPage extends Page {
    /**
    * define elements
    */
    get titleLabel() { return $('div#sc-active-cart h2'); }
    get priceItemFirstLabel() { return $('form#activeCartViewForm div:nth-child(3) > div.sc-list-item-content span[class*="a-size-medium a-color-price"]'); }
    get amountFirstLabel() { return $('span#a-autoid-0-announce > span.a-dropdown-prompt'); }
    get deleteFirstSelect() { return $('a#dropdown2_0'); }
    get deleteFirstButton() { return $('form#activeCartViewForm span.a-size-small.sc-action-delete > span > input[type="submit"]'); }
    get priceItemSecondLabel() { return $('form#activeCartViewForm div:nth-child(4) > div.sc-list-item-content > div > div.a-column.a-span2.a-text-right.a-span-last > p > span'); }
    get amountSecondLabel() { return $('span#a-autoid-2-announce > span.a-dropdown-prompt'); }
    get deleteSecondSelect() { return $('a#dropdown1_0'); }
    get deleteSecoudButton() { return $('form#activeCartViewForm div:nth-child(4) > div.sc-list-item-content > div > div.a-column.a-span10 > div > div > div.a-fixed-left-grid-col.a-col-right > div.a-row.sc-action-links > span.a-size-small.sc-action-delete > span > input[type="submit"]'); }
    get subTotalLabel() { return $('span#sc-subtotal-amount-activecart > span'); }
    /**
     * define or overwrite page methods
     */
    titleValue() {
        this.titleLabel.waitForDisplayed();
        let title = this.titleLabel.getText();
        return title;
    }

    priceItemFirstValue() {
        this.priceItemFirstLabel.waitForDisplayed();
        let priceItem = this.priceItemFirstLabel.getText();
        return priceItem;
    }

    amountFirstValue() {
        this.amountFirstLabel.waitForDisplayed();
        let amount = this.amountFirstLabel.getText();
        return amount;
    }

    amountFirstClick() {
        this.amountFirstLabel.waitForDisplayed();
        this.amountFirstLabel.click();
    }

    deleteFirstClick() {
        this.deleteFirstButton.waitForDisplayed();
        this.deleteFirstButton.click();
    }

    deleteFirstSelectClick() {
        this.deleteFirstSelect.waitForDisplayed();
        this.deleteFirstSelect.click();
    }

    priceItemSecondValue() {
        this.priceItemSecondLabel.waitForDisplayed();
        let priceItem = this.priceItemSecondLabel.getText();
        return priceItem;
    }

    amountSecondValue() {
        this.amountSecondLabel.waitForDisplayed();
        let amount = this.amountSecondLabel.getText();
        return amount;
    }

    amountSecondClick() {
        this.amountSecondLabel.waitForDisplayed();
        this.amountSecondLabel.click();
    }

    deleteSecoudClick() {
        this.deleteSecoudButton.waitForDisplayed();
        this.deleteSecoudButton.click();
        browser.pause(1500);
    }

    deleteSecoudSelectClick() {
        this.deleteSecondSelect.waitForDisplayed();
        this.deleteSecondSelect.click();
        browser.pause(1000);
    }

    subTotalValue() {
        this.subTotalLabel.waitForDisplayed();
        let subTotal = this.subTotalLabel.getText();
        return subTotal;
    }
}

export default new ShoppingCartPage();