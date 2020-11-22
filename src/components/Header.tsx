import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderInner = styled.header`
  display: flex;
  padding-top: 30px;
  padding-bottom: 30px;
`;

const UpdateButton = styled(Link)`
  margin-left: auto;
  color: #4f4f4f;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    color: #333;
  }
`;

const UpdateButtonText = styled.span`
  font-size: 18px;
  font-weight: 500;
`;

const UpdateButtonIcon = styled.i.attrs({
  className: "material-icons",
  children: "sync",
})`
  font-size: 18px;
  margin-left: 10px;
`;

type PropsType = {
  onUpdateButtonClicked: () => void;
};

export const Header: React.FC<PropsType> = ({ onUpdateButtonClicked }) => {
  return (
    <HeaderInner>
      <UpdateButton to="/" onClick={onUpdateButtonClicked}>
        <UpdateButtonText>random</UpdateButtonText>
        <UpdateButtonIcon />
      </UpdateButton>
    </HeaderInner>
  );
};
