import { getCategories } from "../api/apiService";

export function fetchCategoriesSuccess(data) {
    return {
        type: 'FETCH_CATEGORIES_SUCCESS',
        payload: data
    };
}

export function fetchCategories(dispatch) {
    return getCategories()
        .then(res => res.json())
        .then(data => dispatch(fetchCategoriesSuccess(data.categories)));
}