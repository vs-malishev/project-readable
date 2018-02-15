const initialState = {
    categories: []
};

export default function categoriesReducer(state = initialState, action) {
    switch (action.type) {
        case 'FETCH_CATEGORIES_SUCCESS':
            const defaultCategory = {
                path: 'choose category'
            };

            action.payload.unshift(defaultCategory);

            return {
                categories: action.payload
            };
        default:
            return state;
    }
}