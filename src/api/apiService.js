const api = "http://127.0.0.1:3001";

let token = localStorage.token;
if (!token) {
    token = localStorage.token = Math.random().toString(36).substr(-8);
}

const headers = {
    'Accept': 'application/json',
    'Authorization': token
};

export const getCategories = () => fetch(`${api}/categories`, { headers });

export const getArticles = () => fetch(`${api}/posts`, { headers });

export const getComments = (id) => fetch(`${api}/posts/${id}/comments/`, { headers });

export const postArticle = (body) => fetch(`${api}/posts`, {
    method: 'POST',
    headers: {
        ...headers,
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
});

export const putArticle = (body, id) => fetch(`${api}/posts/${id}`, {
    method: 'PUT',
    headers: {
        ...headers,
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
});

export const deleteArticle = (id) => fetch(`${api}/posts/${id}`, {
    method: 'DELETE',
    headers
});

export const postVote = (id, body) => fetch(`${api}/posts/${id}`, {
    method: 'POST',
    headers: {
        ...headers,
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
});

export const postComment = (body) => fetch(`${api}/comments`, {
   method: 'POST',
    headers: {
        ...headers,
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
});

export const putComment = (body) => fetch(`${api}/comments`, {
    method: 'PUT',
    headers: {
        ...headers,
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
});

export const deleteComment = (id) => fetch(`${api}/comments/${id}`, {
    method: 'DELETE',
    headers
});