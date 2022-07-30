import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { NavLink } from 'react-router-dom';
import { MenuItem } from '@mui/material';
import s from './Navigation.module.css';

function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <>
      <MenuItem>
        <NavLink
          className={({ isActive }) => (isActive ? s.active : s.link)}
          to="/"
        >
          Home
        </NavLink>
      </MenuItem>

      {isLoggedIn && (
        <MenuItem sx={{ flexGrow: 1 }}>
          {' '}
          <NavLink
            className={({ isActive }) => (isActive ? s.active : s.link)}
            to="/contacts"
          >
            Contacts
          </NavLink>
        </MenuItem>
      )}
    </>
  );
}

export default Navigation;
