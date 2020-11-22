import React, { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { QuoteType } from "../App";
import { Quote } from "./Quote";

const QuoteText = styled(Quote)`
  margin-top: 180px;
  margin-bottom: 100px;
`;

const QuoteInfoBlock = styled(Link)`
  max-width: 670px;
  display: flex;
  align-items: center;
  padding: 50px 30px;
  margin: 0 auto;
  cursor: pointer;
  text-decoration: none;
  transition: background 0.2s, color 0.2s;
  &:hover {
    background: #333333;
  }
`;

const QuoteInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const QuoteAuthor = styled.span`
  font-weight: bold;
  font-size: 24px;
  color: #4f4f4f;
  margin-bottom: 5px;
  ${QuoteInfoBlock}:hover & {
    color: #f2f2f2;
  }
`;
const QuoteGenre = styled.span`
  font-weight: 500;
  font-size: 14px;
  color: #828282;
`;

const QuoteInfoIcon = styled.span.attrs({
  className: "material-icons",
  children: "arrow_right_alt",
})`
  color: #f2f2f2;
  margin-left: auto;
`;

export const RandomQuotePage: FC<QuoteType> = ({
  quoteAuthor,
  quoteGenre,
  quoteText,
}) => {
  return (
    <>
      <QuoteText>{quoteText === "" ? "Loading..." : quoteText}</QuoteText>
      <QuoteInfoBlock to={`/authors/${quoteAuthor}`}>
        <QuoteInfo>
          <QuoteAuthor>{quoteAuthor}</QuoteAuthor>
          <QuoteGenre>{quoteGenre}</QuoteGenre>
        </QuoteInfo>
        <QuoteInfoIcon />
      </QuoteInfoBlock>
    </>
  );
};
