// transform - "------*******-------"
// to        - "-*-"
export const removeRepeatInRawSymbols = arraySymbols => arraySymbols.reduce((acc, symbol) => {
  const excludeSymbols = /[a-zA-Z0-9|_]/g;
  const isRepeatedSymbol = !excludeSymbols.test(symbol) && acc.slice(-1) !== symbol;
  return isRepeatedSymbol ? acc + symbol : acc;
});


// transform - "DD/MM-YYYY*"
// to        - "/-*"
export const removeNotDelimiterSymbols = value => value.replace(/[a-zA-Z0-9|_]/g, '');


// transform - "symbol"
// to        - ['s', 'y', 'm', 'b', 'o', 'l']
export const toSymbolsArray = string => string.split('');


// transform - ['/', '-', '*']
// to        - ["*", "-", "/"]
export const sortUniqueDelimiterSymbols = arraySymbols => arraySymbols.sort((a, b) => (a < b ? -1 : 1));


// transform - ["*", "-", "-", "/"]
// to        - { "*": 1, "-": 2, "/": 1 }
export const delimiterSymbolsToMap = arraySymbols => arraySymbols.reduce((acc, symbol) => ({
    ...acc,
    [symbol]: (symbol in acc)
      ? acc[symbol] + 1
      : 1
  }),
  {}
);


// transform - { "*": 1, "-": 2, "/": 1 }
// to        - "-"
export const getMostSuitableDelimiter = map => {
  const initDelimiterResult = { symbol: '/', entries: 0 };
  const result = Object.entries(map)
    .reduce((acc, [symbol, entries]) => {
      return acc.entries < entries
        ? { symbol, entries }
        : acc;
    },
    initDelimiterResult
  );
  return result.symbol;
};