import styled from "styled-components";

export const StyledSwitcher = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  font-family: "Montserrat", sans-serif;
  font-weight: ${(props) => (props.disabled ? "400" : "600")};
  font-size: 16px;
  color: ${(props) => (props.disabled ? "#7c7165" : "#1e1e1e")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  border: none;
  background-color: transparent;
  outline: none;
  transition: color 0.3s ease;

  &:hover {
    color: ${(props) => (props.disabled ? "#7c7165" : "#333333")};
  }
`;

export const Separator = styled.span`
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 16px;
  color: #1e1e1e;
`;
