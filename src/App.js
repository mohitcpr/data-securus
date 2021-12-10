import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import route from "./Common/route";
function App() {
  return (
    <Router>
      <Switch>
        <Route path={route.home} component={Home} exact />
        <Route path={route.checkout} component={Checkout} />
      </Switch>
    </Router>
  );
}

export default App;
