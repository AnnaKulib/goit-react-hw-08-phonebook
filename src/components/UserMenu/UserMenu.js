import { useSelector, useDispatch } from 'react-redux';
import { authSelectors, authOperations } from 'redux/auth';
import { Button, MenuItem } from '@mui/material';
import defaultAvatar from './defaultAvatar.png';
import s from './UserMenu.module.css';

function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  const avatar = defaultAvatar;

  return (
    <>
      <MenuItem>
        <img className={s.avatar} src={avatar} alt="avatar" width="36" />
        <p className={s.name}>{name}</p>
      </MenuItem>
      <Button
        variant="contained"
        size="small"
        onClick={() => dispatch(authOperations.logOut())}
        type="button"
      >
        Logout
      </Button>
      {/* <button onClick={() => dispatch(authOperations.logOut())} type="button"> Logout </button> */}
    </>
  );
}

export default UserMenu;
