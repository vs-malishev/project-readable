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
                state
            };

        case 'PATCH_ARTICLE_SUCCESS':
            return {
                state
            };
        default:
            return state;
    }
}