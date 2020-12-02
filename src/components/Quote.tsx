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
  @media (max-width: 991.98px) {
    margin-left: 40px;
    &::before {
      left: -20px;
    }
  }
  @media (max-width: 767.98px) {
    margin-left: 20px;
    font-size: 24px;
    margin-top: 80px;
    margin-bottom: 80px;
  }
`;
