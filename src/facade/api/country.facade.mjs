import ApiFacade from './api.facade';

const BEARER_TOKEN = 'YmVhcmVyIGh0dHA6Ly9nb29nbGUuY29tLnVhLw==';
const ALL_COUTRIES_URL = 'https://restcountries.eu/rest/v2/all';
const COUNTRY_BY_NAME_URL = 'https://restcountries.eu/rest/v2/name/';

class CountryFacade {
  constructor() {
    this.apiFacade = new ApiFacade(BEARER_TOKEN);
  }

  async getAllCountries() {
    return await this.apiFacade.get(ALL_COUTRIES_URL);
  }

  async getCountryByName(name) {
    const url = `${COUNTRY_BY_NAME_URL}${name}`;
    return await this.apiFacade.get(url);
  }
}

const countryFacade = new CountryFacade();
export default countryFacade;
