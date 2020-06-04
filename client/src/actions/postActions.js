import postsReducer from "../reducers/postsReducer";

export const GET_SINGLE_POST = "GET_SINGLE_POST";
export const GET_SINGLE_POST_SUCCESS = "GET_SINGLE_POST_SUCCESS";
export const GET_SINGLE_POST_FAILURE = "GET_SINGLE_POST_FAILURE";

export const getSinglePost = () => ({ type: GET_SINGLE_POST });

export const getSinglePostSuccess = (post) => ({
  type: GET_SINGLE_POST_SUCCESS,
  payload: post,
});

export const getSinglePostFailure = () => ({ type: GET_SINGLE_POST_FAILURE });

export function fetchSinglePost(id) {
  return async (dispatch) => {
    dispatch(getSinglePost());

    try {
      const response = await fetch(`http://localhost:5000/posts/${id}`);
      const data = await response.json();
      //console.log("post from api:", data);

      dispatch(getSinglePostSuccess(data));
    } catch (error) {
      dispatch(getSinglePostFailure());
    }
  };
}
