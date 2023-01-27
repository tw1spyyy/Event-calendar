import { Navigate, Route, Routes } from "react-router-dom";
import { Event } from "../Pages/Event";
import { Login } from "../Pages/Login";
import { AppRouterProps } from "../types/types";

export const AppRouter = ({ isAuth }: AppRouterProps) => {
  return (
    <div className="content">
      {isAuth ? (
        <Routes>
          <Route path="/event" element={<Event />} />
          <Route path="*" element={<Navigate to="/event" />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      )}
    </div>
  );
};
