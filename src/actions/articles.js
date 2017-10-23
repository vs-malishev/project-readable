import { getArticles, postArticle, putArticle } from "../api/apiService";

export function fetchPostsSuccess(data) {
    return {
        type: 'FETCH_POSTS_SUCCESS',
        payload: data
    };
}

export function postArticleSuccess(data) {
    return {
        type: 'POST_ARTICLE_SUCCESS',
        payload: data
    };
}

export function patchArticleSuccess(data) {
    return {
        type: 'PATCH_ARTICLE_SUCCESS',
        payload: data
    };
}

export function fetchArticles(dispatch) {
    return getArticles()
        .then(res => res.json())
        .then(data => { dispatch(fetchPostsSuccess(data))});
}

export function createArticle(dispatch) {
    return postArticle(dispatch)
        .then(res => res.json())
        .then(data => { dispatch(postArticleSuccess(data))})
}

export function updateArticle(dispatch) {
    console.log(dispatch);
    return putArticle(dispatch)
        .then(res => res.json())
        .then(data => { dispatch(patchArticleSuccess(data))})
}