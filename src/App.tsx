import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import { AllQuotesByAuthor } from "./components/AllQuotesByAuthor";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { RandomQuotePage } from "./components/RandomQuotePage";
import axios from "axios";

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  padding-left: 15px;
  padding-right: 15px;
  margin: auto;
  font-family: Raleway;
`;

export type QuoteType = {
  _id: string;
  quoteAuthor: string;
  quoteGenre: string;
  quoteText: string;
};

export const emptyQuote: QuoteType = {
  _id: "",
  quoteAuthor: "",
  quoteGenre: "",
  quoteText: "",
};

const App: React.FC = () => {
  const [randomQuote, setRandomQuote] = useState<QuoteType>(emptyQuote);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios("https://quote-garden.herokuapp.com/api/v2/quotes/random")
      .then((response) => {
        const respData: QuoteType = response.data.quote;
        setRandomQuote(respData);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  const onUpdateButtonClicked = () => {
    setRandomQuote(emptyQuote);
    fetchData();
  };

  return (
    <Router>
      <Container>
        <Header {...{ onUpdateButtonClicked }} />
        <Switch>
          <Route path="/" exact>
            <RandomQuotePage {...randomQuote} />
          </Route>
          <Route path="/authors/:author">
            <AllQuotesByAuthor />
          </Route>
        </Switch>
        <Footer />
      </Container>
    </Router>
  );
};

export default App;
