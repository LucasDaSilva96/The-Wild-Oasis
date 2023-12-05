import React from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CabinTable from "../features/cabins/CabinTable";
import AddCabin from "../features/cabins/Addcabin";
import CabinTableOperation from "../features/cabins/CabinTableOperation";

function Cabins() {
  return (
    <React.Fragment>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>

        <CabinTableOperation></CabinTableOperation>
      </Row>

      <Row>
        <CabinTable />

        <AddCabin />
      </Row>
    </React.Fragment>
  );
}

export default Cabins;
