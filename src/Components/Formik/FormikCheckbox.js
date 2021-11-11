import React from "react";
import ReactDOM from "react-dom";
import { Formik, Form, useField, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import { TextField } from "@mui/material";
import ErrorText from "./ErrorText";
import "./formikStyles.css";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const FormikCheckbox = (props) => {
  const [field, meta] = useField(props);
  return (
    <>
      <Field className="error" type={props.type} name={props.name}>
        {({ field, form }) => {
          return (
            <RadioGroup row {...field}>
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
          );
        }}
      </Field>
      {/* <ErrorMessage name={props.name} component={ErrorText} /> */}
      {/* // <ErrorMessage name={props.name} component={"div"} /> */}
    </>
  );
};
export default FormikCheckbox;
