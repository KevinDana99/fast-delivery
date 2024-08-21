import { useEffect, useState } from "react";
const STATIC_LOCATION = [-42.788721, -65.062253];
const useLocation = () => {
  const [location, setLocation] = useState<number[]>([0, 0]);

  const getLocation = () => {
    /*
    try {
      navigator?.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;

        setLocation([lat, lng]);
      });
    } catch (err) {
      console.error(err);
    }
    */

    setLocation(STATIC_LOCATION);
  };

  useEffect(() => {
    getLocation();
  }, []);
  return location;
};

export default useLocation;
