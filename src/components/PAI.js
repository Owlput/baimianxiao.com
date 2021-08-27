export default function getImages (page) {
    let images;
    fetch(`http://localhost:4000/image/page/${page}`)
      .then((response) => response.json())
      .then((result) => {
        images = result;
      });
    return images;
  };