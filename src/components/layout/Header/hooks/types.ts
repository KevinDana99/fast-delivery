export type SearchOption = {
  address: {
    road: string;
    industrial: string;
    city_district: string;
    city: string;
    state_district: string;
    house_number?: string;
    neighbourhood?: string;
    suburb?: string;
    amenity?: string;
    shop?: string;
    building?: string;
    cemetery?: string;
    park?: string;
    water?: string;
    leisure?: string;
  };
  addresstype: string;
  boundingbox: [string, string, string, string];
  class: string;
  display_name: string;
  importance: number;
  lat: string;
  licence: string;
  lon: string;
  name: string;
  osm_id: number;
  osm_type: string;
  place_id: number;
  place_rank: number;
  type: string;
};

export type SearchOptions = SearchOption[];
