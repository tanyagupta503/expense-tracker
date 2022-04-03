import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ component: RouteComponent }) => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  if (userInfo) {
    return <RouteComponent />;
  }

  return <Navigate to='/login' />;
};
