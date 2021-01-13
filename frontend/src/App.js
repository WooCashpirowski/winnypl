import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomeView from "./views/Home/HomeView";
import ProductView from "./views/Product/ProductView";
import CartView from "./views/Cart/CartView";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Route path="/" component={HomeView} exact />
        <Route path="/produkt/:id" component={ProductView} />
        <Route path="/koszyk/:id?" component={CartView} />
      </main>
      <Footer />
    </Router>
  );
}

export default App;
