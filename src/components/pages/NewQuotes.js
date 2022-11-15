import QuoteForm from "../quotes/QuoteForm";
import { useHistory } from "react-router-dom";
const NewQuotes = () => {
  const history = useHistory();
  const onAddQuoteHandler = (item) => {
    console.log(item);
    console.log("before push", history);
    history.push("/quotes");
    console.log("after push", history);
  };
  return (
    <div>
      <QuoteForm onAddQuote={onAddQuoteHandler}></QuoteForm>
    </div>
  );
};

export default NewQuotes;
