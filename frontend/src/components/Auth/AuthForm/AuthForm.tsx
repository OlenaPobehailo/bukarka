import { useState } from "react";
import {
  Button,
  Form,
  Input,
  Label,
  ResetPasswordButton,
  Wrapper,
  Text,
  CheckboxWrapper,
} from "./AuthForm.styled";

interface Field {
  name: string;
  label: string;
  type: string;
  placeholder: string;
}

interface Props {
  title: string;
  fields: Field[];
  onSubmit: (formData: { [key: string]: string }) => void;
  prompt: string;
  showForgotPasswordLink?: boolean;
  showPasswordText?: boolean;
  checkbox?: boolean;
}

const AuthForm: React.FC<Props> = ({
  title,
  fields,
  prompt,
  onSubmit,
  showForgotPasswordLink = false,
  showPasswordText = false,
  checkbox = false,
}) => {
  const [formData, setFormData] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        {fields.map((field, index) => (
          <>
            <div key={index}>
              <Wrapper>
                <Label htmlFor={field.name}>{field.label}</Label>
                {showForgotPasswordLink && field.name === "password" && (
                  <ResetPasswordButton>Забули пароль?</ResetPasswordButton>
                )}
              </Wrapper>
              <Input
                type={field.type}
                id={field.name}
                name={field.name}
                placeholder={field.placeholder}
                value={formData[field.name] || ""}
                onChange={handleChange}
              />
              {showPasswordText && field.name === "password" && (
                <Text>
                  Пароль має містити не менше восьми знаків без урахування
                  пробілів на початку та в кінці.
                </Text>
              )}
            </div>
          </>
        ))}
        {checkbox && (
          <CheckboxWrapper>
            <input
              type="checkbox"
              id="termsCheckbox"
              // checked={isChecked}
              // onChange={handleCheckboxChange}
            />
            <label htmlFor="termsCheckbox">
              Погоджуюсь з Умовами користування
            </label>
          </CheckboxWrapper>
        )}
        <Button type="submit">Submit</Button>
      </Form>
    </>
  );
};

export default AuthForm;
