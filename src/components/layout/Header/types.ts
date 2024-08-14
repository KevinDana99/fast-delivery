import { LocationType } from "@/app/welcome/types";

export type HeaderType = {
  infoLocation: LocationType[];
  setInfoLocation: React.Dispatch<React.SetStateAction<LocationType[]>>;
};
