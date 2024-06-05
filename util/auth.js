import axios from "axios";

const API_KEY = "AIzaSyCmfXDssq3vb_PH6jNDedwIk8uXbRF3phs";

async function authenticate(mode, email, password) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;

  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });

  const token = response.data.idToken;

  return token;
}

export function createUser(email, password) {
  return authenticate("signUp", email, password);

  //   const response = await axios.post(
  //     "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + API_KEY,
  //     {
  //       email: email,
  //       password: password,
  //       returnSecureToken: true,
  //     }
  //   ); //ზედა კოდს ვიყენებთ აქ დასარეგისტრირიებლად signup - და შემოკლებულია ბევრად.
}

export function login(email, password) {
  return authenticate("signInWithPassword", email, password);
}
