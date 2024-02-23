import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Header from 'components/Header';
import Loader from 'components/Loader';
import Footer from 'components/Footer';

import * as s from './Layout.styled';

const Layout = () => {
  return (
    <>
      <Header />
      <s.Port>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </s.Port>
      <Footer />
    </>
  );
};

export default Layout;
