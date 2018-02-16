const initialState = {
    comments: {}
};

export default function commentsReducer(state = initialState, action) {
    let comments;

    switch(action.type) {

        case 'FETCH_COMMENTS_SUCCESS':

            comments = {
                ...state.comments,
                [action.id]: action.payload

            };

            return { comments };

        default:
            return state;
    }
}