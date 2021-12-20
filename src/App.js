import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import Privacy from "./pages/Privacy";
import Tnc from "./pages/TNC";
import Refund from "./pages/Refund";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import route from "./Common/route";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path={route.home} component={Home} exact />
          <Route path={route.checkout} component={Checkout} />
          <Route path={route.privacy} component={Privacy} />
          <Route path={route.tnc} component={Tnc} />
          <Route path={route.refund} component={Refund} />
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
