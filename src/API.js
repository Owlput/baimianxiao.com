const apiUrl = "http://localhost:7000";
export default async function APIGet(target) {
  switch (target.type) {
    case "getThumbs": {
      return await (
        await fetch(`${apiUrl}/data/thumbData/imageAllThumbs`)
      ).json();
    }
    case "getArtworkData": {
      return await (
        await fetch(`${apiUrl}/data/imageData/${target.payload.uri}`)
      ).json();
    }
    case "getAuthorData": {
      return await (
        await fetch(`${apiUrl}/data/authorData/author_${target.payload.aId}`)
      ).json();
    }
    default: {
      throw new Error("Invalid request type!");
    }
  }
}
