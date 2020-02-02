import { wrap, arrayWrapper } from './decorator';

class Data {
  @arrayWrapper
  mapData(@wrap options) {
    return options;
  }
}



const data = new Data();

console.log(data.mapData( 'http://localhost:3000' ));   // [ 'http://localhost:3000' ]
console.log(data.mapData(['http://localhost:3000']));   // [ 'http://localhost:3000' ]
