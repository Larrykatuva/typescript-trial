import { REGISTER_USER, LOGIN_USER, LOADING, ADD_TO_CART } from './types';
import client from './client';

/**
 *
 * @param userData
 * @returns dispatch
 */
export const SignUpAction = (userData: any) => async (dispatch: any) => {
    try {

        const res = await client.post(`/auth/register`, { ...userData });
        return dispatch(SignUp(res.data))
    } catch (error) {
        return error
    }
};


/**
 *
 * @param payload
 * @returns action object
 */
export const SignUp = (payload: any) => {
    return {
        type: REGISTER_USER,
        payload,
    };
};


/**
 *
 * @param userData
 * @returns dispatch
 */
export const LoginAction = (userData: any) => async (dispatch: any) => {
    try {
        const res = await client.post(`/auth/login`, { ...userData });
        return dispatch(Login(res.data.customer))
    } catch (error) {
        return error
    }
};

/**
 *
 * @param payload
 * @returns action object
 */
export const Login = (payload: any) => {
    return {
        type: LOGIN_USER,
        payload,
    };
};


/**
 * 
 * @param loadingState 
 * @returns dispatch
 */
export const setLoading = (loadingState: boolean)=> (dispatch: any) =>{
  return dispatch ({
    type:LOADING,
    payload: loadingState
  })
}


/**
 * 
 * @param productId 
 * @returns dispatch
 */
export const addToCart = (productId: any) => async (dispatch: any) => {
    try {
        const res = await client.post(`product/addCart/${productId}`, { productId });
        return dispatch(Cart(res.data))
    } catch(error) {
        return error;
    }
}

/**
 * 
 * @param payload 
 * @returns action object
 */
export const Cart = (payload: any) => {
    return {
        type: ADD_TO_CART,
        payload,
    };
};