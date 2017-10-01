const initialState = {
    categories: []
};

export default function categoriesReducer(state = initialState, action) {
    switch (action.type) {
        case 'FETCH_CATEGORIES_SUCCESS':
            return {
                categories: action.payload
            };
        default:
            return state;
    }
}