import React, { FC } from "react";
import styled from "styled-components";

const FooterInner = styled.footer`
  text-align: center;
  padding: 20px;
  margin-top: 180px;
  font-weight: 600;
  font-size: 14px;
  color: #a9a9a9;
  font-family: Montserrat;
`;

export const Footer: FC = () => {
  return <FooterInner>mahtishavaev @ DevChallenges.io</FooterInner>;
};
