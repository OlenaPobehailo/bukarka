import AuthForm from "../AuthForm/AuthForm";
import { useState } from "react";
import Modal from "components/Modal";
import Login from "../Login/Login";
import { registerFields } from "constants/authData";
import { Prompt, Title, Wrapper } from "./Register.styled";

interface Props {
  title: string;
  prompt: string;
}

const Register: React.FC<Props> = ({ title, prompt }) => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false);

  const showLoginModal = () => {
    setIsLoginModalOpen(!isLoginModalOpen);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
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
          fields={registerFields}
          onSubmit={handleSubmit}
          title={title}
          prompt={prompt}
          showPasswordText={true}
          checkbox={true}
        />
        <Prompt onClick={showLoginModal}>{prompt}</Prompt>
      </Wrapper>

      {isLoginModalOpen && (
        <Modal close={closeLoginModal} showCloseButton={true}>
          <Login title="Вхід до акаунту" prompt="Реєстрація нового акаунту" />
        </Modal>
      )}
    </>
  );
};

export default Register;
