import React from "react";
import ReactDOM from "react-dom";
import { Formik, Form, useField, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import { TextField } from "@mui/material";
import ErrorText from "./ErrorText";
import "./formikStyles.css";

const FormikInput = (props) => {
  const [field, meta] = useField(props);
  return (
    <>
      {/* <label htmlFor={props.id || props.name}>{props.label}</label> */}
      {/* <input className="text-input" {...field} {...props} /> */}
      {/* <Field type="text" name={props.name} {...props}></Field> */}
      <Field className="error" type={props.type} name={props.name}>
        {({ field, form }) => {
          return (
            <TextField
             
              id={props.name}
              name={props.name}
              label={props.label}
              {...field}
              type={props.type}
              error={
                form.touched[props.name] && Boolean(form.errors[props.name])
              }
            />
          );
        }}
      </Field>
      {/* <ErrorMessage name={props.name} component={ErrorText} /> */}
      {/* // <ErrorMessage name={props.name} component={"div"} /> */}
    </>
  );
};
export default FormikInput;
