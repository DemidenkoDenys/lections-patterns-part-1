import DelimiterMaskSearcher from './delimiter-mask-searcher';

import {
  toSymbolsArray,
  delimiterSymbolsToMap,
  removeRepeatInRawSymbols,
  getMostSuitableDelimiter,
  removeNotDelimiterSymbols,
  sortUniqueDelimiterSymbols,
} from './operators';


const seacher = new DelimiterMaskSearcher();

seacher.setChain(
  toSymbolsArray,
  removeRepeatInRawSymbols,
  removeNotDelimiterSymbols,
  toSymbolsArray,
  sortUniqueDelimiterSymbols,
  delimiterSymbolsToMap,
  getMostSuitableDelimiter,
);

const delimiter = seacher.find('___mm,,,,,,,-dd---- yyyy-___');

console.log(delimiter);
