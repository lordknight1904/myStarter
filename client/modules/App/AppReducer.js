// Import Actions
import { ACTIONS } from './AppActions';

// Initial State
const initialState = {
  id: '',
  name: '',
  token: '',
  email: '',
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.LOGIN_SUCCEED:
      state.id = action.user.id;
      state.name = action.user.name;
      state.token = action.user.token;
      state.email = action.user.email;
      return {...state};

    default:
      return state;
  }
};

/* Selectors */

// Get showAddPost
export const getShowAddPost = state => state.app.showAddPost;

// Export Reducer
export default AppReducer;
