import { useState } from "react";
import { Button, Form, Input, Label } from "./AuthForm.styled";

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
}

const AuthForm: React.FC<Props> = ({
  title,
  fields,
  prompt,
  onSubmit,
  showForgotPasswordLink = false,
  showPasswordText = false,
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
          <div key={index}>
            <Label htmlFor={field.name}>{field.label}</Label>
            {showForgotPasswordLink && field.name === "password" && (
              <p>Забули пароль?</p>
            )}
            <Input
              type={field.type}
              id={field.name}
              name={field.name}
              placeholder={field.placeholder}
              value={formData[field.name] || ""}
              onChange={handleChange}
              />
              {showPasswordText && field.name === "password" && (
                <p>Пароль має містити не менше восьми знаків без урахування пробілів на початку та в кінці.</p>
              )}
          </div>
        ))}
        <Button type="submit">Submit</Button>
      </Form>
    </>
  );
};

export default AuthForm;
