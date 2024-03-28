import styled from "styled-components";

export const PersonalDataInputs = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;

  margin-top: 32px;

  li {
    flex-basis: calc(50% - 8px);
  }

  li:nth-child(-n + 2) {
    margin-bottom: 8px;
  }
`;

export const Input = styled.input`
  width: 100%;

  border: 1px solid var(--bukarka-light-grey-1);
  padding: 8px 16px;
  height: 40px;

  color: var(--bukarka-black);
  font-family: var(--regular);
  font-size: 16px;
  line-height: 1.5;

  &::placeholder {
    font-family: var(--regular);
    font-size: 16px;

    line-height: 1.5;
    color: var(--bukarka-dark-grey);
  }
`;
