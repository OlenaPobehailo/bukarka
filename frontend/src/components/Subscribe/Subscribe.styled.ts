import styled from "styled-components";

// export const FormWrapper = styled.div`
//   width: 100%;
// `;
export const Form = styled.form`
  width: 736px;
  height: 160px;
  margin: 0 auto;
  padding: 32px 48px;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  gap: 24px;

  background-color: var(--bukarka-light-grey-1);
`;

export const Title = styled.label`
  font-weight: 400;
  font-size: 24px;

  line-height: 1.33;
  color: var(--bukarka-black);
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  border: 1px solid var(--bukarka-light-grey-1);
  padding: 8px 112px 8px 16px;
  width: 416px;
  height: 40px;

  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;

  transition: box-shadow 0.3s ease;

  color: var(--bukarka-dark-grey);

  &:hover,
  &:focus {
    box-shadow: inset 0 1px 4px 0 rgba(0, 0, 0, 0.25);
  }

  &:focus {
    border: 1px solid var(--bukarka-light-grey-1);
  }
`;

export const Button = styled.button`
  padding: 8px 16px;
  width: 192px;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 0px;

  font-weight: 600;
  font-size: 16px;
  line-height: 1.5;

  background: var(--bukarka-yellow);
  border: none;

  transition: box-shadow 0.3s ease;

  &:hover,
  &:focus {
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.25);
  }

  &:active {
    color: var(--bukarka-orange);
  }
`;
