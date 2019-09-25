import withCorsProxy from './utils/with-cors-proxy';

export default async function fetchLocationInfo(location: string) {
  const url = 'https://www.metaweather.com/api/location/search/';

  const response = await fetch(withCorsProxy(`${url}?query=${location}`));

  const json = response.json();

  return json;
}
