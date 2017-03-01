
export default class CurrencySymbolForISO4217Code {
  constructor() {
    let fillMap = new Map();
    fillMap.set("USD","$");
    fillMap.set("BYN","Br");
    fillMap.set("BYR","Br(before 2016)");

    this.mapCurrencyCodeSymbol = fillMap;
  }


  getSymbol (codeISO4217) {
    console.log(codeISO4217);
    console.log(this.mapCurrencyCodeSymbol);
    console.log(this.mapCurrencyCodeSymbol.get(codeISO4217));
    let symbol = this.mapCurrencyCodeSymbol.get(codeISO4217);
    if(!symbol) {
      symbol = codeISO4217;
    }
    return symbol;
  }

}
