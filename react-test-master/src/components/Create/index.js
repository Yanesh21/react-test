import React, { useCallback } from "react";
import { Formik, Form } from "formik";
import { useDispatch } from "react-redux";
import { Flex, Header } from "../styled";
import FormField from "./FormField";
import FormButtons from "./FormButtons";
import formValidationSchema from "./formValidationSchema";
import { saveNewEmployee } from "../../redux/employees/actionCreators";

const Create = () => {
  const dispatch = useDispatch();
  const submitForm = useCallback(
    employee => {
      dispatch(saveNewEmployee(employee));
    },
    [dispatch]
  );

  const handleChange = () => {};

  return (
    <>
      <Header>Create new employee</Header>
      <Formik
        validationSchema={formValidationSchema}
        onSubmit={submitForm}
        initialValues={{
          firstName: "",
          surname: "",
          email: "",
          birthDate: "",
          status: "",
          jobTitle: "",
        }}
      >
        <Flex alignItems="center" justifyContent="center" height="100%">
          <Flex alignItems="left" direction="column" width="300px">
            <FormField name="firstName" placeholder="First name" />
            <FormField name="surname" placeholder="Surname" />
            <FormField name="email" placeholder="Email" />
            <FormField name="birthDate" placeholder="Birth date" />
            <Form>
              <select
                name="status"
                value="select a status"
                onChange={handleChange}
              >
                <option value="Activated" label="Activated" />
                <option value="LEAVE_OF_ABSENCE" label="LEAVE_OF_ABSENCE" />
                <option value="TERMINATED" label="TERMINATED" />
              </select>
            </Form>
            <FormField name="jobTitle" placeholder="Job title" />
            <FormButtons />
          </Flex>
        </Flex>
      </Formik>
    </>
  );
};

export default Create;
