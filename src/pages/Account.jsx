import Heading from "../ui/Heading";
import Row from "../ui/Row";
import React from "react";

function Account() {
  return (
    <React.Fragment>
      <Heading as="h1">Update your account</Heading>

      <Row>
        <Heading as="h3">Update user data</Heading>
        <p>Update user data form</p>
      </Row>

      <Row>
        <Heading as="h3">Update password</Heading>
        <p>Update user password form</p>
      </Row>
    </React.Fragment>
  );
}

export default Account;
