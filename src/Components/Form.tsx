import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { formSubmit, clearErrorText } from "../redux/slices/authSlice";
import { changeUser } from "../redux/slices/eventSlice";
import { AppDispatch, RootState } from "../redux/state";

export const Form: FC = () => {
  const [login, setLogin] = React.useState("");
  const [password, setPassword] = React.useState("");

  const { errorText } = useSelector((state: RootState) => state.auth);

  const dispatch = useDispatch<AppDispatch>();

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTimeout(() => {
      dispatch(formSubmit({ username: login, password }));
      dispatch(changeUser());
    }, 500);
  };

  const onLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(e.target.value);
    dispatch(clearErrorText());
  };
  const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    dispatch(clearErrorText());
  };

  return (
    <form onSubmit={(e) => onSubmitHandler(e)} className="form">
      <label htmlFor="fname">UserName</label>
      <input
        type="text"
        id="fname"
        name="firstname"
        placeholder="User name.."
        onChange={(e) => onLoginChange(e)}
        value={login}
      ></input>

      <label htmlFor="lname">Password</label>
      <input
        type="password"
        id="lname"
        name="lastname"
        placeholder="Password.."
        onChange={(e) => onPasswordChange(e)}
        value={password}
      ></input>
      <div className="errorText">{errorText}</div>
      <input type="submit" value="Join"></input>
    </form>
  );
};
