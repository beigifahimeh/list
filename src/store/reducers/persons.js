import Data from "../../data.json";

const initialState = {
  data: Data
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // case actionType.INIT_DATA:
    //   return { ...state, data: Data };
    default:
      return state;
  }
};
export default reducer;
