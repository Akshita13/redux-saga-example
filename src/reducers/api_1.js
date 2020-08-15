const initialState = {
  data: null,
  dataFetched: false,
  isFetching: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "FETCHING_API_1":
      return {
        ...state,
        data: null,
        isFetching: true
      };
    case "FETCHING_API_1_SUCCESS":
      return {
        ...state,
        isFetching: false,
        data: action.data
      };
    case "FETCHING_API_1_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: action.error
      };
    default:
      return state;
  }
};
