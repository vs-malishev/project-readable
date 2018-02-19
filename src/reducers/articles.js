import { unionBy } from 'lodash'

const initialState = {
    posts: []
};

export default function postsReducer(state = initialState, action) {

    switch (action.type) {
        case 'FETCH_POSTS_SUCCESS':
            return {
                posts: action.payload
            };

        case 'POST_ARTICLE_SUCCESS':

            return {
                posts: [...state.posts, action.payload]
            };

        case 'POST_ARTICLE_VOTE_SUCCESS':

            return {
                posts: unionBy([action.payload], state.posts, 'id')
            };

        case 'PUT_ARTICLE_SUCCESS':

            return {
                posts: unionBy([action.payload], state.posts, 'id')
            };

        case 'DELETE_ARTICLE_SUCCESS':

            return {
                posts: unionBy([action.payload], state.posts, 'id')
            };

        default:
            return state;
    }
}