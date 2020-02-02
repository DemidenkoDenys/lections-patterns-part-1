import readonly from './decorator';

class API {

  @readonly
  config() {
    return 'http://localhost:3001';
  }

}

const api = new API();

console.log(api.config());      // http://localhost:3001

try {
  api.config = () => 'hack';    // changing fail
} catch(error) {
  console.warn(error);          // error message here
}

console.log(api.config());      // still - http://localhost:3001