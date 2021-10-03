import { Action, IndexActionType } from "../actions";

const inistialState = 0;

const bankReducer = (state: number = inistialState, action: Action) => {
  switch (action.type) {
    case IndexActionType.DEPOSIT:
      return state + action.payload;
    case IndexActionType.WITHDRAW:
      return state - action.payload;
    case IndexActionType.BANKRUPT:
      return 0;
    default:
      return state;
  }
};

export default bankReducer;
