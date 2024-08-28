import { LocationType } from "@/app/types";

export type HeaderType = {
  infoLocation: LocationType[];
  setInfoLocation: React.Dispatch<React.SetStateAction<LocationType[]>>;
};
