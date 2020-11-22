import styled from "styled-components";

export const Quote = styled.div`
  font-weight: 500;
  font-size: 36px;
  max-width: 620px;
  margin: 140px auto;
  position: relative;
  text-align: left;
  &::before {
    content: "";
    width: 8px;
    height: 100%;
    background: #f7df94;
    position: absolute;
    left: -100px;
    top: 0;
  }
`;
