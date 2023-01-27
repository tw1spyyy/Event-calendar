import React from "react";
import { useDispatch } from "react-redux";
import { AppContext } from "../App";
import { onLeaveClick } from "../redux/slices/authSlice";
import { HeaderProps } from "../types/types";

export const Header = ({ isAuth, user }: HeaderProps) => {
  const { setOpenModal } = React.useContext(AppContext);

  const dispatch = useDispatch();
  const onLeaveHandler = () => {
    dispatch(onLeaveClick());
  };

  const onAddEvent = () => {
    document.body.style.overflow = "hidden";
    setOpenModal((prev) => !prev);
  };

  return (
    <div className="header">
      {isAuth ? (
        <>
          <div className="addEventBtn" onClick={onAddEvent}>
            Add Event
          </div>
          <div className="userName">{user}</div>
          <ul className="navBar">
            <li onClick={onLeaveHandler} className="navBar__item">
              Leave
            </li>
          </ul>
        </>
      ) : (
        <ul className="navBar">
          <li className="navBar__item">Login</li>
        </ul>
      )}
    </div>
  );
};
