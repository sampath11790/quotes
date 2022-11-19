import React, { useEffect } from "react";
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";
import Comments from "../comments/Comments";
import HighlightedQuote from "../quotes/HighlightedQuote";
import useHttp from "../../hooks/use-http";
import { getSingleQuote } from "../../lib/api";
import LoadingSpinner from "../UI/LoadingSpinner";

const QuotesDetails = () => {
  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true);

  const match = useRouteMatch();
  const params = useParams();
  const { quotesId } = params;
  console.log(params);
  // const quote = DummyData.find((quote) => {
  //   return quote.id === parems.quotesId;
  // });

  // if (!quote) {
  //   return "this not in your list";
  // }
  useEffect(() => {
    // console.log(qu);
    sendRequest(quotesId);
  }, [sendRequest, quotesId]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered">{error}</p>;
  }

  if (!loadedQuote.text) {
    return <p>No quote found!</p>;
  }

  return (
    <div>
      <HighlightedQuote
        text={loadedQuote.text}
        author={loadedQuote.author}
      ></HighlightedQuote>

      {/* <h1>this is QuotesDetails page</h1>
      <p>{parems.quotesId}</p> */}
      <Route path={match.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load comment
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`} exact>
        <Comments></Comments>
      </Route>
    </div>
  );
};

export default QuotesDetails;
