import React from "react";
import { Form } from "../Components/Form";
import { LoginExamples } from "../Components/LoginExamples";

export const Login = () => {
  return (
    <div className="login">
      <LoginExamples />
      <Form />
    </div>
  );
};
