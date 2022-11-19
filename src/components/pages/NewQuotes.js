import QuoteForm from "../quotes/QuoteForm";
import { useHistory } from "react-router-dom";
// import { useHttp } from "../../hooks/use-http";
import React, { useEffect } from "react";
import useHttp from "../../hooks/use-http";
import { addQuote } from "../../lib/api";

const NewQuotes = () => {
  const history = useHistory();
  const { sendRequest, status } = useHttp(addQuote);
  useEffect(() => {
    if (status === "completed") {
      history.push("/quotes");
    }
  }, [status, history]);

  const onAddQuoteHandler = (item) => {
    console.log(item);
    sendRequest(item);
    //console.log("before push", history);
    // history.push("/quotes");
    // console.log("after push", history);
  };
  return (
    <div>
      <QuoteForm
        isLoading={status === "pending"}
        onAddQuote={onAddQuoteHandler}
      ></QuoteForm>
    </div>
  );
};

export default NewQuotes;
