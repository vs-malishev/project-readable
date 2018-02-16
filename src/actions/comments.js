import { getComments } from "../api/apiService";
import {apiErrorAction, apiLoadingAction} from "./api";

export function fetchCommentsSuccess(id, data) {
    return {
        type: 'FETCH_COMMENTS_SUCCESS',
        payload: data,
        id
    };
}

export function fetchComments(id) {
    return (dispatch) => {
        dispatch(apiLoadingAction());

        getComments(id)
            .then(res => res.json())
            .then(data => {
                dispatch(fetchCommentsSuccess(id, data));
            })
            .catch(message => dispatch(apiErrorAction(message)));
    };
}