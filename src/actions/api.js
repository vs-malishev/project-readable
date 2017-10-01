export function apiErrorAction(apiError) {
    return {
        type: 'API_ERROR',
        apiError
    };
}

export function apiLoadingAction() {
    return {
        type: 'API_LOADING'
    };
}

export function apiSuccessAction() {
    return {
        type: 'API_SUCCESS'
    };
}
