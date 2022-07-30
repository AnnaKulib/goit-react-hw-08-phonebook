import { Route, Routes } from 'react-router-dom';
import { useEffect, Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from 'redux/auth';
import { ToastContainer } from 'react-toastify';

import Section from './Section';
import Header from './Header';
import PrivateRoute from 'routes/PrivateRoutes';
import PublicRoutes from 'routes/PublicRoutes';

const Home = lazy(() => import('pages/HomePage/HomePage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage/ContactsPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage'));

function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !isFetchingCurrentUser && (
      <>
        <Header />
        <Section>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/contacts"
                element={
                  <PrivateRoute>
                    <ContactsPage />
                  </PrivateRoute>
                }
              />
              <Route
                path="/register"
                element={
                  <PublicRoutes redirectTo="/contacts" restricted>
                    <RegisterPage />
                  </PublicRoutes>
                }
              />
              <Route
                path="/login"
                element={
                  <PublicRoutes redirectTo="/contacts" restricted>
                    <LoginPage />
                  </PublicRoutes>
                }
              />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
            <ToastContainer />
          </Suspense>
        </Section>
      </>
    )
  );
}

export default App;
