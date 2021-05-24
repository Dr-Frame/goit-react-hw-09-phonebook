import { store } from 'react-notifications-component';

const loginSuccessNotify = () => {
  store.addNotification({
    title: 'Logined!',
    message: 'You have successfully logined',
    type: 'success',
    insert: 'top',
    container: 'top-right',
    animationIn: ['animate__animated', 'animate__flipInX'],
    animationOut: ['animate__animated', 'animate__zoomOut'],
    dismiss: {
      duration: 3000,
      onScreen: true,
      pauseOnHover: true,
    },
    isMobile: true,
  });
};

const loginErrorNotify = () => {
  store.addNotification({
    title: 'Error',
    message: 'User e-mail or password is incorrect',
    type: 'danger',
    insert: 'top',
    container: 'top-right',
    animationIn: ['animate__animated', 'animate__flipInX'],
    animationOut: ['animate__animated', 'animate__zoomOut'],
    dismiss: {
      duration: 3000,
      onScreen: true,
      pauseOnHover: true,
    },
  });
};

const logoutSuccessNotify = () => {
  store.addNotification({
    title: 'Loged out!',
    message: 'You have successfully loged out',
    type: 'warning',
    insert: 'top',
    container: 'top-right',
    animationIn: ['animate__animated', 'animate__flipInX'],
    animationOut: ['animate__animated', 'animate__zoomOut'],
    dismiss: {
      duration: 3000,
      onScreen: true,
      pauseOnHover: true,
    },
    isMobile: true,
  });
};

const registerSuccessNotify = () => {
  store.addNotification({
    title: 'Registered!',
    message: 'You have successfully Registered',
    type: 'success',
    insert: 'top',
    container: 'top-right',
    animationIn: ['animate__animated', 'animate__flipInX'],
    animationOut: ['animate__animated', 'animate__zoomOut'],
    dismiss: {
      duration: 3000,
      onScreen: true,
      pauseOnHover: true,
    },
    isMobile: true,
  });
};

const registerErrorNotify = () => {
  store.addNotification({
    title: 'Error',
    message: 'Please, enter a valid data',
    type: 'danger',
    insert: 'top',
    container: 'top-right',
    animationIn: ['animate__animated', 'animate__flipInX'],
    animationOut: ['animate__animated', 'animate__zoomOut'],
    dismiss: {
      duration: 3000,
      onScreen: true,
      pauseOnHover: true,
    },
    isMobile: true,
  });
};

const contactAddedSuccessNotify = () => {
  store.addNotification({
    title: 'Added!',
    message: 'You have successfully added a contact',
    type: 'success',
    insert: 'top',
    container: 'top-right',
    animationIn: ['animate__animated', 'animate__flipInX'],
    animationOut: ['animate__animated', 'animate__zoomOut'],
    dismiss: {
      duration: 3000,
      onScreen: true,
      pauseOnHover: true,
    },
    isMobile: true,
  });
};

const contactDeletedSuccessNotify = () => {
  store.addNotification({
    title: 'Deleted',
    message: 'You have successfully deleted a contact',
    type: 'default',
    insert: 'top',
    container: 'top-right',
    animationIn: ['animate__animated', 'animate__flipInX'],
    animationOut: ['animate__animated', 'animate__zoomOut'],
    dismiss: {
      duration: 3000,
      onScreen: true,
      pauseOnHover: true,
    },
    isMobile: true,
  });
};

export default {
  loginSuccessNotify,
  logoutSuccessNotify,
  loginErrorNotify,
  registerSuccessNotify,
  registerErrorNotify,
  contactAddedSuccessNotify,
  contactDeletedSuccessNotify,
};
