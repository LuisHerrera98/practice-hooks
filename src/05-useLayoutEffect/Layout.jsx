import { useFetch, useCounter } from "../hooks";
import { LoadingQuote, Quote } from "../03-examples/components";

export const Layout = () => {
  const { counter, increment, decrement } = useCounter(1);
  const { data, isLoading, hasError } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );
  const { author, quote } = !!data && data[0];

  return (
    <>
      <h1>Breaking Bad</h1>
      <hr />
      {isLoading ? <LoadingQuote /> : <Quote author={author} quote={quote} />}

      <button
        disabled={isLoading || !(counter > 1)}
        onClick={() => decrement()}
        className="btn btn-primary"
      >
        Before Quote
      </button>
      <button
        disabled={isLoading}
        onClick={() => increment()}
        className="btn btn-primary"
      >
        Next Quote
      </button>
    </>
  );
};
