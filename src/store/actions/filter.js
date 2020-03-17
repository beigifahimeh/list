import * as actionType from "./actions";

export const submitFilter = filter => {
  return {
    type: actionType.SUBMIT_FILTER,
    filter: filter
  };
};
