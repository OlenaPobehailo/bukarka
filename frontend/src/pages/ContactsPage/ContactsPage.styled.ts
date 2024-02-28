import styled from "styled-components";

export const Wrapper = styled.div`
  /* display: flex; */
  width: 100%;
  padding: 0 32px 104px;
`;

export const Title = styled.h1`
  position: relative;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  min-width: 192px;
  width: fit-content;
  height: 32px;
  margin-top: 32px;

  margin-bottom: 40px;
  padding: 4px 16px;

  background-color: var(--bukarka-yellow);

  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 8px;
    background: var(--bukarka-blue);
  }
`;

export const Top = styled.div`
  display: flex;
  gap: 170px;
  margin-bottom: 16px;
  padding-left: 104px;

  h2 {
    margin-bottom: 16px;
    font-weight: 600;
    font-size: 20px;
    line-height: 1.2;
    color: #000;
  }
`;

export const Schedule = styled.p`
  margin-bottom: 20px;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.5;

  color: var(--bukarka-black);

  span {
    font-weight: 500;
  }
`;

export const FormWrapper = styled.div`
  padding-left: 104px;
  margin-bottom: 136px;
`;

export const Text = styled.p`
  width: 440px;

  font-weight: 400;
  font-size: 14px;
  line-height: 1.43;
  color: var(--bukarka-black);

  margin-bottom: 8px;
`;

export const TextLast = styled(Text)`
  margin-bottom: 40px;
`;

export const Form = styled.form``;

export const Input = styled.input`
  width: 416px;
  height: 40px;
  padding: 8px 16px;
  margin-bottom: 16px;

  border: 1px solid var(--bukarka-light-grey-1);
`;

export const Label = styled.label`
  display: block;

  font-weight: 600;
  font-size: 16px;
  line-height: 1.5;

  color: var(--bukarka-black);
`;

export const TextArea = styled.textarea`
  width: 712px;
  height: 113px;
  padding: 8px 16px;
  margin-bottom: 8px;
  border: 1px solid var(--bukarka-light-grey-1);

  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: var(--bukarka-dark-grey);
`;

export const Hint = styled.p`
  margin-bottom: 16px;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.33;

  color: var(--bukarka-dark-grey);
`;
export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 24px;
`;

export const Checkbox = styled.input.attrs({ type: "checkbox" })`
  width: 20px;
  height: 20px;
  border: 2px solid var(--bukarka-black);
`;

export const CheckboxLabel = styled.label`
  font-weight: 400;
  font-size: 14px;

  line-height: 1.43;
  color: var(--bukarka-black);
  vertical-align: middle;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 8px 16px;
  width: 415px;
  height: 40px;

  background: var(--bukarka-yellow);
  color: var(--bukarka-black);

  font-weight: 600;
  font-size: 16px;
  line-height: 1.5;

  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.25);
  }

  &:active {
    color: var(--bukarka-orange);
  }
`;
