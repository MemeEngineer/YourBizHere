import * as usersApi from './users-api'

export async function signUp(userData){

//calling the user-api signUp function
const token = await usersApi.signUp(userData)
return token;
}