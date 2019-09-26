import { useState, useEffect } from 'react';

import fetchTodayWeather from '../api/fetch-today-weather';

type LocationWeather = [boolean, boolean, string?, number?, string?];

export default function useTodayWeather(locationId: number): LocationWeather {
  const [date, setDate] = useState<string>();

  const [temperature, setTemperature] = useState<number>();

  const [weatherState, setWeatherState] = useState<string>();

  const [hasError, setHasError] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);

      try {
        const [w, t, d] = await fetchTodayWeather(locationId);

        setDate(d);

        setTemperature(t);

        setWeatherState(w);
      } catch (error) {
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [locationId]);

  return [isLoading, hasError, weatherState, temperature, date];
}
