/**
 * File: ItemAddedPage.ts
 * Author: Fernanda Ferreira
 * Date: 07/04/2020
 */

import Page from './Page';

class ItemAddedPage extends Page {
    /**
    * define elements
    */
    get itemSelectButton() { return $('div[class="a-box-inner"]>div[class="huc-v2-table-col"]'); }
    get itemTitleLink() { return $('div#mdp-title span'); }
    get amountItemLabel() { return $('div#hlb-subcart span > span:nth-child(1)'); }
    get totalPriceLabel() { return $('div#hlb-subcart span.a-color-price.hlb-price.a-inline-block.a-text-bold'); }
    get cartButton() { return $('a#hlb-view-cart-announce'); }
    get finishOrderButton() { return $('a#hlb-ptc-btn-native'); }
    /**
     * define or overwrite page methods
     */
    itemSelectClick() {
        this.itemSelectButton.waitForDisplayed();
        this.itemSelectButton.click();
        this.itemTitleLink.waitForDisplayed();
        this.itemTitleLink.click();
    }

    amountItemValue() {
        this.amountItemLabel.waitForDisplayed();
        let amountItem = this.amountItemLabel.getText();
        return amountItem;
    }

    totalPriceValue() {
        this.totalPriceLabel.waitForDisplayed();
        let totalPrice = this.totalPriceLabel.getText();
        return totalPrice;
    }

    cartClick() {
        this.cartButton.waitForDisplayed();
        this.cartButton.click();
    }

    finishOrderClick() {
        this.finishOrderButton.waitForDisplayed();
        this.finishOrderButton.click();
    }
}

export default new ItemAddedPage();