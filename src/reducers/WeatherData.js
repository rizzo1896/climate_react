const initialState = {
  data: [],
};

const List = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_DATA":
      return {
        data: [action.AddData],
      };

    default:
      break;
  }
  return state;
};

export default List;
