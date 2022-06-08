export const BACKEND_URL = 'http://localhost:5000/api';

export const LOGIN_URL = BACKEND_URL + '/user/login';
export const REGISTER_URL = BACKEND_URL + '/user/register';
export const LOGOUT_URL = BACKEND_URL + '/user/logout';
export const GET_USER_DATA_URL = BACKEND_URL + '/user/account';

export const GET_ALL_SHOPS_URL = BACKEND_URL + '/shop/findAll';
export const GET_CONNECTED_SHOPS_URL = BACKEND_URL + '/shop/principalConnectedShops';
export const FIND_OFFER_URL = BACKEND_URL + '/shop/offer/find';

export const CREATE_ACTION_URL = BACKEND_URL + '/action/create';
export const GET_ACTIONS_URL = BACKEND_URL + '/actions';
export const GET_ACTION_URL = BACKEND_URL + '/actions';
export const EDIT_ACTION_URL = BACKEND_URL + '/actions/modify';
export const DELETE_ACTION_URL = BACKEND_URL + '/actions/delete';
export const GET_ACTION_TYPE_CATEGORIES_URL = BACKEND_URL + '/action/categories';

export const GET_ALLEGRO_LOGIN_URL = BACKEND_URL + '/user/connectAllegro';
export const CONFIRM_ALLEGRO_LOGIN_URL = BACKEND_URL + '/user/confirm/allegro';

export const GET_EBAY_LOGIN_URL = BACKEND_URL + '/user/connectEbay';
export const CONFIRM_EBAY_LOGIN_URL = BACKEND_URL + '/user/confirm/ebay';
