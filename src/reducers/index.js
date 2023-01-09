import { actions } from "../actions";

const reducer = (state, action) => {
  switch (action.type) {
    case actions.setFavorite:
      if (state.mylist.some((item) => item.id === action.payload.id)) {
        return {
          ...state,
        };
      }
      return {
        ...state,
        mylist: [...state.mylist, action.payload],
      };

    case actions.deleteFavorite:
      return {
        ...state,
        mylist: state.mylist.filter((items) => items.id !== action.payload),
      };

    case actions.loginRequest:
      return {
        ...state,
        user: action.payload,
      };
    
    case actions.logoutRequest:
      return {
        ...state,
        user: action.payload,
      };

    case actions.registerRequest:
      return {
        ...state,
        user: action.payload,
      };

    case actions.getVideoSource:
      return {
        ...state,
        playing:
          state.trends.find((item) => item.id === Number(action.payload)) ||
          state.originals.find((item) => item.id === Number(action.payload)) ||
          [],
      };
    
    case actions.searchRequest:
      const fullList = [...state.trends, ...state.originals];
      if (action.payload === '' || action.payload === ' ') return { ...state, search: [] };
      return {
        ...state,
        search: fullList.filter((item) => 
        item.title.toLowerCase().includes(action.payload.toLowerCase())) 
        || [],

      };

    default:
      return state;
  }
};

export default reducer;
