import { createAction } from '@reduxjs/toolkit';

const menuOpen = createAction('sidebar/menuOpen');
const menuClose = createAction('sidebar/menuClose');

const toggleSideBar = createAction('sidebar/toggleSideBar');

export default {
  menuClose,
  menuOpen,
  toggleSideBar,
};
