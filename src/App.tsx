import React from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import "./css/Main.css";
import { AppRouter } from "./Components/AppRouter";
import { Header } from "./Components/Header";
import { fetchUsers } from "./redux/slices/authSlice";
import { AppDispatch, RootState } from "./redux/state";
import { ContextInterface } from "./types/types";

export const AppContext = React.createContext({} as ContextInterface);

function App() {
  const dispatch = useDispatch<AppDispatch>();

  const { isAuth, user } = useSelector((state: RootState) => state.auth);
  const [openModal, setOpenModal] = React.useState(false);

  React.useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <>
      <AppContext.Provider value={{ openModal, setOpenModal }}>
        <Header isAuth={isAuth} user={user} />
        <AppRouter isAuth={isAuth} />
      </AppContext.Provider>
    </>
  );
}

export default App;
