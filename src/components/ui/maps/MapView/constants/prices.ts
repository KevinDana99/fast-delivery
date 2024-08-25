const COST_OF_CONSUMIBLE = 36.764;
const CONSUMMER_PER_KM = 12.5;
const PRICE_PER_KM = 270;

const price = {
  short: 2000,
  medium: 2500,
  long: 2800,
  veryLong: 3500,
  extra: (distance: number) => {
    return Math.round(PRICE_PER_KM * distance);
  },
};

const route = {
  short: 3,
  medium: 7,
  long: 9,
  veryLong: 15,
};

export const getRoutePrice = (distance: number) => {
  if (distance <= route.short) {
    return price.short;
  } else if (distance >= route.short && distance <= route.medium) {
    return price.medium;
  } else if (distance >= route.medium && distance <= route.long) {
    return price.long;
  } else if (distance >= route.long && distance <= route.veryLong) {
    return price.veryLong;
  } else {
    return price.extra(distance);
  }
};
