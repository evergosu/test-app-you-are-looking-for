import { useState, useEffect } from 'react';

import fetchWeekWeather, { Weather } from '../api/fetch-week-weather';

type LocationWeather = [boolean, boolean, Weather[]?];

export default function useWeekWeather(locationId: number): LocationWeather {
  const [weather, setWeather] = useState<Weather[]>();

  const [hasError, setHasError] = useState(false);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const w = await fetchWeekWeather(locationId);

        setWeather(w);
      } catch (error) {
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [locationId]);

  return [isLoading, hasError, weather];
}
