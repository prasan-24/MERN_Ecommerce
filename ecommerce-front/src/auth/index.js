import { API } from "../config";

export const doSignUp = (user) => {
  return fetch(`${API}/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const doSignin = (user) => {
  return fetch(`${API}/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
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


export const isAuthenticated = () =>{
  if(typeof window === 'undefined'){
    return false;
  }

  if(localStorage.getItem('secretToken')){
    return JSON.parse(localStorage.getItem('secretToken'));
  } else {
    return false;
  }

}