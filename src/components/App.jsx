import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./organisms/Header";
import Footer from "./organisms/Footer";
import Countries from "./pages/Countries";
import Country from "./pages/Country";
import Error from "./pages/Error";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Countries />
        </Route>

        <Route exact path="/country/:name">
          <Country />
        </Route>

        <Route path="/*">
          <Error />
        </Route>
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
