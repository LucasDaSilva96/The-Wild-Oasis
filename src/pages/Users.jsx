import React from "react";
import Heading from "../ui/Heading";
import SignupForm from "../features/authentication/SignupForm";

function NewUsers() {
  return (
    <React.Fragment>
      <Heading as="h1">Create a new user</Heading>
      <SignupForm />
    </React.Fragment>
  );
}

export default NewUsers;
