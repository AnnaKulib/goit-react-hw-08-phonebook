import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { authSelectors } from 'redux/auth';

export default function PrivateRoute({ children }) {
  const token = useSelector(authSelectors.getUserToken);
  return <>{token ? children : <Navigate to="/" />}</>;
}
