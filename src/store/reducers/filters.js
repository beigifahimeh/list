import * as actionType from "../actions/actions";

const initialState = {
  filter: false,
  age: "all Years",
  isActive: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SUBMIT_FILTER:
      return {
        ...state,
        filter: true,
        age: action.filter.age,
        isActive: action.filter.isActivated
      };
    default:
      return state;
  }
};
export default reducer;
