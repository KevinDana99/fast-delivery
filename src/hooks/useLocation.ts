import { useEffect, useState } from "react";

const useLocation = () => {
  const [location, setLocation] = useState<number[]>([0, 0]);

  const getLocation = () => {
    try {
      navigator?.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;

        setLocation([lat, lng]);
      });
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);
  return location;
};

export default useLocation;
