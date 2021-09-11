const initialState = {
  data: [],
  recentLocations: [],
  timeZone: [],
};

const List = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_DATA":
      // if(state.recentLocations.includes(action.AddData))
      if (state.recentLocations.length === 4) {
        state.recentLocations.shift();
      }
      return {
        data: [action.AddData],
        recentLocations: [...state.recentLocations, action.AddData],
        timeZone: [action.newTimeZone],
      };

    default:
      break;
  }
  return state;
};

export default List;
