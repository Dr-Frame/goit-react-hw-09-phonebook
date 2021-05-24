import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import sidebarActions from './sidebar-actions';

const isSidebarOpen = createReducer(false, {
  [sidebarActions.menuClose]: () => false,
  [sidebarActions.menuOpen]: () => true,
  [sidebarActions.toggleSideBar]: (state, _) => !state,
});

export default combineReducers({
  isSidebarOpen,
});
