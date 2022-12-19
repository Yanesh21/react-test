import React from "react";
import { useHistory } from "react-router";
import { Column, Table } from "react-virtualized";
import "react-virtualized/styles.css";
import { Box, Button, Flex, Header } from "../styled";
import store from "../../redux";

const View = () => {
  const history = useHistory();

  const emp = store.getState().employees.employees_records;

  return (
    <>
      <Header data-cy="header">View Employees</Header>
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        marginTop="lg"
      >
        <Box>
          <Table
            width={300}
            height={300}
            headerHeight={20}
            rowHeight={30}
            rowCount={emp.length}
            rowGetter={({ index }) => emp[index]}
          >
            <Column label="First Name" dataKey="firstName" width={100} />
            <Column width={200} label="Surname" dataKey="surname" />
            <Column width={200} label="Email" dataKey="email" />
            <Column width={200} label="Birth Date" dataKey="birthDate" />
            <Column width={200} label="Status" dataKey="status" />
            <Column width={200} label="Job Title" dataKey="jobTitle" />
          </Table>
          <Button data-cy="backButton" onClick={() => history.goBack()}>
            Back
          </Button>
        </Box>
      </Flex>
    </>
  );
};

export default View;
