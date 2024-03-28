import styled from "styled-components";
import { Wrapper } from "../OrderCommonStyled";

export const SubmitWrapper = styled(Wrapper)`
  width: 400px;
  background-color: transparent;
  padding: 0;
`;

export const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;

  margin-bottom: 16px;
`;

export const CheckboxLabel = styled.label`
  display: flex;
  gap: 14px;
  align-items: center;
  cursor: pointer;
  font-size: 16px;
  user-select: none;

  font-family: var(--regular);
  font-size: 14px;
  line-height: 1.43;
  color: var(--bukarka-black);
`;

export const CheckboxInput = styled.input`
  position: relative;

  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  min-width: 20px;
  height: 20px;
  border: 2px solid var(--bukarka-black);
  outline: none;
  cursor: pointer;
  margin-right: 5px;

  &:checked::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url('data:image/svg+xml;utf8,<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.8779 5.47885C18.1424 4.994 17.9637 4.38657 17.4789 4.1221C16.994 3.85764 16.3866 4.0363 16.1221 4.52115L10.8488 14.1889L6.28632 8.38218C5.94511 7.94791 5.31645 7.87247 4.88218 8.21368C4.44791 8.5549 4.37247 9.18355 4.71368 9.61782L10.2137 16.6178C10.4214 16.8822 10.7481 17.0245 11.0832 16.9965C11.4183 16.9686 11.7169 16.774 11.8779 16.4789L17.8779 5.47885Z" fill="%231E1E1E" /></svg>');
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  padding: 8px 16px;
  margin-bottom: 16px;

  background: var(--bukarka-orange);
  border: 2px solid var(--bukarka-orange);
  color: var(--bukarka-black);

  font-family: var(--bold);
  font-size: 16px;
  line-height: 1.5;
  transition: box-shadow 0.3s ease, color 0.3s ease, background-color 0.3s ease;

  &:hover,
  &:focus {
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.25);
  }

  &:active {
    color: var(--bukarka-yellow);
  }
`;

export const ContinueButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  padding: 8px 16px;
  margin-bottom: 16px;

  color: var(--bukarka-black);
  background-color: transparent;
  border: 2px solid var(--bukarka-yellow);

  font-family: var(--semibold);
  font-size: 16px;
  line-height: 1.5;
  transition: box-shadow color 0.3s ease;

  &:hover,
  &:focus {
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.25);
  }
`;
