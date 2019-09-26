import withCorsProxy from './utils/with-cors-proxy';

type RawWeather = {
  the_temp: number;
  predictability: number;
  applicable_date: string;
  weather_state_abbr: string;
};

type Weather = [string, number, string];

export default async function fetchTodayWeather(
  locationId: number,
): Promise<Weather> {
  const url = 'https://www.metaweather.com/api/location/';

  const today = new Date(Date.now());

  const year = today.getFullYear();

  // Cuz 0 to 11.
  const month = today.getMonth() + 1;

  const day = today.getDate();

  const response = await fetch(
    withCorsProxy(`${url}${locationId}/${year}/${month}/${day}`),
  );

  const rawWeather: RawWeather[] = await response.json();

  const {
    the_temp: temp,
    applicable_date: date,
    weather_state_abbr: weather,
  } = rawWeather.reduce((acc, cur) => {
    if (acc.predictability > cur.predictability) {
      return acc;
    }

    return cur;
  }, rawWeather[0]);

  return [weather, Math.round(temp), new Date(date).toLocaleDateString()];
}
