import { getArticles, postArticle, putArticle } from "../api/apiService";
import { apiLoadingAction, apiErrorAction, apiSuccessAction } from './api';

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

export function createArticle() {
    return (dispatch) => {
        dispatch(apiLoadingAction());

        postArticle(dispatch)
            .then(res => res.json())
            .then(data => {
                dispatch(postArticleSuccess(data))
            })
            .catch(message => dispatch(apiErrorAction(message)));
    };
}

export function updateArticle(data) {
    console.log(data);
    return (dispatch) => {
        dispatch(apiLoadingAction());

        putArticle(data)
            .then(res => res.json())
            .then(data => {
                dispatch(patchArticleSuccess(data))
            })
            .catch(message => dispatch(apiErrorAction(message)));
    };
}