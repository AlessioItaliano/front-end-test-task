import Section from 'components/Section';
import UserArticles from 'components/UserArticles';
import UserFavoriteList from 'components/UserFavoriteList';

const Account = () => {
  return (
    <>
      <Section>
        <UserArticles />
      </Section>
      <Section>
        <UserFavoriteList />
      </Section>
    </>
  );
};

export default Account;
