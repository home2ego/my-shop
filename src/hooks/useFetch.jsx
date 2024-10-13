import { useState } from 'react';

function useFetch(baseUrl) {
  const [loading, setLoading] = useState(true);

  function get(endpoint) {
    return new Promise((resolve, reject) => {
      fetch(baseUrl + endpoint)
        .then((response) => response.json())
        .then((data) => {
          if (!data) {
            setLoading(false);
            return reject(data);
          }
          setLoading(false);
          resolve(data);
        })
        .catch((error) => {
          setLoading(false);
          reject(error);
        });
    });
  }

  function post(endpoint, body) {
    return new Promise((resolve, reject) => {
      fetch(baseUrl + endpoint, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      })
        .then((response) => response.json())
        .then((data) => {
          if (!data) {
            setLoading(false);
            return reject(data);
          }
          setLoading(false);
          resolve(data);
        })
        .catch((error) => {
          setLoading(false);
          reject(error);
        });
    });
  }

  return { get, post, loading };
}

export default useFetch;
