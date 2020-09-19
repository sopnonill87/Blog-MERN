import categoriesReducer from "../reducers/categoriesReducer";

export const GET_CATEGORIES = "GET_CATEGORIES";
export const GET_CATEGORIES_SUCCESS = "GET_CATEGORIES_SUCCESS";
export const GET_CATEGORIES_FAILURE = "GET_CATEGORIES_FAILURE";

export const getCategories = () => ({ type: GET_CATEGORIES });

export const getCategoriesSuccess = (categories) => ({
  type: GET_CATEGORIES_SUCCESS,
  payload: categories,
});

export const getCategoriesFailure = () => ({ type: GET_CATEGORIES_FAILURE });

export function fetchCategories() {
  return async (dispatch) => {
    dispatch(getCategories());

    try {
      const response = await fetch("http://localhost:5000/categories");
      const data = await response.json();
      //console.log("categories from api:", data);

      dispatch(getCategoriesSuccess(data));
    } catch (error) {
      dispatch(getCategoriesFailure());
    }
  };
}

export const GET_CATEGORY_POSTS = "GET_CATEGORY_POSTS";
export const GET_CATEGORY_POSTS_SUCCESS = "GET_CATEGORY_POSTS_SUCCESS";
export const GET_CATEGORY_POSTS_FAILURE = "GET_CATEGORY_POSTS_FAILURE";

export const getCategoryPosts = () => ({ type: GET_CATEGORY_POSTS });

export const getCategoryPostsSuccess = (posts) => ({
  type: GET_CATEGORY_POSTS_SUCCESS,
  payload: posts,
});

export const getCategoryPostsFailure = () => ({
  type: GET_CATEGORY_POSTS_FAILURE,
});

export function fetchCategoryPosts(id) {
  return async (dispatch) => {
    dispatch(getCategoryPosts());

    try {
      const response = await fetch(
        `http://localhost:5000/categories/${id}/posts`
      );
      const data = await response.json();
      // console.log("cat post from cat action:", data);

      dispatch(getCategoryPostsSuccess(data));
    } catch (error) {
      dispatch(getCategoryPostsFailure());
    }
  };
}
