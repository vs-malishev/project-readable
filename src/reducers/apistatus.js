const initialState = {
    isLoading: false,
    apiError: null
};

export default function apiStatusReducer(state = initialState, action) {
    switch (action.type) {
        case 'API_LOADING':
            return {
                isLoading: true
            };

        case 'API_SUCCESS':
            return {
                isLoading: false
            };

        case 'API_ERROR':
            return {
                isLoading: false,
                apiError: action.apiError
            };

        default:
            return state;
    }
}