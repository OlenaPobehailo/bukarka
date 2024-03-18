import { loginFields } from "constants/authData";
import AuthForm from "../AuthForm/AuthForm";
import { Wrapper, Prompt, Title } from "./Login.styled";
import { useState } from "react";
import Modal from "components/Modal";
import Register from "../Register/Register";

interface Props {
  title: string;
  prompt: string;
}

const Login: React.FC<Props> = ({ title, prompt }) => {
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState<boolean>(false);

  const showLoginModal = () => {
    setIsRegisterModalOpen(!isRegisterModalOpen);
  };

  const closeRegisterModal = () => {
    setIsRegisterModalOpen(false);
  };

  const handleSubmit = (formData: { [key: string]: string }) => {
    // todo
    console.log("Login form submitted with data:", formData);
  };

  return (
    <>
      <Wrapper>
        <Title>{title}</Title>
        <AuthForm
          fields={loginFields}
          onSubmit={handleSubmit}
          title={title}
          prompt={prompt}
          showForgotPasswordLink ={true}
        />
        <Prompt onClick={showLoginModal}>{prompt}</Prompt>
      </Wrapper>

      {isRegisterModalOpen && (
        <Modal close={closeRegisterModal} showCloseButton={true}>
          <Register title="Реєстрація" prompt="Вхід до акаунту" />
        </Modal>
      )}
    </>
  );
};

export default Login;
