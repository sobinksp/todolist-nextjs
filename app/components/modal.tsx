interface ModalProps {
  modalState: boolean;
  setModalState: (state: boolean) => boolean | void;
  children: React.ReactNode; // a type that represents A react element (stirng, booean...)
}

export default function Modal({
  modalState,
  setModalState,
  children,
}: ModalProps) {
  return (
    <div>
      <dialog
        id="my_modal_1"
        className={`modal ${modalState ? "modal-open" : ""}`}
      >
        <div className="modal-box">
          {/* <p className="py-4">
            Press ESC key or click the button below to close
          </p> */}
          {children}
          {/* <div className="modal-action flex mt-5 flex-between"> */}
        </div>
      </dialog>
    </div>
  );
}

// className={`modal ${modalState ? "modal-open" : ""}`}
