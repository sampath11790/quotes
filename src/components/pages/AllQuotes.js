import React from "react";
import QuoteList from "../quotes/QuoteList";
const DummyData = [
  { id: "q1", author: "sam", text: "learning React " },
  { id: "q2", author: "viji", text: "learning React in chennai " },
  { id: "q3", author: "kutty", text: "learning React in Tamilnadu " },
];

const AllQuotes = () => {
  return (
    <div>
      <h1>this is AllQuotese</h1>
      <QuoteList quotes={DummyData}></QuoteList>
    </div>
  );
};

export default AllQuotes;
