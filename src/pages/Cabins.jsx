import React, { useState } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CabinTable from "../features/cabins/CabinTable";
import Button from "../ui/Button";
import CreateCabinForm from "../features/cabins/CreateCabinForm";

function Cabins() {
  const [showForm, setShowForm] = useState(false);
  return (
    <React.Fragment>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>

        <p>Filter / Sort</p>
      </Row>

      <Row>
        <CabinTable />

        <Button
          onClick={() => {
            return setShowForm((value) => !value);
          }}
        >
          Add new cabin
        </Button>
        {showForm && <CreateCabinForm />}
      </Row>
    </React.Fragment>
  );
}

export default Cabins;
