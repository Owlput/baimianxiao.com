import { apiAddr } from "./assets/config";
import axios from "axios";

export default async function APIGet(target) {
  console.log("api request recieved");
  switch (target.type) {
    case "getThumbs": {
      const { data } = await axios.get(
        `${apiAddr}/baimianxiao/data/thumbData/all`
      );
      return data;
    }
    case "getArtworkData": {
      const { data } = await axios.get(
        `${apiAddr}/baimianxiao/data/workData/${target.payload.uri}`
      );
      return data;
    }
    case "getAllPermitData": {
      const { data } = await axios.get(
        `${apiAddr}/baimianxiao/data/permitData/all`
      );
      return data;
    }
    case "getPermitDataSingle": {
      const { data } = await axios.get(
        `${apiAddr}/baimianxiao/data/permitData/${target.payload.uri}`
      );
      return data;
    }
    default: {
      throw new Error("Invalid request type!");
    }
  }
}
