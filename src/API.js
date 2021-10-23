import { apiAddr } from "./assets/config";
export default async function APIGet(target) {
  console.log("api request recieved")
  switch (target.type) {
    case "getThumbs": {
      return await (
        await fetch(`${apiAddr}/baimianxiao/data/thumbData/all`)
      ).json();
    }
    case "getArtworkData": {
      return await (
        await fetch(`${apiAddr}/baimianxiao/data/workData/${target.payload.uri}`)
      ).json();
    }
    case "getAllPermitData":{
      return await (
        await fetch(`${apiAddr}/baimianxiao/data/permitData/all`)
      ).json();
    }
    case "getPermitDataSingle":{
      return await (
        await fetch(`${apiAddr}/baimianxiao/data/permitData/${target.payload.uri}`)
      ).json();
    }
    default: {
      throw new Error("Invalid request type!");
    }
  }
}
