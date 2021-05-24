import sidebarActions from './sidebar-actions';

const onMenuOpen = () => dispatch => {
  dispatch(sidebarActions.menuOpen());
};
const onMenuClose = () => dispatch => {
  dispatch(sidebarActions.menuClose());
};

const onToggleSideBar = () => dispatch => {
  dispatch(sidebarActions.toggleSideBar());
};

export default {
  onMenuClose,
  onMenuOpen,
  onToggleSideBar,
};
