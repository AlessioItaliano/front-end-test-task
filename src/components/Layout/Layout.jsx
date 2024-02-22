import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Header from 'components/Header';
import Loader from 'components/Loader';
import Footer from 'components/Footer';

import * as s from './Layout.styled';

const Layout = () => {
  return (
    <>
      <s.Port>
        <Header />
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
        <Footer />
      </s.Port>
    </>
  );
};

export default Layout;
