"use strict";
// app.ts
class CurrencyConverter {
    constructor() {
        this.exchangeRates = {
            Pak: 280.50,
            Ice: 3.27
        };
    }
    convert(amount, fromCurrency, toCurrency) {
        var rateFrom = this.exchangeRates[fromCurrency] || 1;
        var rateTo = this.exchangeRates[toCurrency] || 1;
        var convertedAmount = (amount / rateFrom) * rateTo;
        return convertedAmount;
    }
}
let converter = new CurrencyConverter();
let amount = 82.08;
let fromCurrency = 'Ice';
//  let toCurrency = 'Pak';
let toCurrency = 'Pak';
let convertedAmount = converter.convert(amount, fromCurrency, toCurrency);
console.log(`${amount} ${fromCurrency} is equal to ${convertedAmount.toFixed(2)} ${toCurrency}`);
