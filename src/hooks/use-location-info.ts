import { useState, useEffect } from 'react';

import fetchLocationInfo from '../api/fetch-location-info';

type LocationInfo = [boolean, boolean, string?, number?];

export default function useLocationInfo(location: string): LocationInfo {
  const [id, setId] = useState<number>();

  const [name, setName] = useState<string>();

  const [hasError, setHasError] = useState(false);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const [{ title, woeid }] = await fetchLocationInfo(location);

        setId(woeid);

        setName(title);
      } catch (error) {
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [location]);

  return [isLoading, hasError, name, id];
}
