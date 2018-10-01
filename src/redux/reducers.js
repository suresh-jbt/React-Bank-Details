import {
  BANK_SET,
  CITY_SET,
  LOADER_SET
} from './actions';

export const bank = (state = null, action) => {
    switch (action.type) {
        case BANK_SET:
            return action.data;

        default:
            return state;
    }
};

export const city = (state = null, action) => {
  switch (action.type) {
    case CITY_SET:
      return action.data;

    default:
      return state;
  }
};

export const loader = (state = false, action) => {
  switch (action.type) {
    case LOADER_SET:
      return action.data;

    default:
      return state;
  }
};
