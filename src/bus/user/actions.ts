// Types
import { types } from "./types";

export const userActions = {

    // Sync
    setUser: (user: any) => {
        return {
            type: types.SET_USER,
            payload: user,
        };
    },

    logout: () => {
        return {
            type: types.LOGOUT,
        }
    },


    // Async
    loginAsync: (data: any) => {
        return {
            type: types.LOGIN_ASYNC,
            payload: data,
        };
    },

    loginFacebookAsync: (data: any) => {
        return {
            type: types.LOGIN_FACEBOOK_ASYNC,
            payload: data,
        };
    },

    logoutAsync: () => {
        return {
            type: types.LOGOUT_ASYNC,
        };
    },

    authAsync: () => {
        return {
            type: types.AUTHENTICATE_ASYNC,
        };
    },

    registerAsync: (data: any) => {
        return {
            type: types.REGISTER_ASYNC,
            payload: data,
        };
    },
}