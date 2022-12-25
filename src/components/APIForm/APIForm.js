import React from "react";
import Button from "../UI/Button/Button";
import Wrapper from "./APIForm.styled";

const APIForm = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <Wrapper className="flex-c" onSubmit={submitHandler}>
      <input type="link" placeholder="Shorten a link here..." required />
      <Button className="filled primary fullWidth text-white fs-500">
        Shorten It!
      </Button>
    </Wrapper>
  );
};

export default APIForm;
