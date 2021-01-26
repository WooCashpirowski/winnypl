import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomeView from "./views/Home/HomeView";
import ProductView from "./views/Product/ProductView";
import CartView from "./views/Cart/CartView";
import LoginView from "./views/Login/LoginView";
import RegisterView from "./views/Register/RegisterView";
import ProfileView from "./views/Profile/ProfileView";
import ShippingView from "./views/Shipping/ShippingView";
import PaymentView from "./views/Payment/PaymentView";
import SummaryView from "./views/Summary/SummaryView";
import OrderView from "./views/Order/OrderView";
import UsersListView from "./views/UsersList/UsersListView";
import UserDetailsView from "./views/UserDetails/UserDetailsView";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Route
          path="/admin/uzytkownicy/:id/edycja"
          component={UserDetailsView}
        />
        <Route path="/admin/uzytkownicy" component={UsersListView} exact />
        <Route path="/zamowienie/:id" component={OrderView} />
        <Route path="/podsumowanie" component={SummaryView} />
        <Route path="/platnosc" component={PaymentView} />
        <Route path="/dostawa" component={ShippingView} />
        <Route path="/produkt/:id" component={ProductView} />
        <Route path="/koszyk/:id?" component={CartView} />
        <Route path="/zaloguj" component={LoginView} />
        <Route path="/rejestracja" component={RegisterView} />
        <Route path="/moje-konto" component={ProfileView} />
        <Route path="/" component={HomeView} exact />
      </main>
      <Footer />
    </Router>
  );
}

export default App;
