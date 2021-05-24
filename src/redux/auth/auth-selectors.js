const getIsAuthenticated = state => state.auth.isAuthenticated;
const getUserName = state => state.auth.user.name;
const getIsErrorOccured = state => state.auth.showLoginError;
const getIsLoginSuccess = state => state.auth.showLoginSuccess;
const getApiError = state => state.auth.error;

export default {
  getIsAuthenticated,
  getUserName,
  getIsErrorOccured,
  getIsLoginSuccess,
  getApiError,
};
