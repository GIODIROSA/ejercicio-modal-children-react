import React from "react";
import { Modal } from "./Modal";
import { useModal } from "../hooks/useModal";

const Modals = () => {
  const [isOpenModal1, openModal1, closeModal1] = useModal(false);
  const [isOpenModal2, openModal2, closeModal2] = useModal(false);
  const [isOpenModal3, openModal3, closeModal3] = useModal(false);

  return (
    <>
      <h2>Modales</h2>
      <button onClick={openModal1}>Modal 1</button>
      <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
        <h3>Modal 1</h3>
        <p>Este es el contenido de mi Modal 1</p>
        <img src="https://placeimg.com/400/400/animals" alt="animales" />
      </Modal>

      {/* MODAL 2 */}
      <button onClick={openModal2}>Modal 2</button>
      <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
        <h3>Otro Modal</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor nulla
          perferendis debitis provident reprehenderit fugiat. Ex sint expedita
          earum commodi?
        </p>
        <img src="https://placeimg.com/400/400/nature" alt="naturaleza" />
      </Modal>

      {/* MODAL 3 */}
      <button onClick={openModal3}>Modal 3</button>
      <Modal isOpen={isOpenModal3} closeModal={closeModal3}>
        <h3>Uno más</h3>
        <p>Este es el contenido de mi Modal 3</p>
        <img src="https://placeimg.com/400/400/naturals" alt="naturaleza" />
      </Modal>
    </>
  );
};

export default Modals;
