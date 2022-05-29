export const API_URL_ROOT = 'https://fakestoreapi.com/products';
export const API_URL_ROOT2 = 'https://fakestoreapi.com/products/categories';
export const ecommerceApiRequest = {
  getAll,
  getCata,
};
function getAll(url) {
  const requestOptions = {
    method: 'GET',
    //headers: authHeader(),
  };

  return fetch(`${API_URL_ROOT}`, requestOptions).then(handleResponse);
}
function getCata(url) {
  const requestOptions = {
    method: 'GET',
    //headers: authHeader(),
  };

  return fetch(`${API_URL_ROOT2}`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
  console.log(response.ok);
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        location.reload(true);
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}
