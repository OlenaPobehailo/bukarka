import styled from "styled-components";

export const Form = styled.form`
  width: 416px;
`;

export const Label = styled.label`
  display: block;

  font-weight: 600;
  font-size: 16px;
  line-height: 1.5;

  color: var(--bukarka-black);
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: last baseline;
`;

export const InputWithIcon = styled.div`
  position: relative;
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

  /* &:last-child {
    margin-bottom: 24px;
  } */

  &:hover {
    box-shadow: inset 0 1px 4px 0 rgba(0, 0, 0, 0.25);
  }
`;

export const IconWrapper = styled.div`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  width: 32px;
  height: 32px;

  cursor: pointer;
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

export const ResetPasswordButton = styled.button`
  background-color: transparent;
  border: none;

  font-weight: 400;
  font-size: 12px;
  line-height: 1.33;
  color: var(--bukarka-dark-grey);

  &:hover {
    color: var(--bukarka-blue-heart);
  }
`;

export const Text = styled.p`
  margin-top: -16px;
  margin-bottom: 32px;

  color: var(--bukarka-dark-grey);

  font-weight: 400;
  font-size: 12px;
  line-height: 1.33;
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  gap: 14px;
  align-items: center;
  margin-bottom: 24px;

  font-weight: 400;
  font-size: 14px;
  line-height: 1.43;
  color: var(--bukarka-black);

  input[type="checkbox"] {
    width: 20px;
    height: 20px;
    padding: 8px;
    border: 2px solid var(--bukarka-black);
  }
`;
