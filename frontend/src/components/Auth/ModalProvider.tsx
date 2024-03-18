import { ReactNode, createContext, useContext, useState } from "react";

interface ModalContextType {
  openedModalId: string | null;
  openModal: (modalId: string) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType>({
  openedModalId: null,
  openModal: () => {},
  closeModal: () => {},
});

export const ModalProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [openedModalId, setOpenedModalId] = useState<string | null>(null); 

  const openModal = (modalId: string) => {
    setOpenedModalId(modalId);
  };

  const closeModal = () => {
    setOpenedModalId(null);
  };


  return (
    <ModalContext.Provider  value={{ openedModalId, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
