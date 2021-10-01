const initialLocation = {
  location: {
    locate: 0,
    pri: "",
  },
};

export default function locationReducer(location = initialLocation, action) {
  switch (action.type) {
    case "toHome": {
      if (location.locate !== 0) {
        return {
          ...location,
          locate: 0,
          pri: "",
        };
      } else {
        return location;
      }
    }
    case "toTestPic":
      return {
        ...location,
        locate: 0,
        pri: `${action.payload.pri}`,
      };
    default: {
      return location;
    }
  }
}
