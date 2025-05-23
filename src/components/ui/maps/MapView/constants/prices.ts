const COST_OF_CONSUMIBLE = 36.764;
const CONSUMMER_PER_KM = 12.5;
const PRICE_PER_KM = 200;

const price = {
  short: 3000,
  medium: 3500,
  long: 3800,
  veryLong: 4000,
  extra: (distance: number) => {
    return price.short + Math.round(PRICE_PER_KM * distance);
  },
};

const route = {
  short: 3,
  medium: 6,
  long: 8,
  veryLong: 11,
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
