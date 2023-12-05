const BASE_URL = 'http://127.0.0.1:8000/api';

function getAccessToken() {
  return localStorage.getItem('accessToken');
}

function putAccessToken(accessToken) {
  return localStorage.setItem('accessToken', accessToken);
}

async function fetchWithToken(url, options = {}) {
  return fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${getAccessToken()}`,
    },
  });
}

async function login({ email, password }) {
  const response = await fetch(`${BASE_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  const responseJson = await response.json();

  if (!responseJson.success) {
    alert(responseJson.message);
    return { error: true, data: null };
  }

  return { error: false, data: responseJson.token };
}

async function register({ name, email, password, password_confirmation }) {
  const response = await fetch(`${BASE_URL}/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, password, password_confirmation }),
  });

  const responseJson = await response.json();

  if (!responseJson.success) {
    alert(responseJson.message);
    return { error: true };
  }

  return { error: false };
}

async function getUserLogged() {
  const response = await fetchWithToken(`${BASE_URL}/user`, {
    headers: {
      Accept: 'application/json',
    },
  });
  const responseJson = await response.json();

  if (responseJson.message) {
    return { error: true, data: null };
  }

  return { error: false, data: responseJson };
}

async function logout() {
  const response = await fetchWithToken(`${BASE_URL}/user/logout`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const responseJson = await response.json();

  if (!responseJson.success) {
    alert(responseJson.message);
    return { error: true };
  }

  return { error: false };
}

async function getBooks(page) {
  const response = await fetchWithToken(`${BASE_URL}/books?page=${page}`, {
    headers: {
      Accept: 'application/json',
    },
  });
  const responseJson = await response.json();

  if (responseJson.message) {
    alert(responseJson.message);
    return { error: true, data: null };
  }

  return { error: false, data: responseJson };
}

async function getBookById(id) {
  const response = await fetchWithToken(`${BASE_URL}/books/${id}`, {
    headers: {
      Accept: 'application/json',
    },
  });
  const responseJson = await response.json();

  if (!responseJson.success) {
    alert(responseJson.message);
    return { error: true, data: null };
  }

  return { error: false, data: responseJson.book };
}

async function addBook({
  isbn,
  title,
  subtitle,
  author,
  published,
  publisher,
  pages,
  description,
  website,
}) {
  const response = await fetchWithToken(`${BASE_URL}/books/add`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      isbn,
      title,
      subtitle,
      author,
      published,
      publisher,
      pages,
      description,
      website,
    }),
  });

  const responseJson = await response.json();

  if (!responseJson.success) {
    alert(responseJson.message);
    return { error: true, data: null };
  }

  return { error: false, data: responseJson.book };
}

async function editBook({
  id,
  isbn,
  title,
  subtitle,
  author,
  published,
  publisher,
  pages,
  description,
  website,
}) {
  const response = await fetchWithToken(`${BASE_URL}/books/${id}/edit`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      isbn,
      title,
      subtitle,
      author,
      published,
      publisher,
      pages,
      description,
      website,
    }),
  });

  const responseJson = await response.json();

  if (!responseJson.success) {
    alert(responseJson.message);
    return { error: true, data: null };
  }

  return { error: false, data: responseJson.book };
}

async function deleteBook(id) {
  const response = await fetchWithToken(`${BASE_URL}/books/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const responseJson = await response.json();

  if (!responseJson.success) {
    return { error: true };
  }

  return { error: false };
}

export {
  getAccessToken,
  putAccessToken,
  login,
  register,
  getUserLogged,
  logout,
  getBooks,
  getBookById,
  addBook,
  editBook,
  deleteBook,
};
