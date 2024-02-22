import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getFirstPage } from '../../redux/articles/operation';

import {
  selectArticles,
  selectError,
  selectIsLoading,
} from '../../redux/articles/selectors';

import Article from 'components/Article';
import Loader from 'components/Loader';

import * as s from './ArticlesList.styled';

const ArticlesList = () => {
  const dispatch = useDispatch();

  const articles = useSelector(selectArticles);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  const [page, setPage] = useState(1);

  console.log('articles :', articles);
  console.log('error :', error);
  console.log('isLoading :', isLoading);

  useEffect(() => {
    const fetchData = async () => {
      if (page === 1) {
        dispatch(getFirstPage());
        // setShowButton(true);
      }

      // if (page > 1) {
      //   const response = await dispatch(getRestOfCars(page));
      //   if (response.payload.length >= 8) {
      //     setShowButton(true);
      //   } else {
      //     setShowButton(false);
      //   }
      // }

      // if (filteredCars.length !== 0) {
      //   setShowButton(false);
      // }
    };

    fetchData();
  }, [dispatch, page]);

  return (
    <s.Container>
      {error && isLoading ? (
        <Loader />
      ) : (
        articles.map(article => (
          <s.Item key={article.id}>
            <Article article={article} />
          </s.Item>
        ))
      )}
    </s.Container>
  );
};

export default ArticlesList;

// import Navigation from 'components/navigation';
// import UserMenu from 'components/userMenu';
// import AuthNav from 'components/authNav';
// import { useAuth } from 'hooks';
// import { HeaderNav } from './Header.styled';

// const Header = () => {
//   const { isLoggedIn } = useAuth();

//   return (
//     <Container>
//       <Navigation />
//       {isLoggedIn ? <UserMenu /> : <AuthNav />}
//     </Container>
//   );
// };

// export default Header;
