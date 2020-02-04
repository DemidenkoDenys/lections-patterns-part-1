import countryFacade from './country.facade';

const getCountries = async () => {
  const countries = await countryFacade.getAllCountries();
  console.log(countries);
};

const getCountry = async () => {
  const country = await countryFacade.getCountryByName('united');
  console.log(country);
}

getCountry();