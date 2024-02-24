import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import RestrictedRoute from './RestrictedRoute';

import { refreshUser } from '../redux/auth/operations';
import { selectIsRefreshing } from '../redux/auth/selectors';

import Layout from 'components/Layout';
import Loader from 'components/Loader';

const HomePage = lazy(() => import('pages/Home'));
const LoginPage = lazy(() => import('pages/LogIn'));
const RegisterPage = lazy(() => import('pages/Register'));
const AccountPage = lazy(() => import('pages/Account'));

const App = () => {
  const dispatch = useDispatch();

  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/login"
          element={<RestrictedRoute redirectTo="/" component={LoginPage} />}
        />
        <Route
          path="/register"
          element={<RestrictedRoute redirectTo="/" component={RegisterPage} />}
        />
        <Route
          path="account"
          element={<PrivateRoute redirectTo="/login" component={AccountPage} />}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};

export default App;
