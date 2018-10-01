export const BANK_SET = 'bank/SET';
export const CITY_SET = 'city/SET';
export const LOADER_SET = 'loader/SET';

export const bankSet = data => ({
    type: BANK_SET,
    data
});

export const citySet = data => ({
  type: CITY_SET,
  data
});

export const loaderSet = data => ({
  type: LOADER_SET,
  data
});
