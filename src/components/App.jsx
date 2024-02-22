import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Layout from 'components/Layout';

const HomePage = lazy(() => import('pages/Home'));
const AccountPage = lazy(() => import('pages/Account'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="account" element={<AccountPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};

export default App;
