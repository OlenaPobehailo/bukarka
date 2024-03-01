import styled from "styled-components";

export const Form = styled.form`
  width: 416px;
`;

export const Label = styled.label`
  display: block;
`;

export const Input = styled.input`
  width: 100%;
  margin-bottom: 16px;
  padding: 8px 16px;

  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: var(--bukarka-dark-grey);

  border: 1px solid var(--bukarka-light-grey-1);

  &:last-child {
    margin-bottom: 24px;
  }

  &:hover {
    box-shadow: inset 0 1px 4px 0 rgba(0, 0, 0, 0.25);
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 8px 16px;
  margin-bottom: 24px;

  background: var(--bukarka-yellow);

  font-family: var(--font-family);
  font-weight: 600;
  font-size: 16px;

  line-height: 1.5;
  color: var(--bukarka-black);

  &:hover,
  &:focus {
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.25);
  }

  &:active {
    color: var(--bukarka-orange);
  }
`;
