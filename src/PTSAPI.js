export default function getImages(page) {
  let imageId = [`${(page - 1) * 50 + 1}`, `${page * 50}`];
  return images;
}
const images = [
  {
    id: 1,
    src: "/img/3b17420363b353fceb70f37633ccbc0edb06e5da.jpg",
  },
  {
    id: 2,
    src: "/img/75309657_p0.png",
  },
  {
    id: 3,
    src: "/img/78449746_p0.jpg",
  },
];
