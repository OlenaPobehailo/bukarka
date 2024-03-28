import {
  CheckboxContainer,
  CheckboxInput,
  CheckboxLabel,
  ContinueButton,
  SubmitButton,
  SubmitWrapper,
} from "./Submit.styles";

interface SubmitProps {
  onChange: (checked: boolean) => void;
}

const Submit: React.FC<SubmitProps> = ({ onChange }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.checked);
  };

  return (
    <SubmitWrapper>
      <CheckboxContainer>
        <CheckboxLabel >
          <CheckboxInput  type="checkbox" onChange={handleInputChange} />
          <span>
            Відправляючи це замовлення, я підтверджую, що прочитав та згоден(а)
            з Умовами користування
          </span>
        </CheckboxLabel>
      </CheckboxContainer>

      <SubmitButton>Підтвердити замовлення</SubmitButton>
      <ContinueButton>Продовжити покупки</ContinueButton>

    </SubmitWrapper>
  );
};

export default Submit;
