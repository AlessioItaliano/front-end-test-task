import Header from './Header';
// import Body from './Body';
// import Footer from './Footer';

import * as s from './App.styled';
import ArticlesList from './ArticlesList';

function App() {
  return (
    <s.Layout>
      <Header />
      <ArticlesList />
      {/* <Body /> */}
      {/* <Footer /> */}
    </s.Layout>
  );
}

export default App;
