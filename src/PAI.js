export default function APIGet(url) {

  return (fetch(url)
    .then((response) => response.json()));
}
