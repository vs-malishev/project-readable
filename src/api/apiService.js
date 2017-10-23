const api = "http://localhost:3001";

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

export const postArticle = (body) => fetch('/posts', {
    method: 'POST',
    headers: {
        ...headers,
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
});

export const putArticle = (body) => fetch(`/posts/${body.id}`, {
    method: 'PUT',
    headers: {
        ...headers,
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
});