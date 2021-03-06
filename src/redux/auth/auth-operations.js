import axios from 'axios';
import authActions from './auth-actions';
import notifications from '../../components/Notification/Notification';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

/* axios.defaults.baseURL = 'https://lpj-tasker.herokuapp.com'; */

//когда логинимся, в хедер ставим наш токен, когда разлогин, снимаем
const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

/*
 * POST @ /users/signup
 * body { name, email, password }
 *
 * После успешной регистрации добавляем токен в HTTP-заголовок
 */
const register = credentials => async dispatch => {
  dispatch(authActions.registerRequest());
  try {
    const response = await axios.post('/users/signup', credentials);

    token.set(response.data.token);
    dispatch(authActions.registerSuccess(response.data));
    notifications.registerSuccessNotify();
  } catch (error) {
    if (error.response.data.code === 11000) {
      notifications.registerErrorNotify();
    }

    dispatch(authActions.registerError(error.message));
  }
};

// "name": "MongoError" ошибка когда юзер уже есть

/*
 * POST @ /users/login
 * body:
 *    { email, password }
 *
 * После успешного логина добавляем токен в HTTP-заголовок
 */

const logIn = credentials => async dispatch => {
  dispatch(authActions.loginRequest());

  try {
    const response = await axios.post('/users/login', credentials);

    token.set(response.data.token);
    dispatch(authActions.loginSuccess(response.data));
    notifications.loginSuccessNotify();
  } catch (error) {
    dispatch(authActions.loginError(error.message));
    notifications.loginErrorNotify();
  }
};

/*
 * POST @ /users/logout
 * headers:
 *    Authorization: Bearer token
 *
 * 1. После успешного логаута, удаляем токен из HTTP-заголовка
 */
const logOut = () => async dispatch => {
  dispatch(authActions.logoutRequest());

  try {
    await axios.post('/users/logout');

    token.unset();
    dispatch(authActions.logoutSuccess());
    notifications.logoutSuccessNotify();
  } catch (error) {
    dispatch(authActions.logoutError(error.message));
  }
};

/*
 * GET @ /users/current
 * headers:
 *    Authorization: Bearer token
 *
 * 1. Забираем токен из стейта через getState()
 * 2. Если токена нет, выходим не выполняя никаких операций
 * 3. Если токен есть, добавляет его в HTTP-заголовок и выполянем операцию
 */

//TODO: вместе с диспатч, приходит еще getState в котором лежит редакс стейт
//Юзаем этот метод в App.js
const getCurrentUser = () => async (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }

  token.set(persistedToken);

  dispatch(authActions.getCurrentUserRequest());
  try {
    const response = await axios.get('/users/current');
    dispatch(authActions.getCurrentUserSuccess(response.data));
  } catch (error) {
    dispatch(authActions.getCurrentUserError(error.message));
  }
};

export default {
  register,
  logOut,
  logIn,
  getCurrentUser,
};
