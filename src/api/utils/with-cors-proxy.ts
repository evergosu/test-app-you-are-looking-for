export default function withCorsProxy(url: string) {
  return `https://cors-anywhere.herokuapp.com/${url}`;
}
