import ReactDOM from "react-dom";
import { ReactNode, useCallback, useEffect } from "react";
import { CloseButton, ModalContent, ModalWrapper } from "./Modal.styled";
import { CrossIcon } from "assets/icons";

interface ModalProps {
  children: ReactNode;
  close: () => void;
  showCloseButton?: boolean;
  animation?: string;
}

const rootModal = document.querySelector("#modal");
const modalContainer = rootModal?.appendChild(document.createElement("div"));

if (!modalContainer) {
  throw new Error("Modal container not found");
}

const Modal: React.FC<ModalProps> = ({
  children,
  close,
  showCloseButton,
  animation = "fade",
}) => {
  const handleKeyDown: any = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Escape") {
        close();
      }
    },
    [close]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "visible";
    };
  }, [close, handleKeyDown]);

  const handleClickOutside = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (e.target === e.currentTarget) {
      close();
    }
  };

  return ReactDOM.createPortal(
    <ModalWrapper onClick={handleClickOutside}>
      <ModalContent animation={animation}>
        {showCloseButton && (
          <CloseButton onClick={close}>
            <CrossIcon />
          </CloseButton>
        )}
        {children}
      </ModalContent>
    </ModalWrapper>,
    modalContainer
  );
};

export default Modal;
