import React from "react";
import { useParams, Route, Link } from "react-router-dom";
import Comments from "../comments/Comments";
import HighlightedQuote from "../quotes/HighlightedQuote";
const DummyData = [
  { id: "q1", author: "sam", text: "learning React " },
  { id: "q2", author: "viji", text: "learning React in chennai " },
  { id: "q3", author: "kutty", text: "learning React in Tamilnadu " },
];
const QuotesDetails = () => {
  const parems = useParams();
  const quote = DummyData.find((quote) => {
    return quote.id === parems.quotesId;
  });

  if (!quote) {
    return "this not in your list";
  }

  return (
    <div>
      <HighlightedQuote
        text={quote.text}
        author={quote.author}
      ></HighlightedQuote>

      {/* <h1>this is QuotesDetails page</h1>
      <p>{parems.quotesId}</p> */}
      <Route path={`/quotes/${parems.quotesId}`} exact>
        <div className="centered">
          <Link
            className="btn--flat"
            to={`/quotes/${parems.quotesId}/comments`}
          >
            Load comment
          </Link>
        </div>
      </Route>
      <Route path={`/quotes/${parems.quotesId}/comments`} exact>
        <Comments></Comments>
      </Route>
    </div>
  );
};

export default QuotesDetails;
