import { Arrow } from "assets/icons";
import styled from "styled-components";

export const FreeInfo = styled.p`
  margin-bottom: 32px;
  font-family: var(--regular);
  font-weight: 400;
  font-size: 16px;

  line-height: 1.5;
  color: var(--bukarka-blue);
`;

export const CityInput = styled.input`
  margin-bottom: 32px;

  border: 1px solid var(--bukarka-light-grey-1);
  padding: 8px 16px;
  width: 384px;
  height: 40px;
  background-color: #fff;

  &::placeholder {
    font-family: var(--regular);
    font-size: 16px;
    line-height: 1.5;
    color: var(--bukarka-dark-grey);
  }
`;

export const Options = styled.div`
  position: absolute;
  z-index: 1;
  background-color: #fff;
  border: 1px solid #ccc;
  max-height: 150px;
  overflow-y: auto;
`;

export const Option = styled.div`
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const RadioWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;
`;

export const RadioButton = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 16px;

  font-family: var(--regular);
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: var(--bukarka-dark-grey);

  &:last-child {
    margin-bottom: 0;
  }
`;

export const RadioInput = styled.input`
  position: relative;

  margin: 0;
  margin-right: 24px;

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  width: 26px;
  height: 26px;
  border-radius: 100%;
  fill: var(--bukarka-light-grey-2);
  stroke-width: 1px;
  stroke: var(--bukarka-light-grey-1);
  box-shadow: inset 0 1px 4px 0 rgba(0, 0, 0, 0.25);
  transition: background-color 0.3s ease, border-color 0.3s ease;

  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: var(--bukarka-dark-grey);
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.25);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:checked::after {
    opacity: 1;
  }

  &:checked + span {
    color: var(--bukarka-black);
  }
`;

export const AddressInput = styled.input`
  width: 100%;
  height: 40px;

  border: 1px solid var(--bukarka-light-grey-1);
  padding: 8px 16px;

  font-family: var(--regular);
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: var(--bukarka-dark-black);

  &::placeholder {
    font-family: var(--regular);
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    color: var(--bukarka-dark-grey);
  }
`;
