
//Define action types as constants to avoid unnecessary bugs. type names are descriptive
export const GET_POSTS = 'GET_POSTS'
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS'
export const GET_POSTS_FAILURE = 'GET_POSTS_FAILURE'

// Create Redux action creators that return an action, 
// actions are pojos that must have a type and optional payload
export const getPosts = () => (     // -->> action creator, returns action, wrapped in parenthesis coz it 
  {                                 //          returns object, this differentiates it from a functions execution block
    type: GET_POSTS,                // -->> returned Action 
  }                                 //
)

export const getPostsSuccess = posts => ({
  type: GET_POSTS_SUCCESS,
  payload: posts,
})

export const getPostsFailure = () => ({
  type: GET_POSTS_FAILURE,
})

// Combine them all in an asynchronous thunk
export function fetchPosts() {
  return async dispatch => {

    dispatch(getPosts())          // -->> Dispatches the action

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      const data = await response.json()

      dispatch(getPostsSuccess(data))
    } catch (error) {
      dispatch(getPostsFailure())
    }
  }
}