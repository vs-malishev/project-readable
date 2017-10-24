import { unionBy } from 'lodash'

const initialState = {
    posts: []
};

export default function postsReducer(state = initialState, action) {
    let articleData;
    let articles;

    switch (action.type) {
        case 'FETCH_POSTS_SUCCESS':
            return {
                posts: action.payload
            };

        case 'POST_ARTICLE_SUCCESS':
            articleData = action.payload;
            articles = state.posts;

            articles.unshift(articleData);

            return {
                posts: articles
            };

        case 'PUT_ARTICLE_SUCCESS':
            articleData = [action.payload];

            return {
                posts: unionBy(articleData, state.posts, 'id')
            };

        default:
            return state;
    }
}