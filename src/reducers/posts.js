const initialState = {
    posts: []
};

export default function postsReducer(state = initialState, action) {
    switch (action.type) {
        case 'FETCH_POSTS_SUCCESS':
            return {
                posts: action.payload
            };
        default:
            return state;
    }
}