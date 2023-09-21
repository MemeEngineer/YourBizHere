import * as usersApi from './users-api'

export async function signUp(userData){

//calling the user-api signUp function
const token = await usersApi.signUp(userData)
localStorage.setItem('Token', token)
return getUser();
}

export async function login(credentials){
  const token = await usersApi.login(credentials)
  localStorage.setItem('Token', token)
  return getUser();
}

export async function logOut(){
  localStorage.removeItem('Token')
}


export async function checkToken(){
const dateStr = await usersApi.checkToken()
return new Date(dateStr)
}

export function getToken() {
    // getItem returns null if there's no string
    const token = localStorage.getItem('Token');
    if (!token) return null;
    // Obtain the payload of the token
    const payload = JSON.parse(atob(token.split('.')[1]));
    // A JWT's exp is expressed in seconds, not milliseconds, so convert
    if (payload.exp < Date.now() / 1000) {
      // Token has expired - remove it from localStorage
      localStorage.removeItem('Token');
      return null;
    }
    return token;
    }
    
    export function getUser() {
    const token = getToken();
    // If there's a token, return the user in the payload, otherwise return null
    return token ? JSON.parse(atob(token.split('.')[1])).user : null;
    }