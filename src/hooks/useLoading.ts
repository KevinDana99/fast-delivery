import React, { useEffect, useState } from "react";

const useLoading = (delay?: boolean) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (delay) {
      const timer = setTimeout(() => setLoading(false), 1000);

      return () => clearTimeout(timer);
    } else {
      setLoading(false);
    }
  }, []);
  return { loading };
};

export default useLoading;
