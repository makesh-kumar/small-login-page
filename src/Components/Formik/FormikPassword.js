import React from "react";
import ReactDOM from "react-dom";
import { Formik, Form, useField, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import { TextField } from "@mui/material";
import ErrorText from "./ErrorText";
import "./formikStyles.css";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";

const FormikPassword = (props) => {
  const [field, meta] = useField(props);
  const [values, setValues] = React.useState({
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({
      showPassword: !values.showPassword,
    });
  };

  return (
    <>
      <Field type={props.type} name={props.name}>
        {({ field, form }) => {
          return (
            <FormControl sx={{ width: "31ch" }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                {props.label}
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={values.showPassword ? "text" : "password"}
                {...field}
                endAdornment={
                  <InputAdornment
                    style={{ position: "relative", right: "40px" }}
                  >
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>

            // <TextField
            //   id={props.name}
            //   name={props.name}
            //   label={props.label}
            //   {...field}
            //   type={props.type}
            //   error={
            //     form.touched[props.name] && Boolean(form.errors[props.name])
            //   }
            //   endAdornment={
            //     <InputAdornment position="end">
            //       <IconButton
            //         aria-label="toggle password visibility"
            //         onClick={handleClickShowPassword}
            //         edge="end"
            //       >
            //         {values.showPassword ? <VisibilityOff /> : <Visibility />}
            //       </IconButton>
            //     </InputAdornment>
            //   }
            // />
          );
        }}
      </Field>
    </>
  );
};
export default FormikPassword;
