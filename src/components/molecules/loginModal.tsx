import { Dialog, Heading, Modal } from "react-aria-components";

import Button from "../atoms/button";
import "./loginModal.css";

type modalProps = {
  isOpen: boolean;
  toggleModal?: (e: any) => void;
  confirmLogin?: (e: any) => void;
};

const LoginModal = (props: modalProps) => {
  const { isOpen, toggleModal, confirmLogin } = props;

  return (
    <Modal className="modal" isDismissable={false} isOpen={isOpen}>
      <Dialog>
        <Heading className="explore-products--title mb-4" slot="title">
          Login
        </Heading>
        <p className="explore-products--description mb-4">
          Ingrese su usuario y contraseña
        </p>
        <div className="modal__actions">
          <Button
            className="modal__cancel button--outline"
            text="Cancelar"
            onClick={toggleModal}
          />
          <Button
            className="modal__login button--solid"
            text="Login"
            onClick={confirmLogin}
          />
        </div>
      </Dialog>
    </Modal>
  );
};

export default LoginModal;
