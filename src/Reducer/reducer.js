// const initialState = { id: "test" };
// export default function reducer(state = initialState, action) {
//   switch (action.type) {
//     case "test":
//       return { ...state };
//     default:
//       return state;
//   }
// }

// authReducer.js
const initialState = {
  user: null,
  loading: false,
  error: null,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case "LOGIN_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case "LOGIN_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
