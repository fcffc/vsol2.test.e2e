/**
 * File: conversions.ts
 * Author: Fernanda Ferreira
 * Date: 07/04/2020
 */

class Conversions {

    public convertStringToFloat(value) {
        let number = value.slice(2, 11);
        number = number.replace(".", "");
        number = number.replace(",", ".");
        number = parseFloat(number);
        number = number.toFixed(2);
        return number;
    }

    public convertCoin(value) {
        let vlr = parseFloat(value);
        let number = vlr.toFixed(2).split('.');
        number[0] = "R$" + number[0].split(/(?=(?:...)*$)/).join('.');
        let vlrConnvert = number.join(',');
        return vlrConnvert
    }

}
const conversions = new Conversions();
export default conversions;