const initialState = {
  data1: [],
  data2: [],
};

const reducers = {
  getTest1: (state, action) => ({
    ...state,
    data1: action.data,
  }),
  getTest2: (state, action) => ({
    ...state,
    data2: action.data,
  }),
};

export default function userReducer(state = initialState, action) {
  if (reducers[action.type]) {
    return reducers[action.type](state, action);
  }
  return state;
}
