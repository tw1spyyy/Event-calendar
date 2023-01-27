import React from "react";
import { AppContext } from "../App";
import { EventCalendar } from "../Components/EventCalendar";
import { ModalForm } from "../Components/ModalForm";

export const Event = () => {
  const { openModal, setOpenModal } = React.useContext(AppContext);

  const onModalBgClick = () => {
    document.body.style.overflow = "auto";
    setOpenModal((prev) => !prev);
  };

  return (
    <div className="event">
      <EventCalendar events={[]} />
      {openModal ? (
        <>
          <div className="modal__bg" onClick={onModalBgClick}></div>
          <div className="modal">
            <ModalForm />
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};
