import { getArticles, postArticle, putArticle, postVote, deleteArticle } from "../api/apiService";
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

export function postArticleVoteSuccess(data) {
    return {
        type: 'POST_ARTICLE_VOTE_SUCCESS',
        payload: data
    };
}

export function patchArticleSuccess(data) {
    return {
        type: 'PUT_ARTICLE_SUCCESS',
        payload: data
    };
}

export function deleteArticleSuccess(data) {
    return {
        type: 'DELETE_ARTICLE_SUCCESS',
        payload: data
    };
}

export function fetchArticles(dispatch) {
    return getArticles()
        .then(res => res.json())
        .then(data => { dispatch(fetchPostsSuccess(data))})
        .catch(message => dispatch(apiErrorAction(message)));
}

export function createArticle(data, history) {
    const date = new Date().getTime();
    const generateUUID = (d) => {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            const r = (d + Math.random()*16)%16 | 0;
            d = Math.floor(d/16);
            return (c==='x' ? r : (r&0x3|0x8)).toString(16);
        });
    };
    const id = generateUUID(date);
    const payload = {
        ...data,
        id: id,
        timestamp: date
    };

    return (dispatch) => {
        dispatch(apiLoadingAction());

        postArticle(payload)
            .then(res => res.json())
            .then(data => {
                dispatch(postArticleSuccess(data));
                history.goBack();
            })
            .catch(message => dispatch(apiErrorAction(message)));
    };
}

export function updateArticle(data, id, history) {
    return (dispatch) => {
        dispatch(apiLoadingAction());

        putArticle(data, id)
            .then(res => res.json())
            .then(data => {
                dispatch(patchArticleSuccess(data));
                history.goBack();
            })
            .catch(message => dispatch(apiErrorAction(message)));
    };
}

export const removeArticle = (id, history) => (dispatch) => {
    dispatch(apiLoadingAction());

    deleteArticle(id)
        .then(res => res.json())
        .then(data => {
            dispatch(deleteArticleSuccess(data));
            history.push('/');
        })
        .catch(message => dispatch(apiErrorAction(message)));
};

export function postArticleVote(id, count) {

    const payload = {
        option: count
    };

    return (dispatch) => {
        dispatch(apiLoadingAction());

        postVote(id, payload)
            .then(res => res.json())
            .then(data => {
                dispatch(postArticleVoteSuccess(data));
            })
            .catch(message => dispatch(apiErrorAction(message)));
    };
}