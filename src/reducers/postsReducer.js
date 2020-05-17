

// Import all actions
import * as actions from '../actions/postActions'

export const initialState = {
    posts: [],
    loading: false,
    hasErrors: false,
}


// reducer is a pure function,
    // always returns same result from same input
    // No random values
    // No current date or time
    // No global state (global states change)
    // No mutation of parameters (here we use spread operator 
    //                            to create new object with the 
    //                            updated state, 
    //                            initial state doesnt get mutated)

export default function postsReducer(state = initialState, action){
    switch (action.type) {
        case actions.GET_POSTS:
          return { ...state, loading: true }
        case actions.GET_POSTS_SUCCESS:
          return { posts: action.payload, loading: false, hasErrors: false }
        case actions.GET_POSTS_FAILURE:
          return { ...state, loading: false, hasErrors: true }
        default:
          return state
      }
}