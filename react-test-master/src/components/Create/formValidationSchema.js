import * as yup from "yup";

const statusList = ["ACTIVE", "LEAVE_OF_ABSENCE", "TERMINATED"];

const formValidationSchema = yup.object().shape({
  firstName: yup
    .string()
    .trim()
    .max(255, "The maximum number of characters is 255")
    .required("Required"),
  surname: yup
    .string()
    .trim()
    .max(255, "The maximum number of characters is 255")
    .required("Required"),
  email: yup
    .string()
    .trim()
    .max(255, "The maximum number of characters is 255")
    .email("Invalid email address")
    .required("Required"),
  birthDate: yup.date("YYYY-MM-DD").required("Required"),
  status: yup.string().required("Please select a status").oneOf(statusList),
  jobTitle: yup.string().required("Job title required"),
});

export default formValidationSchema;
