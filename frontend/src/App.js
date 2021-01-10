import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomeView from './views/Home/HomeView';
import ProductView from './views/Product/ProductView';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Route path="/" component={HomeView} exact />
        <Route path="/product/:id" component={ProductView} />
      </main>
      <Footer />
    </Router>
  );
}

export default App;
