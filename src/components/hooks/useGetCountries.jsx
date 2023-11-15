import { Country } from "country-state-city";

export const useGetCountries = (countryCode) => {
    const countries = countryCode ? Country.getCountryByCode(countryCode) : Country.getAllCountries();
    return {
        countries
    }
}