const initialState = {
  location: {
    locate: 0,
    pri: "",
  },
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "toHome": {
      if (state.location.locate !== 0) {
        return {
          ...state,
          location: {
            locate: 0,
            pri: "",
          },
        };
      } else {
        return state;
      }
    }
    case "toTestPic":
      return {
        ...state,
        location: {
          locate: 0,
          pri: `${action.payload}`,
        },
      };
    default: {
      return state;
    }
  }
}
