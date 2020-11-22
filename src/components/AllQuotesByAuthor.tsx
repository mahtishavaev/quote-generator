import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { Quote } from "./Quote";
import axios from "axios";
import { useParams } from "react-router-dom";
import { QuoteType, emptyQuote } from "../App";

const Title = styled.h2`
  font-weight: bold;
  font-size: 36px;
  color: #333333;
  max-width: 620px;
  margin: 0 auto;
`;

export const AllQuotesByAuthor: FC = () => {
  const [quotes, setQuotes] = useState<QuoteType[]>([emptyQuote]);

  let { author } = useParams<{ author: string }>();

  useEffect(() => {
    axios("https://quote-garden.herokuapp.com/api/v2/authors/" + author)
      .then((response) => {
        const respData: QuoteType[] = response.data.quotes;
        setQuotes(respData);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [author]);

  return (
    <>
      <Title>{author}</Title>
      {quotes[0].quoteText === "" ? (
        <Quote>Loading...</Quote>
      ) : (
        quotes.map((quote) => <Quote key={quote._id}>{quote.quoteText}</Quote>)
      )}
    </>
  );
};
