import withCorsProxy from './utils/with-cors-proxy';

type ConsolidatedWeather = {
  min_temp: number;
  max_temp: number;
  applicable_date: string;
  weather_state_abbr: string;
};

type RawWeather = {
  consolidated_weather: ConsolidatedWeather[];
};

export type Weather = {
  minTemp: number;
  maxTemp: number;
  weatherState: string;
  date: string;
};

export default async function fetchWeekWeather(
  locationId: number,
): Promise<Weather[]> {
  const url = 'https://www.metaweather.com/api/location/';

  const response = await fetch(withCorsProxy(`${url}${locationId}`));

  const { consolidated_weather: data }: RawWeather = await response.json();

  return data.map(
    ({
      min_temp: minTemp,
      max_temp: maxTemp,
      applicable_date: date,
      weather_state_abbr: weatherState,
    }) => ({
      minTemp: Math.round(minTemp),
      maxTemp: Math.round(maxTemp),
      weatherState,
      date,
    }),
  );
}
