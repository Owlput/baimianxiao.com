import { apiAddr } from "./assets/config";
export default async function APIGet(target) {
  switch (target.type) {
    case "getThumbs": {
      return await (
        await fetch(`${apiAddr}/baimianxiao/data/thumbData/all`)
      ).json();
    }
    case "getArtworkData": {
      return await (
        await fetch(`${apiAddr}/baimianxiao/data/imageData/${target.payload.uri}`)
      ).json();
    }
    case "getPermitData":{
      return await (
        await fetch(`${apiAddr}/baimianxiao/data/permitData/all`)
      ).json();
    }
    default: {
      throw new Error("Invalid request type!");
    }
  }
}
