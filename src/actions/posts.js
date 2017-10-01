import { getPosts } from "../api/apiService";

export function fetchPostsSuccess(data) {
    console.log(data);
    return {
        type: 'FETCH_POSTS_SUCCESS',
        payload: data
    };
}

export function fetchPosts(dispatch) {
    return getPosts()
        .then(res => res.json())
        .then(data => { dispatch(fetchPostsSuccess(data))});
}