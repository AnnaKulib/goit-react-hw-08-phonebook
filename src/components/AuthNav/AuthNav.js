import React from 'react';
import { NavLink } from 'react-router-dom';
import { MenuItem } from '@mui/material';
import s from './AuthNav.module.css';

function AuthNav() {
  return (
    <>
      <MenuItem>
        <NavLink
          className={({ isActive }) => (isActive ? s.active : s.link)}
          to="/register"
        >
          Register
        </NavLink>
      </MenuItem>

      <MenuItem>
        <NavLink
          className={({ isActive }) => (isActive ? s.active : s.link)}
          to="/login"
        >
          Log In
        </NavLink>
      </MenuItem>
    </>
  );
}

export default AuthNav;
