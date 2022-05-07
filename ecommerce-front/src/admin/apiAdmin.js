import { API } from "../config";

export const createCategory = (userId, token, category) => {
  console.log(token);
  return fetch(`${API}/category/create/${userId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(category),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const createProduct = (userId, token, product) => {
  console.log(token);
  return fetch(`${API}/product/create/${userId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(product),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const aunthenticate = (data, next) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("secretToken", JSON.stringify(data));
  }

  next();
};

export const signout = (next) => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("secretToken");
  }
  next();
  return fetch(`${API}/signout`, {})
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const isAuthenticated = () => {
  if (typeof window === "undefined") {
    return false;
  }

  if (localStorage.getItem("secretToken")) {
    return JSON.parse(localStorage.getItem("secretToken"));
  } else {
    return false;
  }
};
