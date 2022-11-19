import React, { useEffect } from "react";
import QuoteList from "../quotes/QuoteList";
import useHttp from "../../hooks/use-http";
import { getAllQuotes } from "../../lib/api";
import LoadingSpinner from "../UI/LoadingSpinner";
import NoQuotesFound from "../quotes/NoQuotesFound";
// const DummyData = [
//   { id: "q1", author: "sam", text: "learning React " },
//   { id: "q2", author: "viji", text: "learning React in chennai " },
//   { id: "q3", author: "kutty", text: "learning React in Tamilnadu " },
// ];

const AllQuotes = () => {
  const {
    sendRequest,
    status,
    data: loadedQuotes,
    error,
  } = useHttp(getAllQuotes, true);
  useEffect(() => {
    sendRequest();
  }, [sendRequest]);
  if (status === "pending") {
    return (
      <div className="centered ">
        <LoadingSpinner></LoadingSpinner>
      </div>
    );
  }
  if (error) {
    return <p className="centered  focused ">{error}</p>;
  }
  if (status === "completed" && (!loadedQuotes || loadedQuotes.length === 0)) {
    return <NoQuotesFound />;
  }
  return (
    <div>
      <h1>this is AllQuotese</h1>
      <QuoteList quotes={loadedQuotes}></QuoteList>
    </div>
  );
};

export default AllQuotes;
