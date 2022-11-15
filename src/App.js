import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import AllQuotes from "./components/pages/AllQuotes";
import NewQuotes from "./components/pages/NewQuotes";
import QuotesDetails from "./components/pages/QuotesDetails";
import Comments from "./components/comments/Comments";
function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/quotes" />
        </Route>
        <Route path="/quotes" exact>
          <AllQuotes></AllQuotes>
        </Route>
        <Route path="/quotes/:quotesId">
          <QuotesDetails></QuotesDetails>
        </Route>
        <Route path="/new-quotes">
          <NewQuotes></NewQuotes>
        </Route>
        {/* <Route path="/comments">
          <Comments></Comments>
        </Route> */}
      </Switch>
    </div>
  );
}

export default App;
