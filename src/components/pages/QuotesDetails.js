import React from "react";
import { useParams, Route } from "react-router-dom";
import Comments from "../comments/Comments";
const QuotesDetails = () => {
  const parems = useParams();
  return (
    <div>
      <h1>this is QuotesDetails page</h1>
      <p>{parems.quotesId}</p>
      <Route path={`/quotes/${parems.quotesId}/comments`} exact>
        <Comments></Comments>
      </Route>
    </div>
  );
};

export default QuotesDetails;
