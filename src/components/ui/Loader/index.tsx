"use client";
import React from "react";
import { LoadingContainer, Spinner } from "./styled";

const Loader = () => {
  return (
    <LoadingContainer>
      <Spinner />
    </LoadingContainer>
  );
};

export default Loader;
