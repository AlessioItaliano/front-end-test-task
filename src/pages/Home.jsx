import ArticlesList from 'components/ArticlesList';
import SearchBar from 'components/SearchBar';
import Section from 'components/Section';

const Home = () => {
  return (
    <>
      <Section>
        <SearchBar />
        <ArticlesList />
      </Section>
    </>
  );
};

export default Home;
