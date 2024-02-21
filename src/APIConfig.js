const BASE_URL = 'https://restcountries.com/v3.1/';
export const ALL_COUNTRIES = BASE_URL + 'all?fields=name,capital,flags,population,region,cca3';
export const searchByCode = (code) => BASE_URL + 'alpha/' + code;
export const searchNameByCode = (code) => BASE_URL + 'alpha/' + code + '?fields=name';

export  const filterByCode = (codes) => BASE_URL + 'alpha?codes=' + codes.join(',')
