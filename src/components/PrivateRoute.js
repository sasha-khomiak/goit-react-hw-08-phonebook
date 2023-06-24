import { useSelector } from 'react-redux';
import { Route } from 'react-router-dom';
import authSelectors, { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({ el }) {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  console.log('isLoggedIn', isLoggedIn);
  return isLoggedIn ? el : <Navigate to="/login" />;
}

// import { selectIsSignedIn } from 'store/selector';

// export const PrivateRoute = ({ el }) => {
//   const isSignedIn = useSelector(selectIsSignedIn);

//   return isSignedIn ? el : <Navigate to={'auth'} />;
// };
